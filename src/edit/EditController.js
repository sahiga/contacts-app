(function() {
  angular.module('edit.controller', ['contacts.service'])
  .controller('EditController', function($scope, $state, ContactsService) {
    $scope.contactData = ContactsService.getContactData();
  });
})();
