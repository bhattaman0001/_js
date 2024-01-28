// const user = {
//   username: "aman",
//   email: "aman@bhatt.com",
//   get: function(){
//     return this.username
//   }
// };
// console.log(user.get())

function user(username, email, isLoggedIn) {
  this.username = username;
  this.email = email;
  this.isLoggedIn = isLoggedIn;
  // even if we skip writing "return this" this code will get execute
  return this;
}

// const userOne = user("aman", "bhatt@bhatt.com", true);
// console.log(userOne);
// const userTwo = user("bhatt", "aman@bhatt.com", false);
// console.log(userOne);
// // without using 'new' keyword the values get overwritten

const userOne = new user("aman", "bhatt@bhatt.com", true);
// console.log(userOne);
const userTwo = new user("bhatt", "aman@bhatt.com", false);
// console.log(userOne);
// console.log(userTwo);
// now everyone has its own copy of users, new instances


// // without new both are pointing to the same refernce,
// // but with new keyword, copy of instances are created and, 
// // both are pointing to different instances of same object
// console.log((userOne === userTwo), (userOne == userTwo))
// console.log(userOne.constructor)

 // very important -> "// javascript new keyword k sath constructor function deti hain"