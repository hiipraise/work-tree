const promise = new Promise((resolve, reject) => {
  var dateTime = 7;
  var bedTime = 10;
  if (dateTime === bedTime) {
    resolve("Success: datetime is also bedtime");
  } else {
    reject("Error: datetime is not bedtime");
  }
});

promise.then((result) => {
  console.log(result);
});
promise.catch((error) => {
  console.log(error);
});

const fetchDate = new Promise((resolve, reject) => {
  const data = true;

  //   if (data) {
  //     resolve("Success: data is available");
  //   } else {
  //     reject("Error: data is not available");
  //   }

  switch (data) {
    case true:
      resolve("Success: data is available");
      break;
    default:
      reject("Error: data is not available");
  }
});

fetchDate.then((data) => {
  console.log(data);
});
fetchDate.catch((error) => {
  console.log(error);
});

chaining;
const returnFive = new Promise((resolve, reject) => {
  const data = true;
  switch (data) {
    case true:
      resolve(5);
      break;
    default:
      reject("number expected");
  }
});

returnFive
  .then((value1) => {
    console.log("step 1: ", value1);
    return value1 + 1;
  })
  .then((value2) => {
    console.log("step 2: ", value2);
    return value2 * 2;
  })
  .then((finalResult) => console.log("finalResult: ", finalResult));
