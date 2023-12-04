const StoreReport = require('../lib/storeReport');
const Admin = require('../lib/admin');

const admin = new Admin(
    1,
    'Admin Name',
    '789 Admin St, City',
    '123-456-7890',
    'admin@example.com',
    'adminPassword123'
  );

describe('StoreReport class', () => {
    test('should create a new store report instance with provided values', () => {
      const storeReport = new StoreReport(
        1000,
        10,
        100,
        1000,
        '2020-01-01',
        true
      );
  
      expect(storeReport).toEqual({
        totalSales: 1000,
        salesByProduct: 10,
        totalCustomers: 100,
        availableStock: 1000,
        date: '2020-01-01',
      });
    });

    test('should throw an error if isAdmin is false', () => {
        expect(() => new StoreReport(
            1000,
            10,
            100,
            1000,
            '2020-01-01',
            false
          )).toThrow('Unauthorized access. Admins only.');
    });

    test('should throw an error if isAdmin is not provided', () => {
        expect(() => new StoreReport(
            1000,
            10,
            100,
            1000,
            '2020-01-01',
          )).toThrow('Unauthorized access. Admins only.');
    });
})