// immediately invoked function expressions
// to remove the pollution from global scope like pollution through variabales, other functions etc
// we user iife


// // ()() -> the first paranthesis is for writing the code and second parathesis is for execution of the function
// // just any normal function execution
// (function chai() {
    // this iife is named iife
//     console.log("aman")
// })();




// always use ";" at the last of iife to stop the execution of the function


// use arrow function
( (name) => {
    // simple iife
    console.log(`db connected 2, also welcome ${name}`)
} )('aman');