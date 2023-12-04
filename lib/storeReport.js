class StoreReport {
    constructor(totalSales, salesByProduct, totalCustomers, availableStock, date, isAdmin = false) {
      if (!isAdmin) {
        throw new Error('Unauthorized access. Admins only.');
      }
  
      this.totalSales = totalSales;
      this.salesByProduct = salesByProduct;
      this.totalCustomers = totalCustomers;
      this.availableStock = availableStock;
      this.date = date;
    }
  }
  
  module.exports = StoreReport;