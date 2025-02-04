// for (let i = 10; i > 1; i -= 2) {
//   console.log("for", i);
// }
for (let i = 10; i > 1; i -= 2) {
  if (i == 4) {
    break;
  }
  console.log("for", i);
}

let j = 0;
while (j < 10) {
  console.log("while", j);
  j++;
}

let k = 10;
let l = k;
do {
  console.log("do... while", k);
  k++;
} while (k < 15 && l);
{
  console.log("l is equal to i", l);
}
