(function() {
  angular.module('contacts.controller', ['contacts.service'])
  .controller('ContactsController', function($scope, $state, ContactsService) {

    $scope.allContacts = ContactsService.getContactData('allContacts');

    $scope.showContactDetails = function(contact) {
      ContactsService.setContactData('currentContact', contact);
      $state.go('details', {name: contact.name});
    };
  });
})();
