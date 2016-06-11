(function() {
  angular.module('contacts.constants', [])
  .constant('ContactsConstants', {
    TELEPHONE_REGEXP: '\([0-9]{3}\)\s?[0-9]{3}\-[0-9]{4}|[0-9]{10}|[0-9]{3}\.[0-9]{3}\.[0-9]{4}'
  });
})();
