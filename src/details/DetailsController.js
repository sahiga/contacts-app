(function() {
  angular.module('details.controller', ['contacts.service'])
  .controller('DetailsController', function($scope, $state, ContactsService) {
    
    $scope.currentContact = ContactsService.getContactData('currentContact');
  });
})();
