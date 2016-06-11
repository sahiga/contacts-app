(function() {
  angular.module('new.controller', ['contacts.service', 'contacts.constants'])
  .controller('NewController', function($scope, $state, ContactsService, ContactsConstants) {
    $scope.telephoneRegexp = ContactsConstants.TELEPHONE_REGEXP; 
  });
})();
