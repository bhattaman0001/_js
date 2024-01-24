// const user = {
//     username: "aman",
//     price: 999,
//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to the website`)
//         console.log(this)
//     }
// };
// this refers to the current context of the scope
// and in the browser this refers to windows
// console.log(user.welcomeMessage())
// console.log(this)


// function chai(){
//     let username = "aman"
//     console.log(this.username) // o/p is undefined, not working inside function environment
//     console.log(this)
// }
// chai()



// const chai = function(){
//     let username = "aman"
//     console.log(this.username)
//     console.log(this)
// }
// chai()




// arrow functions
// const chai = () => {
//     let username = "aman"
//     console.log(this.username)
//     console.log(this)
// }
// chai()




// // explicit return
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3,4))




// // implicit return 
// const addTwo = (num1, num2) => num1 + num2 // in implicit return we don't use the return keyword
// console.log(addTwo(3,4))




// // return object in implicit return
// const returnObj = () => ({username: "aman"})
// console.log(returnObj())