// singleton -> ye object jo banta hain constructor k through and ye object apni tarah ek hi hota hain
// example- Object.create

const mySym = Symbol("123");

// literals way to create object which is not singleton
const jsUser = {
  name: "Aman Bhatt",
  age: 22,
  email: "iiit.una.2024@gmail.com",
  isLoggedIn: false,
  lastLoginDay: ["Monday", "Saturday"],
  "current location": "Una, Himachal",
  [mySym]: "123", // this is only syntax to add the symbol inside object
};
// console.log(jsUser.email); // 1 way
// console.log(jsUser[email])// 2 way
// but accessing the email in 2 way was wrong because object make key value pair as strings
// console.log(jsUser["email"]); // now this is correct
// in the "current location" key, now we cannot access it through dot syntax
// console.log(jsUser["current location"]);

// important: define a symbol and add it into object and print the symbol
// console.log(jsUser[mySym])// accessing the symbol


// jsUser.email = "aman@una.com"
// Object.freeze(jsUser)//give in the parameter which object u want to freeze
// jsUser.email = "aman@iiit.com"
// console.log(jsUser)


jsUser.greetings = function(){
    console.log("hello js user")
}

jsUser.greetingsTwo = function(){
    console.log(`hello js user, ${this.name}`)
}

// console.log(jsUser.greetings)
console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())