(function() {
  angular.module('contacts.controller', ['contacts.service'])
  .controller('ContactsController', function(ContactsService) {
    $scope.contactData = ContactsService.getContactData('allContacts');
  });
})();
