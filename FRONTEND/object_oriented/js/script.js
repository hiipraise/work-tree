// using class constructor

class Shirt {
  constructor(brandName, brandSize, brandColor) {
    (this.brandName = brandName),
      (this.brandSize = brandSize),
      (this.brandColor = brandColor);
  }
  wash() {
    console.log("---> becomes neat");
    return this;
  }
}

const prada = new Shirt("prada ", "XL", "white");
const nike = new Shirt("nike ", "L", "purple");
console.log(prada.wash());
console.log(nike.wash());

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    let area = this.width * this.height;
    return area;
  }
}

const recl = new Rectangle(20, 40);
console.log(recl.calcArea());
