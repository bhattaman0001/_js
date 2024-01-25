// const coding = ["js", "py", "cpp", "c", "java"];
// const lan = coding.forEach((item) => {
//     // if(item == 'java') console.log("java")
//     return item
// });
// console.log(lan) // this is not the correct way to return the items.

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// // filter is also same as forEach but unlike in foreach, it returns the values, filter is true and false
// const newNums = myNums.filter((num) => num > 4)
// console.log(newNums)

// again alternative approach is
const newNums = [];
myNums.forEach((num)=>{
    if(num > 4){
        newNums.push(num)
    }
})
console.log(newNums)