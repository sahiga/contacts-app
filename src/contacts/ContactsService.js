(function() {
  angular.module('contacts.service', [])
  .service('ContactsService', function() {
    var contactData = {
      allContacts: [
        {
          id: 1,
          name: 'Blake Al-Shahrani',
          firstName: 'Blake',
          lastName: 'Al-Shahrani',
          phone: '(101) 101-1011',
          email: 'blake@dymaxion.com'
        },
        {
          id: 2,
          name: 'Trent Asteres',
          firstName: 'Trent',
          lastName: 'Asteres',
          phone: '(202) 202-2022',
          email: 'trent@dymaxion.com'
        },
        {
          id: 3,
          name: 'Reg Kamiya',
          firstName: 'Reg',
          lastName: 'Kamiya',
          phone: '(555) 555-5555',
          email: 'reg@dymaxion.com'
        },
        {
          id: 4,
          name: 'Alexis Kevorkian',
          firstName: 'Alexis',
          lastName: 'Kevorkian',
          phone: '(444) 444-4444',
          email: 'alexis@dymaxion.com'
        },
        {
          id: 5,
          name: 'Julius Lew-Angeles',
          firstName: 'Julius',
          lastName: 'Lew-Angeles',
          phone: '(111) 111-1111',
          email: 'julius@dymaxion.com'
        },
        {
          id: 6,
          name: 'Francis Palomo',
          firstName: 'Francis',
          lastName: 'Palomo',
          phone: '(666) 666-6666',
          email: 'francis@dymaxion.com'
        },
        {
          id: 7,
          name: 'Satia Raidess',
          firstName: 'Satia',
          lastName: 'Raidess',
          phone: '(888) 888-8888',
          email: 'satia@dymaxion.com'
        },
        {
          id: 8,
          name: 'Marian Shipley',
          firstName: 'Marian',
          lastName: 'Shipley',
          phone: '(999) 999-9999',
          email: 'marian@dymaxion.com'
        },
        {
          id: 9,
          name: 'Finny Srinivasan',
          firstName: 'Finny',
          lastName: 'Srinivasan',
          phone: '(303) 303-3033',
          email: 'finny@dymaxion.com'
        },
        {
          id: 10,
          name: 'Clifford Szeto',
          firstName: 'Clifford',
          lastName: 'Szeto',
          phone: '(222) 222-2222',
          email: 'clifford@dymaxion.com'
        },
        {
          id: 11,
          name: 'Michael Vista-Voss',
          firstName: 'Michael',
          lastName: 'Vista-Voss',
          phone: '(333) 333-3333',
          email: 'michael@dymaxion.com'
        },
        {
          id: 12,
          name: 'Damien Wiles-Maysonet',
          firstName: 'Damien',
          lastName: 'Wiles-Maysonet',
          phone: '(777) 777-7777',
          email: 'damien@dymaxion.com'
        }
      ],
      currentContact: {}
    }

    this.getContactData = function(key) {
      if (!!key) {
        return contactData[key];
      } else {
        return contactData;
      }
    };

    this.setContactData = function(key, value) {
      contactData[key] = value;
    };
  });
})();
