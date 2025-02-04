class Vehicle {
    constructor(make, model, year) {
      this.make = make;
      this.model = model;
      this.year = year;
    }
  
    displayDetails() {
      console.log(`Make: ${this.make}`);
      console.log(`Model: ${this.model}`);
      console.log(`Year: ${this.year}`);
    }
  }
  
  class Car extends Vehicle {
    constructor(make, model, year, doors) {
      super(make, model, year); // Call the parent class constructor
      this.doors = doors;
    }
  
    displayDetails() {
      super.displayDetails(); // Call the parent class's displayDetails()
      console.log(`Number of Doors: ${this.doors}`);
    }
  }
  
  // Create instances of the Car class
  const myCar = new Car("Toyota", "Camry", 2023, 4);
  
  // Display car details
  myCar.displayDetails();