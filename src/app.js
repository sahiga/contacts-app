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
      .state('contacts', {
        url: '/',
        controller: 'ContactsController',
        templateUrl: 'src/contacts/_contacts.html'
      })
      .state('details', {
        url: '/details&name=:name',
        controller: 'DetailsController',
        templateUrl: 'src/details/_details.html',
        params: {
          name: null
        }
      })
      .state('edit', {
        url: '/edit&name=:name',
        controller: 'EditController',
        templateUrl: 'src/edit/_edit.html',
        params: {
          name: null
        }
      })
      .state('new', {
        url: '/new',
        controller: 'NewController',
        templateUrl: 'src/new/_new.html'
      });

    $urlRouterProvider.otherwise('/');
  });

})();
