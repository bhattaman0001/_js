// const promiseOne = new Promise(function (resolve, reject) {
//   // do an async task
//   // db calls, network calls, cryptography
//   resolve();
//   setTimeout(function () {
//     console.log("we are at set time out");
//   }, 2000);
// });
// promiseOne.then(function () {
//   console.log("promise consumed");
// });

// new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     // resolve takes parameter which then is passed to .then()
//     resolve({ username: "aman", email: "aman@bhatt.com" });
//   }, 1000);
// }).then(function (val) {
//   console.log(val);
// });

// const promiseTwo = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const someCondition = false;
//     if (someCondition) {
//       resolve({ username: "aman", email: "aman@bhatt.com" });
//     } else {
//       reject("something went wrong");
//     }
//   }, 1000);
// });
// promiseTwo
//   .then((val) => {
//     console.log(val);
//     return val.username;
//   })
//   .then((username) => {
//     console.log(username);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally((finalVal) => {
//     // this block will always execute
//     console.log(finalVal);
//   });

// const promiseThree = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     const someCondition = false;
//     if (someCondition) {
//       resolve({ username: "javascript", email: "aman@bhatt.com" });
//     } else {
//       reject("js went wrong");
//     }
//   }, 1000);
// });
// // handling the execution using async and await
// async function consumePromiseThree() {
//   try {
//     const response = await promiseThree;
//     console.log(response);
//   } catch (error) {
//     console.log(error);
//   }
// }

// consumePromiseThree()

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     // this .json() function also takes time to execute so we have to await this as well
//     const data = await response.json();
//     console.log(data.geo);
//   } catch (error) {
//     console.log(error);
//   }
// }
// getAllUsers();

fetch("https://api.github.com/users/bhattaman0001")
  .then((val) => {
    return val.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
