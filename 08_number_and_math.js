// const score = 400
// console.log(score)

// const balance = new Number(100)
// console.log(balance)

// console.log(balance.toString().length)
// console.log(balance.toFixed(1)) // give float value with only one digit after number

// const anotherNumber = 23.697
// console.log(anotherNumber.toPrecision(3)) // use it wisely // o/p => 23.7

// const anotherNumber1 = 123.697
// console.log(anotherNumber1.toPrecision(3)) // use it wisely // o/p => 124 (automatic round off)

// const anotherNumber2 = 1123.697
// console.log(anotherNumber2.toPrecision(3)) // use it wisely // o/p => 1.12e+3


// const hundreds = 1000000
// // toLocaleString() is a representational function to represent a string
// console.log(hundreds.toLocaleString('en-US'))
// console.log(hundreds.toLocaleString('en-IN'))


// +++++++++++++++++++Math++++++++++++++++++++

// console.log(Math.random()) // always give value between 0 and 1
// console.log((Math.random()*10) + 1) // multiplying with 10 means I have shifted the random value towards left
// console.log(Math.floor(Math.random()*10) + 1)

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) // this will give me value always greater than min // given the min and max values, on multiplying the random values with (max - min + 1) gives the result between both but greater than min.