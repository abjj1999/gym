const Admin = require('../lib/admin');

describe('Admin class', () => {
    test('should create a new admin instance with provided values', () => {
      const admin = new Admin(
        1,
        'Admin Name',
        '789 Admin St, City',
        '123-456-7890',
        'admin@example.com',
        'adminPassword123'
      );
  
      expect(admin).toEqual({
        staffId: 1,
        name: 'Admin Name',
        address: '789 Admin St, City',
        phone: '123-456-7890',
        email: 'admin@example.com',
        password: 'adminPassword123',
      });
    });

});