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

// sort
console.log(fruits.sort());
// console.log(fruits.sort().reverse()); //descending order

fruits.forEach((fruit) => console.log(fruit));

fruits.forEach((fruit) => {
  let count;
  count = fruits.indexOf(fruit) + 1;
  console.log(count, ".", fruit);
});
