/*
Return type of variables in JavaScript
1) Primitive Datatypes
       Number => number
       String  => string
       Boolean  => boolean
       null  => object
       undefined  =>  undefined
       Symbol  =>  symbol
       BigInt  =>  bigint

2) Non-primitive Datatypes
       Arrays  =>  function
       Function  =>  function object
       Object  =>  function
*/




// primitive datatypes - value datatypes
// 7 types -> string, number, boolean, null, undefined, symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = true
const outsideTemp = null // null has return type of object
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')
// both the ids have same value but different reference
// console.log(id === anotherId); // false

const bigNumber = 3n
// console.log(typeof bigNumber); // bigint

// Referenced datatypes (Non-primitive)
// Array, Objects, Functions -- return type of these datatypes are functions and only function has return type of object function

const heros = ["ironman", "batman", "superman"] // array

let myObj = {
    name : "aman",
    age : 23
}

const myFunction = function() {
    console.log("hello world")
}