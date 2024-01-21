// in Js we use 2 types of memory, stacks and heaps
// stack are used to store primitive datatypes and heaps are used to store non primitive datatypes


let collegeName = "IIITU"
let anotherCollegeName = collegeName
anotherCollegeName = "NITH"
// here these are value datatypes so these are stored in stacks and copy of values are stored in both the datatypes


let userOne = {
    email : "aman@google.com",
    upi : "aman@okaxis"
}

let userTwo = userOne
userTwo.email = "bhatt@google.com"
// here heap memory is used to store the objects since they are non primitive datatypes
console.log(userOne.email);
console.log(userTwo.email);
// here both the variables are referencing to the same objects in heap
// though userOne and userTwo are stored in stack but there value is stored in heap