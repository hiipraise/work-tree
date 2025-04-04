function greet(name: string): string {
  return `Hello, ${name}! Welcome to TypeScript.`;
}

console.log(greet("Developer"));

let myNames: string = "Bob";
console.log(myNames);
let numberOfWheels: number = 4;
let isStudent2: boolean = false;

type Address = {
  street: string;
  city: string;
  country: string;
};

type Person = {
  name: string;
  age: number;
  isStudent: boolean;
  address?: Address; // ? means optional
};

let person: Person = {
  name: "John Smith",
  age: 21,
  isStudent: false,
};

let person2: Person = {
  name: "Doe Smith",
  age: 21,
  isStudent: true,
  address: {
    street: "123 main",
    city: "anytown",
    country: "USA",
  },
};

let people: Person[] = [person, person2]
