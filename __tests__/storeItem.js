const StoreItem = require('../lib/storeItem');

describe('StoreItem class', () => {
  test('should create a new store item instance with provided values', () => {
    const item = new StoreItem('T-Shirt', 'Apparel', 20.99, 50, 'Blue', 'L');

    expect(item).toEqual({
      name: 'T-Shirt',
      type: 'Apparel',
      price: 20.99,
      stock: 50,
      color: 'Blue',
      size: 'L',
    });
  });

  test('should get available stock for the store item', () => {
    const item = new StoreItem('T-Shirt', 'Apparel', 20.99, 50, 'Blue', 'L');

    expect(item.getAvailableStock()).toBe(50);
  });
});