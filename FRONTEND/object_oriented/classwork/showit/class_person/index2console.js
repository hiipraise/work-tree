class Person {
  constructor(name, age, country) {
    this.name = name;
    this.age = age;
    this.country = country;
  }
  details() {
    return `
    Name: ${this.name},
    Age: ${this.age},
    Country: ${this.country}`;
  }
}

const person1 = new Person("Jane Smith", 30, "USA");
const person2 = new Person("john Smith", 32, "Gambia");
console.log(person1.details());
console.log(person2.details());
