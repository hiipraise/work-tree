// const promise = new Promise((resolve, reject) => {
//   var dateTime = 7;
//   var bedTime = 10;
//   if (dateTime === bedTime) {
//     resolve("Success: datetime is also bedtime");
//   } else {
//     reject("Error: datetime is not bedtime");
//   }
// });

// promise.then((result) => {
//   console.log(result);
// });
// promise.catch((error) => {
//   console.log(error);
// });

// const fetchDate = new Promise((resolve, reject) => {
//   const data = true
//     ? resolve("Success: data is available")
//     : resolve("Error: data is not available");

// if (data) {
//   resolve("Success: data is available");
// } else {
//   reject("Error: data is not available");
// }

// switch (data) {
//   case true:
//     resolve("Success: data is available");
//     break;
//   default:
//     reject("Error: data is not available");
// }
// });

// fetchDate.then((data) => {
//   console.log(data);
// });
// fetchDate.catch((error) => {
//   console.log(error);
// });

// chaining
// const returnFive = new Promise((resolve, reject) => {
//   const data = true; // remove ; to make use ternary operator
//   //  ? resolve(5) : reject("number expected"); // ternary operator
//   // if (data) {
//   //   resolve(5);
//   // } else {
//   //   reject("number expected");
//   // }
//   switch (data) {
//     case true:
//       resolve(5);
//       break;
//     default:
//       reject("number expected");
//   }
// });

// returnFive
//   .then((value1) => {
//     console.log("step 1: ", value1);
//     return value1 + 1;
//     // value 1 = 5 + 1= 6
//   })
//   .then((value2) => {
//     console.log("step 2: ", value2);
//     return value2 * 2;
//     // value 2 = 6 multiplied by 2 = 12
//   })
//   .then((finalResult) => console.log("finalResult: ", finalResult))
//   .catch((error) => {
//     console.log(error);
//   });

const tryPromise = new Promise((resolve, reject) => {
  const value = 12;
  if (value > 100) {
    resolve(`${value} is greater than 100`);
  } else {
    reject(`${value} is less than 100`);
  }
});

tryPromise
  .then((value) => {
    console.log(value);
  })
  .catch((value) => {
    console.error(`${value}`);
  });
