class Price {
  constructor(gst) {
    this.gst = gst;
  }
  calculate(items) {
    let sum = items.reduce((acc, cur) => acc + cur.price, 0);
    return sum;
  }
}

class SalePrice extends Price {
  constructor(gst, discount) {
    super(gst);
    this.discount = discount;
  }
  calculate(items) {
    return +(((100 - this.discount) * super.calculate(items)) / 100).toFixed(2);
  }
}

class FestivalPrice extends Price {
  constructor(gst, profit) {
    super(gst);
    this.profit = profit;
  }
  calculate(items) {
    return +((super.calculate(items) * (this.profit + 100)) / 100).toFixed(2);
  }
}

class ShoppingCart {
  constructor(strategy) {
    this.list = [];
    this.strategy = strategy;
  }
  addItem(item) {
    this.list.push(item);
  }
  calculateTotal() {
    return this.strategy.calculate(this.list);
  }
}

let regularPrice = new Price(10);
let salesPrice = new SalePrice(10, 10);
let festivePrice = new FestivalPrice(10, 10);

let cartRegular = new ShoppingCart(regularPrice);
let cartSale = new ShoppingCart(salesPrice);
let cartFestive = new ShoppingCart(festivePrice);

cartRegular.addItem({ type: "Book", price: 100 });
cartSale.addItem({ type: "Book", price: 100 });
cartFestive.addItem({ type: "Book", price: 100 });

console.log(
  cartRegular.calculateTotal(),
  cartFestive.calculateTotal(),
  cartSale.calculateTotal()
);
