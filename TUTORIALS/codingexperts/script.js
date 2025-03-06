// type coercion
// var job, isMarried;
// job = "teacher";
// isMarried = false;

// console.log(job + " " + isMarried);

// variable mutation
// var lastName = prompt("What's your last name?");
// console.log(job + " " + lastName);

// var year, yearJohn, yearMark;
// year = 2018;
// ageJohn = 28;
// ageMark = 33;

// math operators
// yearJohn = year - ageJohn;
// yearMark = year - ageMark;

// console.log(yearJohn);

//logical operators
// var johnOlder, markOlder;
// johnOlder = ageJohn < ageMark;
// markOlder = ageMark > ageJohn;
// console.log(johnOlder + " " + markOlder);

//typeof operators
// console.log(typeof yearJohn);
// console.log(typeof johnOlder);
// console.log(typeof "mark is older than john");
// var x;
// console.log(typeof x);

// operators precedence
// var year = 2018;
// var fullAge = 28;
// var yearJohn = 1989;

// var isFullage = year - yearJohn >= fullAge;
// console.log(isFullage);

// var average = ageMark + ageJohn / 2;
// console.log(average);

// multiple assignment operators precedence
// var x, y;
// x = y = 3 + 5 * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
// console.log(x, y);

// more operators precedence
/*
x += 2;
console.log(x);
x -= 2;
console.log(x);
x *= 2;
console.log(x);
x /= 2;
console.log(x);
x--;
console.log(x);
*/

// coding challenger
// var markHeight = 1.75;
// var markMass = 65;
// markBMI = (markMass / markHeight) ^ 2; // BMI = body mass index
// console.log(markBMI);

// var johnHeight = 1.68;
// var johnMass = 58;
// johnBMI = (johnMass / johnHeight) ^ 2;
// console.log(johnBMI);

// var higher = markBMI < johnBMI;
// console.log("Is Mark's BMI higher than John's BMI?" + " " + higher);

// if (higher) {
//   console.log("mark's BMI is higher");
// } else {
//   console.log("mark's BMI is lower");
// }
// // if / else statement
// var firstName = "john";
// var relationshipStatus = "single";

// if (relationshipStatus === "married") {
//   console.log(firstName + " is married");
// } else {
//   console.log(firstName + " will get married soon!");
// }

// var isMarried = false;
// if (isMarried) {
//   console.log(firstName + " is married");
// } else isMarried !== false;
// {
//   console.log(firstName + " is not married");
// }

//  boolean logic
// var firstName = "John";
// var age = 16;

// if (age < 13) {
//   console.log(firstName + " is a child");
// } else if (age >= 13 && age < 20) {
//   console.log(firstName + " is a teenager");
// } else if (age >= 20 && age < 30) {
//   console.log(firstName + " is a youth");
// } else {
//   console.log(firstName + " is a adult");
// }

// ternary operator and switch statements

// var firstName = "John";
// var age = 14;

// // ternary operator
// age >= 18
//   ? console.log(firstName + " drinks beer") // if statement
//   : console.log(firstName + " drinks juice"); // else statement

// var drink = age >= 18 ? "beer" : "juice";
// console.log(drink);

// // switch statement
// var job = "teacher";
// switch (job) {
//   case "teacher":
//     console.log(firstName + " teaches student how to code.");
//     break;
//   case "driver":
//     console.log(firstName + " knows how to drive.");
//     break;
//   case "cop":
//     console.log(firstName + " is a police officer.");
//     break;
//   default:
//     console.log(firstName + " does something else.");
// }

// switch (true) {
//   case age < 13:
//     console.log(firstName + " is a child");
//     break;
//   case age >= 13 && age < 20:
//     console.log(firstName + " is a teenager");
//     break;
//   case age >= 20 && age < 30:
//     console.log(firstName + " is a youth");
//     break;
//   default:
//     console.log(firstName + " is a adult");
// }

// truthy and falsey values and equality operator
// falsey values : undefined, null, 0, '', NaN
// truey values : not falsey values

// var height;

// height = 0;

// if (height || height === 0) {
//   console.log("varible is defined");
// } else {
//   console.log("varible is NOT defined");
// }

// functions
// function calculateAge(birthYear) {
//   return 2018 - birthYear;
// }

// var ageJohn = calculateAge(1990);
// var ageMark = calculateAge(1960);
// var ageJane = calculateAge(1948);
// console.log(ageJohn, ageMark, ageJane);

// function yearsUntilRetirement(year, firstName) {
//   var age = calculateAge(year);
//   var retirement = 65 - age;

