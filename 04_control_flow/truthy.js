const username = ""
if(username){
    console.log(1)
}else{
    console.log(2)
}
// o/p -> 2
/*
    so in js some values are truthy values and some are falsy values

    *****falsy values*****
        false, 0, -0, 0n(BigInt), null, undefined, "", NaN


    *****some truthy values*****
        values which are not falsy are truthy values, some interesting cases
            "0", '0', 'false', "false", " ", [], {}, function(){} -> empty function
*/


// check if the array is empty or not
const arrayChecking = []
if(arrayChecking.length === 0){
    console.log("array is empty")
}



// check if the object is empty or not
const objectChecking = {}
// Object.keys(objectChecking) return an array
if(Object.keys(objectChecking).length === 0) console.log("object is empty")




// nullish coalescing operator (??): null, undefined
// just like in kotlin, if the value is null or undefined assign the first not null value in the operator
let val1
// val1 = 10 ?? 10
// console.log(val1)
// val1 = null ?? 10
// console.log(val1)
// val1 = undefined ?? 10
// console.log(val1)
// val1 = null ?? 10 ?? 20
// console.log(val1)




// // terniary operator
// condition ? true statement : false statement