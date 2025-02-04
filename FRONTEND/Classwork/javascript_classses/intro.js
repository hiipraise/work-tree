// function number() {
//   for (let i = 100; i >= -100; i--) {
//     console.log(i);
//   }
// }
// number();

// var sum = 10 + 10;
// console.log(sum);

// var product = 10 * 10;
// console.log(product);

// var difference = 10 - 60;
// console.log(difference);

// var quotient = 10 / 5;
// console.log(quotient);

// var remainder = 10 % 3;
// console.log(remainder);

// let a = 2;
// let b = 2;
// let perimeter = 100 - remainder * a + remainder * b; // 100+remainder⋅(b−a)
// console.log(perimeter);
// console.log(a == b);
// console.log(a === b);

// let x = 10,
//   y = 10;
// x += 5; // x = x + 5; output 15
// y %= 3; // y = y % 3; output 1
// console.log(x, y);

// let z = 5,
//   c = 5;
// console.log(z == c); // equal to
// console.log(y === b); // strict equality
// console.log(y != b); // not equal to
// console.log(y !== b); // strict not equal to
// console.log(y > c); // greater than
// console.log(y < c); // less than
// console.log(y <= c); // less than or equal to
// console.log(y >= c); // greater than or equal to

// let age = 20;
// console.log(age > 18 && age < 25); // Output: true

// let age2 = 15;
// console.log(age2 > 18 && age2 < 25); // Output: false

// let age3 = 30;

// if (age3 > 18 && age3 < 25) {
//   console.log("You are in the age range.");
// } else {
//   console.log("You are not in the age range.");
//   2;
// }

// let e = true,
//   f = false;
// console.log(!e);
// console.log(e && f);

// class tasks

// a program to calculate the area and perimeter of a rectangle using arithmetic operators
const length = 20;
const width = 50;

const area = length * width;
const perimeter = 2 * (length + width);

console.log(area);
console.log(perimeter);

// comparison operators to check if a given number is greater than 100
const number = 120;
// console.log(number >= 100 && number <= 100);
console.log(number === 100);

//a script that takes a user’s age as input and outputs whether the user is a teenager, an adult, or a senior using logical and conditional operators
let age = 24;

if (age >= 18 && age <= 24) {
  console.log("Teenager.");
} else if (age >= 24 && age < 65) {
  console.log("Adult.");
} else if (age >= 65) {
  console.log("Senior.");
}
// a user’s first name and last name and display the full name using string operators

let firstName = "John";
let lastName = "Doe";

console.log(firstName + " " + lastName);

//typeof to determine the types of various variables: a number, a string, an object, and an array

let numberVariable = 10;
let stringVariable = "Hello";
let objectVariable = { name: "John" };
let arrayVariable = [1, 2, 3];

console.log(typeof arrayVariable);

// javascript class

// let yearOld = Number(prompt("Enter your age", 0));
// let paymentStatus = true;

// if (yearOld >= 18 && paymentStatus) {
//   alert("Valid Age");
// } else {
//   alert("Invalid Age");
// }

// let score = 70;

// if (score >= 90) {
//   console.log("Grade: A");
// } else if (score >= 80) {
//   console.log("Grade: B");
// } else if (score >= 70) {
//   console.log("Grade: C");
// } else {
//   console.log("Grade: F");
// }
// console.log(totalAmount);
// let totalAmount = Number(prompt("Enter total amount"), 0);
// if (totalAmount >= 50 && totalAmount < 100) {
//   alert("You got a 10% discount");
// } else if (totalAmount >= 100) {
//   alert("You got a 20% discount");
// } else if (totalAmount < 50) {
//   alert("No discount");
// }
// if (isNaN(totalAmount) || totalAmount < 0) {
//   console.log("Invalid input. Please enter a valid numeric value.");
//   return;
// }
// console.log("Original total amount:" + totalAmount);

function calculateTotal() {
  let totalAmount = Number(prompt("Enter your shopping cart total amount:"));

  let discount = 0;
  let discountRate = 0;
  let shippingFee = 0;

  // Apply discounts based on the total amount
  if (totalAmount >= 50 && totalAmount <= 100) {
    discountRate = 0.1; // 10% discount
    alert("You got a 10% discount");
  } else if (totalAmount > 100) {
    discountRate = 0.2; // 20% discount
    alert("You got a 20% discount");
  }

  discount = totalAmount * discountRate;

  // Calculate total after discount
  let totalAfterDiscount = totalAmount - discount;

  // Added shipping fee if total after discount is below $75
  if (totalAfterDiscount < 75) {
    shippingFee = 5;
  }

  // Calculate final total
  let finalTotal = totalAfterDiscount + shippingFee;

  console.log(`Original Total Amount: $${totalAmount}`);
  console.log(`Discount Applied: $${discount}`);
  console.log(`Shipping Fee: $${shippingFee}`);
  console.log(`Final Total Amount to Pay: $${finalTotal}`);
}

calculateTotal();

// let text;
for (let i = 0; i <= 10; i++) {
  console.log("Number " + i);
}

const users = ["Pamilerin", "Louange", "Blessed Sinner"];
console.log(users);

let gadgets = [
  { item: "phone", quantity: 10 },
  { item: "laptop", quantity: 5 },
  { item: "tablets", quantity: 3 },
  { item: "dell", quantity: 20 },
  { item: "hp", quantity: 15 },
  { item: "oppo", quantity: 7 },
  { item: "vivo", quantity: 5 },
  { item: "lenovo", quantity: 4 },
  { item: "samsung", quantity: 25 },
  { item: "ipod", quantity: 8 },
];
let lessItems = gadgets.filter((item) => item.quantity < 10);
console.log(lessItems);

let thirdItem = gadgets[2];
console.log(thirdItem);

let fifthItem = gadgets[4];
console.log("This is the fifth item: " + fifthItem.item);

let totalItems = gadgets.reduce((total, item) => total + item.quantity, 0);
console.log(totalItems);

const girls = ["BMW", "BENZ", "MAYBACH", "G-WAGON", "AUDI"];
const boys = ["MESSI", "DAVIDO", "SHELBY", "FRANKLIN-SAINT", "WHITE-WALTER"];

const gender = girls.concat(boys);
console.log(girls);
console.log(boys);
console.log(gender);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.copyWithin(2, 0);
console.log(fruits)