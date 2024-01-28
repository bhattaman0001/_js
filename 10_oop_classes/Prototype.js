// const myName = "aman bhatt     "
// // if i want to make a new method which will only tell me the true length of the string
// console.log(myName.length) // this will count the spaces as well
// // but
// console.log(myName.truelength) // my own method

// let heros = ["thor", "spiderman"];

// let myName = "aman";

// let heroPower = {
//   thor: "hammer",
//   spiderman: "sling",
//   getSpiderPower: function () {
//     console.log(`spidy power is: ${this.spiderman}`);
//   },
// };

// basically in js everything is object, so array, string, functions, everything is object
// so if we inject a new property in the top level hierarchy of js i.e; objects,
// it will be accessible to everyone.

// Object.prototype.aman = () => {
//   console.log("aman is present everywhere");
// };

// console.log(heros.aman()); // array has access to aman method
// console.log(myName.aman()); // string has access to aman method
// console.log(heroPower.aman()); // object has access to aman method
// console.log(heroPower.getSpiderPower.aman()); // function has access to aman method

// // but if you define a method in child, then parent does not have that access
// // in array
// heros.prototype.heyAman = function () {
//   console.log(`hi, its aman`);
// };
// // array has its access
// console.log(heros.heyAman());
// // but object does not have access to it
// console.log(heroPower.heyAman()); // o/p -> error(Cannot set properties of undefined (setting 'heyAman'))

// making a method truelength

// // 1. using regular functions, which is error free
// String.prototype.trueLength = function () {
//   console.log(`true length is: ${this.trim().length}`);
// };

// const username = "bhatt             ";
// console.log(username.trueLength());

// *************************************************************************
// *******************************IMPORTANT*********************************
// *************************************************************************
// // 2. using arrow functions, which is error prone
// // Arrow functions do not have their own this context; instead, they inherit this from the enclosing lexical context. In this case, this inside the arrow function does not refer to the string object (username), but rather to the context in which the arrow function was defined, which is likely the global context (or undefined in strict mode).
// String.prototype.trueLength = function () {
//   console.log(`true length is: ${this.trim().length}`);
// };

// const username = "bhatt             ";
// console.log(username.trueLength());
