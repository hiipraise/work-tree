// Define the Rectangle class
class Rectangle {
  // Constructor to initialize width and height
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  // Method to calculate the area of the rectangle
  calculateArea() {
    return this.width * this.height;
  }

  // Method to calculate the perimeter of the rectangle
  calculatePerimeter() {
    return 2 * (this.width + this.height);
  }
}

// Event listener for the calculate button
document.getElementById("calculate").addEventListener("click", () => {
  const width = document.getElementById("width").value;
  const height = document.getElementById("height").value;

  const rectangle = new Rectangle(width, height);
  const area = rectangle.calculateArea();
  const perimeter = rectangle.calculatePerimeter();

  // Display results
  document.getElementById(
    "area"
  ).textContent = `Area of the rectangle: ${area}`;
  document.getElementById(
    "perimeter"
  ).textContent = `Perimeter of the rectangle: ${perimeter}`;
});