//   // if (retirement > 0) {
//   //   console.log(firstName + " retires in " + retirement + " years");
//   // } else {
//   //   console.log(firstName + " is already retired");
//   // }

//   // switch (retirement) {
//   //   case 0:
//   //     console.log(firstName + " retires in " + retirement + " years");
//   //     break;
//   //   default:
//   //     console.log(firstName + " is already retired");
//   // }

//   retirement > 0
//     ? console.log(firstName + " retires in " + retirement + " years")
//     : console.log(firstName + " is already retired");
// }

// yearsUntilRetirement(1990, "John");
// yearsUntilRetirement(1948, "Mark");
// yearsUntilRetirement(1960, "Jane");

// function statements and expressions

// function declaration
// function whatDoYouDo(job, firstName) {}

// function expression
// var whatDoYouDo = function (job, firstName) {};
// var whatDoYouDo = (job, firstName) => {
//   switch (job) {
//     case "teacher":
//       return firstName + " teaches kids how to code.";
//     case "driver":
//       return firstName + " drives a cab.";
//     case "designer":
//       return firstName + " designs website.";
//     default:
//       return firstName + " does something else.";
//   }
// };
// console.log(whatDoYouDo("teacher", "John"));
// console.log(whatDoYouDo("designer", "Mark"));
// console.log(whatDoYouDo("retired", "Jane"));

// arrays
// initalize new arrays
// var names = ["John", "Jane", "mark"];
// var years = new Array(1990, 1960, 1948);

// console.log(names);
// console.log(names[1]);
// console.log(names.length);

// // mutate array data
// names[1] = "mike";
// names[5] = "geeks";
// names[names.length] = "mary";
// console.log(names);

// // different data types
// var john = ["john", "smith", 1990, "teacher", "false"];

// john.push("red"); // adds a value at the end of the array
// john.unshift("male"); // adds a value at the beginning of the array
// console.log(john);
// console.log(john.length);

// john.pop(); // removes the value at the end of the array
// john.shift(); // removes the value at the beginning of the array
// console.log(john);

// console.log(john.indexOf(1990)); // tell what index a value in an array is

// var isDesigner =
//   john.indexOf("designer") === -1
//     ? "john is not a designer"
//     : "john is a designer";
// console.log(isDesigner);

// coding challenge 2
// var bill = 260;
// var tip = [0.2, 0.15, 0.1];
// function tipCalculator() {
//   if (bill < 50) {
//     tipBill = bill * tip[0];
//   } else if (bill >= 50 && bill < 200) {
//     tipBill = bill * tip[1];
//   } else {
//     tipBill = bill * tip[2];
//   }
// }
// tipCalculator();
// var totalBill = bill + tipBill;
// console.log(totalBill);

// object and properties

// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: "1960",
//   family: ["James", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
// };

// console.log(john.birthYear);
// console.log(john["firstName"]);
// var x = "job";
// console.log(john[x]);

// var jane = new object();
// jane["firstName"] = jane;
// jane.birthYear = 1990;

// console.log(jane);

// object and method
// var john = {
//   firstName: "John",
//   lastName: "Smith",
//   birthYear: "1960",
//   family: ["James", "Mark", "Bob", "Emily"],
//   job: "teacher",
//   isMarried: false,
//   // calcAge: function (birthYear) {
//   //   return 2018 - birthYear;
//   // },
//   calcAge: function () {
//     this.age = 2018 - this.birthYear;
//   },
// };
// john.calcAge();
// console.log(john);

// loops and iteration
// for loop
// for (var i = 1; i <= 20; i += 2) {
//   console.log(i);
// }

// var john = ["john", "smith", 1990, "designer", false];
// for (var i = 0; i < john.length; i++) {
//   console.log(john[i]);
// }

// // while loop
// var i = 0;
// while (i < john.length) {
//   console.log(john[i]);
//   i++;
// }

// break and continue statement
// var john = ["john", "smith", 1990, "designer", false];
// john.push("blue");
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") continue; // ignores non string values
//   console.log(john[i]);
// }
// for (var i = 0; i < john.length; i++) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

// looping backwards
// for (var i = john.length - 1; i >= 0; i--) {
//   if (typeof john[i] !== "number") continue; // ignores non string values
//   console.log(john[i]);
// }
// for (var i = john.length - 1; i >= 0; i--) {
//   if (typeof john[i] !== "string") break;
//   console.log(john[i]);
// }

// dom and dom manipulation
