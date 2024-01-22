// interesting to note about the var keyword

let a = 200
var c = 10

if(true){
    let a = 1
    const b = 2
    var c = 3
    console.log(`inner: ${a}`)
}

// console.log(a) // o/p -> if a is not defined in the scope then error (not defined)
// console.log(b) // o/p -> error (not defined)
console.log(c) // o/p -> 3 // var is not recommended
console.log(a) // o/p -> 200