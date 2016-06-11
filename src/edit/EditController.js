(function() {
  angular.module('edit.controller', ['contacts.service'])
  .controller('EditController', function($scope, $state, ContactsService) {
    $scope.contactData = ContactsService.getContactData();

    $scope.updateContact = function() {
      ContactsService.updateContact($scope.contactData.currentContact);
      $state.go('contacts');
    };
  });
})();
