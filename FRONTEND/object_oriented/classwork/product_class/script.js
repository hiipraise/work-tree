class Product {
  constructor(productId, name, price) {
    this.productId = productId;
    this.name = name;
    this.price = price;
  }
  calcPrice(quantity) {
    return this.price * quantity;
  }
}

class PersonalCareProduct extends Product {
  constructor(productId, name, price, warrantyPeriod) {
    super(productId, name, price);
    this.warrantyPeriod = warrantyPeriod;
  }

  calcPrice(quantity) {
    const basePrice = super.calcPrice(quantity);
    return basePrice;
  }
}

const shampoo = new PersonalCareProduct("ETB123", "Shampoo", 10, 3);

const totalPrice = shampoo.calcPrice(2);
console.log(
  `Total price for ${shampoo.name}: $${totalPrice} with ${shampoo.warrantyPeriod} years warranty`
);
