// var myArray = ["hello", "world", "!"];
// for (var i = 0; i < myArray.length; i++) {
//   console.log(myArray[i]);
// }

// const myHello = "hello";
// for (let char of myHello) {
//   console.log(char);
// }

const myString = "classroom";
console.log(myString.length);

console.log(myString.charAt(5));

const text = "cup";
// console.log(text.toUpperCase());

function spellCheck(playertext) {
  if (
    playertext.charAt(0) === "c" &&
    playertext.charAt(1) === "u" &&
    playertext.charAt(2) === "p"
  ) {
    console.log("correct");
  } else {
    console.log("try again");
  }
}

spellCheck("cup");

// slice
const ourText = "All, boys, are, tall";
console.log(ourText.length);

let slicedPart = ourText.slice(4, 9); // counts from boys
console.log(slicedPart.toUpperCase().trim()); // adding upcase for the 5-9 i.e BOYS //trim removes whitespaces

console.log(ourText.split("a").join("*"));
// const combinedtext = ourText.concat(slicedPart); // concats add slices up joins it all
// console.log(combinedtext);

const myArray = ["boys", "girls", "men", "women"];
console.log(myArray.join(" & "));

let compoundArray = [
  [1, 2],
  [3, 4],
];
console.log(compoundArray.flat());
console.log(myArray.includes("mermaid")); // output :false doesn't include

const fruits = ["pineapple", "orange", "apple", "banana"];
const foundFruits = fruits.find((fruit) => fruit === "orange");
console.log(foundFruits);
// console.log(fruits.indexOf("apple")); // returns index of apple

// sort
console.log(fruits.sort());
// console.log(fruits.sort().reverse()); //descending order

fruits.forEach((fruit) => console.log(fruit));

fruits.forEach((fruit) => {
  let count;
  count = fruits.indexOf(fruit) + 1;
  console.log(count, ".", fruit);
});

// map
const setOfNo = [22, 15, 3, 4, 20];
const secondSet = setOfNo.map((value, index, array) => {
  return value + 5;
});
console.log(setOfNo); // original array remains unchanged
console.log(secondSet);

const number = [1, 2, 3, 4];
const doubledNumbers = number.map((num) => num * 4);
console.log(doubledNumbers);

//flatmap
const result = setOfNo.flatMap((num) => (num === 3 ? [3, 3] : 1)); //where there is 3 in the array setOfNo replace the 3 with [3,3] and the rest replace with 1
console.log(result);

//filter
const filteredNumbers = number.filter((num) => num <= 2);
console.log(filteredNumbers);

const filtered = setOfNo.filter((value) => value >= 10);
console.log(filtered);

// reduce
const sum = number.reduce((acc, current, index) => acc + current, 0); // accumulator(acc)
console.log(sum);

const sumOfSetOfNo = setOfNo.reduce((acc, current, index) => acc + current);
console.log(sumOfSetOfNo);

let forSum = 0;
for (let i = 0; i < setOfNo.length; i++) {
  forSum = forSum + setOfNo[i];
}
console.log("from for loop", forSum);

//spread
const spreadArray = [...setOfNo, ...fruits, ...myArray];
console.log(spreadArray);

const obj1 = { name: "iri ato" };
const obj2 = { animal: "🐐" };

const combined = { ...obj1, ...obj2 };
console.log(combined);

// object constructors
