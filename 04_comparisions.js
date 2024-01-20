// ALERT - AVOID CONFUSING COMPARISIONS, READABLE CODE IS OUR PRIORITY

// comparison of datatypes
// console.log(2 > 1); // and so on, this returns boolean value

// console.log("1" > 2); // js converted the string 1 to number 1 and o/p is false
// console.log("2" == 2); // js converted the string 2 to number 2 and o/p is true
// in js == and >,<,>=,<= these 2 conversions work differently

// console.log(null == 0); // here js converted null to NaN
// console.log(null > 0); // false
// console.log(null >= 0); // true, here js converted null to 0
// js has this inconsistency


// strict equality ===
// this time not only value but datatype is also checked
// console.log("2" === 2); // false