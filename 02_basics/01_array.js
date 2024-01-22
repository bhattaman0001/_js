// let myArr = [1,2,3,4,5]
// // console.log(myArr)
// let myAlphaArr = ["a", "b", "c"]
// // console.log(myAlphaArr)
// myAlphaArr.push(10)
// // console.log(myAlphaArr)
// myAlphaArr.pop()
// // console.log(myAlphaArr)
// myAlphaArr.unshift(100)
// // console.log(myAlphaArr)
// myAlphaArr.shift()
// // console.log(myAlphaArr)


// difference between slice and splice
let myArr = [1,2,3,4,5,6,7,8]
console.log("A ", myArr)
let usingSlice = myArr.slice(1,3)
console.log(usingSlice)
console.log("B ", myArr)
let usingSplice = myArr.splice(1,3)
console.log(usingSplice)
console.log("C ", myArr)
// NOTE: // so the difference is, in slice the last range is not included and no changes in original array but in splice the last range is included and that splice portion is removed from the original array, and since array is an object, so reference remains same.
