(function() {
  angular.module('contacts', [
    'ui.router',
    'contacts.controller',
    'contacts.service',
    'edit.controller',
    'details.controller',
    'new.controller'
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
        controller: 'IndividualController',
        templateUrl: '_individual.html'
      })
      .$state('edit', {
        url: '/edit:id',
        controller: 'EditController',
        templateUrl: '_edit.html'
      })
      .$state('new', {
        url: '/new',
        controller: 'NewController',
        templateUrl: '_new.html'
      });
  });

})();
