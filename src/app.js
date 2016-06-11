(function() {
  angular.module('contacts', [
    'ui.router',
    'contacts.controller',
    'contacts.service',
    'edit.contact.controller',
    'individual.contact.controller',
    'new.contact.controller'
  ])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .$state('home', {
        url: '/',
        controller: 'ContactsController',
        templateUrl: '_contacts.html'
      })
      .$state('individual', {
        url: '/individual:id',
        controller: 'IndividualContactController',
        templateUrl: '_contact.html'
      })
      .$state('edit', {
        url: '/edit:id',
        controller: 'EditContactController',
        templateUrl: '_edit.html'
      })
      .$state('new', {
        url: '/new',
        controller: 'NewContactController',
        templateUrl: '_new_contact.html'
      });
  });

})();
