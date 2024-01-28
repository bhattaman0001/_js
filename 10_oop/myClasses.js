// class User {
//   constructor(username, email, password) {
//     this.username = username;
//     this.email = email;
//     this.password = password;
//   }

//   //defining the methods
//   encryptPassword() {
//     return `${this.password}abc`;
//   }
//   changeUserName() {
//     return `${this.username.toUpperCase()}`;
//   }
// }

// // make a new instance of User
// const aman = new User("aman", "aman@bhatt.com", 123);
// console.log(aman);
// console.log(aman.encryptPassword());
// console.log(aman.changeUserName());

// *****************************_________*****************************
// *****************************IMPORTANT*****************************
// *****************************_________*****************************
// behind the scenes without classes

function User(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}

// methods inject karne padte
User.prototype.encryptPassword = function () {
  return `${this.password}abc`;
};

User.prototype.changeUserName = function () {
  return `${this.username.toUpperCase()}`;
};

const amanbhatt = new User("bhatt", "bhatt@aman.com", 1234);
console.log(amanbhatt);
console.log(amanbhatt.encryptPassword());
console.log(amanbhatt.changeUserName());
