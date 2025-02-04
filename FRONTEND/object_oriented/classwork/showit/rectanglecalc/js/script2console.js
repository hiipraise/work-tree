class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  calcArea() {
    let area = this.width * this.height;
    return area;
  }
  calcPerimeter() {
    let perimeter = 2 * (this.width * this.height);
    return perimeter;
  }
}

const recl = new Rectangle(20, 40);

console.log(recl.calcArea());
console.log(recl.calcPerimeter());
