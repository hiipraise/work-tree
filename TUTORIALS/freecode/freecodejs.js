function printMe() {
  console.log("print");
}
printMe();

// functional declaration
function printMeAgain(params) {
  console.log(params);
}
printMeAgain("parameter");

// variable declaration
const display = function () {
  console.log("value");
};
display();

function displayAgain() {
  console.log("Arguments");
}
displayAgain();

const area = function (a, b) {
  console.log(a, b);
};
area(10, 50);

function base(a, b) {
  console.log(a, b);
}
base(20, 40);

function test(a, b) {
  console.log(a + b);
}
test(20, 40);

function sum(a, b) {
  let add = a + b; // local variable
  return add;
}
console.log(sum(2, 40)); // function output

function multiply(a, b) {
  return a * b;
}
console.log(multiply(5, 4));

function sub(a, b = 0) {
  return 2 * (a + b);
}
console.log(sub(2));

// rest parameter
// can only be one rest parameter i.e (...y)
function rest(x, ...y) {
  console.log(x);
  console.log(y);
}
rest(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13);

//arrow declaration
const subst = (x, y) => {
  return x + y;
};
console.log(27 + 7);

const arrow = (x) => x;
console.log(4);

const arrowFunction = (x, y) => x - y;
console.log(4 - 7);

//nested declaration
function outer() {
  console.log("outer");
  function inner() {
    console.log("inner");
  }
  inner();
}
outer();

// function scope
let x = 10;
const y = 20;
var z = 30;

function doSomething() {
  console.log(x, y, z);
}
doSomething();

function didSomething() {
  let x = 40;
  var y = 50;
  const z = 60;
  console.log(x, y, z);
}
didSomething();

//closure
function outside(x) {
  function inside(y) {
    return x + (y = 0);
  }
  return inside;
}
const outerReturn = outside(10);
console.log(outerReturn()); // the return inside is assigned to outerReturn

function sthOutside(x, y) {
  function sthInside(z) {
    return x + y - z;
  }
  return sthInside;
}
const sthReturn = sthOutside(5, 4);
console.log(sthReturn(4));

// callback

function foo(bar) {
  bar();
}
foo(function () {
  console.log("hello");
});
function named() {
  console.log("named");
}
foo(named);

// pure function
function pure(name) {
  return `say good morning ${name} `;
}
console.log(pure("praise"));

//high order function
//iife - Immediately Invoked Function Expression

(function () {
  console.log("iife");
})();

//call stack
//recursion
// function things() {
//   console.log("things");
//   things();
// }
// things(); repeats 'thing' multiple times

