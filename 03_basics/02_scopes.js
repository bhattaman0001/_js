// interesting to note about the var keyword

// let a = 200
// var c = 10

// if(true){
//     let a = 1
//     const b = 2
//     var c = 3
//     console.log(`inner: ${a}`)
// }

// console.log(a) // o/p -> if a is not defined in the scope then error (not defined)
// console.log(b) // o/p -> error (not defined)
// console.log(c) // o/p -> 3 // var is not recommended
// console.log(a) // o/p -> 200



// function one(){
//     const username = "aman"
//     function two(){
//         const location = "una"
//         console.log(username)
//     }
//     // console.log(location) // o/p -> error of accessing out of scope
//     // two()
//     // console.log(username)
// }
// one()



// console.log(addOne(4))// accessing this type of function declaration doesn't give error
// // 2 ways of declaring the functions
// function addOne(num){
//     return num + 1
// }
// console.log(addOne(3))


// // console.log(addTwo(5)) // accessing this type of function declaration gives error, accessing before initialization
// const addTwo = function(num){
//     return num + 2
// }
// console.log(addTwo(3))