class StoreItem {
    constructor(name, type, price, stock, color, size) {
      this.name = name;
      this.type = type;
      this.price = price;
      this.stock = stock;
      this.color = color;
      this.size = size;
    }
    getAvailableStock() {
        return this.stock;
      }
  }

  
  
  module.exports = StoreItem;