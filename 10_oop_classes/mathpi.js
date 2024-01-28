// *******************IMPORTANT*************************

// // js has some math values like pi which are not editable and they are constants
// console.log(Math.PI);
// // even if we assign the value,
// Math.PI = 4;
// console.log(Math.PI); // same output will be there, no overwritten

// descriptors
const descriptors = Object.getOwnPropertyDescriptor(Math, "PI");
// console.log(typeof descriptors)
// console.log(descriptors)

// lets create a new object
const user = {
  username: "aman",
  email: "aman@bhatt.com",
  pwd: "123",
  getAllUser: function () {
    return this;
  },
};

// // give the description of properties of objects
// const descriptors2 = Object.getOwnPropertyDescriptor(user, "username");
// console.log(descriptors2)

// defining the writable, enumerable, iteratable property of a property
Object.defineProperty(user, "username", {
  writable: false,
  enumerable: false, // username will not be counted to show in the loop
});

for (let [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
