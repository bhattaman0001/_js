// function sayMyName(){
//     console.log("aman")
// }
// sayMyName()

// function add(number1, number2){
//     // here we are not checking the numbers datatypes
//     return number1 + number2
// }
// const result = add(2, 3)
// console.log(result)


// function userAct(username){
//     return `${username} just logged in`
// }
// const msg = userAct("aman")
// console.log(msg)
// console.log(userAct()) // if the argument is not given then undefined is taken as argument
// console.log(userAct(null))



// in the shopping cart of the application
// multiplt items are added and we don't know that how many items will be there
// function priceOfShoppingCart(...item){
//     // this spread/rest operator puts them arguments in the array
//     return console.log(item)
// }
// console.log(priceOfShoppingCart(100, 200, 300, 400))


// function priceOfShoppingCart(val1, val2, ...item){
//     // this spread/rest operator puts them arguments in the array
//     return console.log(item) // only  300 and 400 in the array
// }
// console.log(priceOfShoppingCart(100, 200, 300, 400))


// const user = {
//     username: "aman",
//     price: 300
// }
// function handleObject(object){
//     return `username: ${object.username}, price: ${object.price}`
// }
// console.log(handleObject(user))