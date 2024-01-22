// const tinderUser = new Object()
// console.log(tinderUser)
// this is the siingleton object

const tinderUser = {};
// console.log(tinderUser)
/// this is a non-singleton object

tinderUser.id = "123abc";
tinderUser.name = "AB";
tinderUser.isLoggedIn = false;

// console.log(tinderUser)

// const tinderUser = {
//     location: "una, himachal",
//     fullName: {
//         firstName: "aman",
//         lastName: "bhatt"
//     }
// }

// console.log(tinderUser.fullName.firstName)

// const ob1 = {1: "a", 2: "b"}
// const ob2 = {3: "A", 4: "B"}
// const ob3 = {5: "AA", 6: "BB"}
// merging the objects

// Object.assign(ob1, ob2, ob3) // first params is target then all are sources // this returns a new object reference, also it changed the ob1
// console.log(ob1)

// const ob4 = Object.assign({}, ob1, ob2, ob3)
// console.log(ob4)

// spread only return the new object reference but doesnot change any object
// const ob4 = {...ob1, ...ob2, ...ob3}
// console.log(ob4)
// console.log(ob1)
// console.log((ob4 == ob1))

// const user = [
//   {
//     name: "aman",
//     place: "una",
//     sex: "male",
//   },
//   {
//     education: "btech",
//     branch: "it",
//     year: "4",
//   },
//   {
//     name: "aman",
//     place: "una",
//     sex: "male",
//   },
//   {
//     education: "btech",
//     branch: "it",
//     year: "4",
//   }
// ];
// console.log(user[1].education) // accessing the object iinside the array


// // interesting the important
// const keyArr = Object.keys(tinderUser)
// const valueArr = Object.values(tinderUser)
// console.log(keyArr, valueArr)



// // checks if the object has this property or not
// console.log(tinderUser.hasOwnProperty('isLoggedIn'))
// console.log(tinderUser.hasOwnProperty('isLoggedOut'))