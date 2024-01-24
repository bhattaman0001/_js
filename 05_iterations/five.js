const coding = ["js", "py", "cpp", "c", "java"];
// for each will return array, which accepts a callback function, and this callback function does not have any name and the arguments passed in this is item values of provided array
// //1
// coding.forEach(function (val) {
//   console.log(val);
// });
// //2
// coding.forEach((val) => {
//   console.log(val);
// });
// //3
// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe)
// //4
// coding.forEach( (item, index, arr) => {
//     // item is value of each item in provided array
//     // index is index at which that item is present
//     // arr is the whole array list
//     console.log(item, index, arr)
// })
//5
const language = [
    {
        languageName: "js",
        index: 0
    },
    {
        languageName: "py",
        index: 1
    },
    {
        languageName: "java",
        index: 2
    }
]
language.forEach((item)=>{
    console.log(item.languageName)
})