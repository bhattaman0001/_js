function setUserName(username) {
  this.username = username;
  console.log("called");
}

// function createUser(username, email, password) {
//   setUserName(username);
//   this.email = email;
//   this.password = password;
// }

// const user = new createUser('aman', 'bhatt@google.com', '123')
// console.log(user) // call ho rhi hain but username ko shi context nahi mil rha ki kisme set karen voh value,

// so
function createUser(username, email, password) {
  // ********************************************
  // *****************IMPORTANT******************
  setUserName.call(this, username); // with .call() method and this as a parameter to define in which context the value has to be set
  // now username will get set
  // ********************************************
  this.email = email;
  this.password = password;
}
const user = new createUser("aman", "bhatt@google.com", "123");
console.log(user);
