// 1. Number conversion

let score = 33
// console.log(typeof score);
// console.log(score);

// modifying the score variable

score = "33abc"
// console.log(typeof score);
// console.log(Number(score)); // since this will not going to convert into number so it is Not a Number (NaN)


score = true
// console.log(typeof score);
// console.log(Number(score)); // score is now boolean true and ture means 1 so 1 is output


score = null
// console.log(typeof score);
// console.log(Number(score)); // score is now null and null is an object and 0 is its number type


score = undefined
// console.log(typeof score);
// console.log(Number(score)); // score is now undefined and since it is undefined so it is again Not a Number (NaN)


// 2. Boolean conversion

let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true because 1 means true

// modifying the isLoggedIn

isLoggedIn = ""
booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // false since null is 0 and 0 means false


isLoggedIn = "aman"
booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn); // true because it is not empty so not 0, then 1 and 1 means true



// 3. String conversion

let temp = 33
let stringTemp = String(temp) // converted to string
// console.log(stringTemp);
// console.log(typeof stringTemp);





// ***************************************Operations******************************************
let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3); // 2 raised to the power 3 = 8
// console.log(2/3);
// console.log(2%3); // modulus

let str1 = "hello"
let str2 = "aman"
let str3 = str1 + str2
// console.log(str3);

// // in js whatever the type of first element, so in conversion it automatically converts all of them in the same type
// console.log("1" + 2); // convert to string the o/p is 12
// console.log(1 + "2"); // fisrt number then string o/p is 12, again
// console.log("1" + 2 + 2); // string so everyone is treated as string, o/p is 122
// console.log(1 + 2 + "2"); // first numbers then string, o/p is 32 => (1+2) + "2"


// // but this is not readable code, prefer not to use 
// console.log(true);
// console.log(+true);
// console.log(+"");


// prefix and postfix 

// If used postfix, with operator after operand (for example, x++), the increment operator increments and returns the value before incrementing.

// If used prefix, with operator before operand (for example, ++x), the increment operator increments and returns the value after incrementing.

// let x = 3
// let y = x++
// console.log(`x:${x}, y:${y}`); // first value is assigned then incremented

// let a = 3
// let b = ++a
// console.log(`a:${a}, b:${b}`); // first value is incremented then assigned