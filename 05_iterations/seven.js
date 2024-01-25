const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const newNums = myNums.map((num) => (num = num + 2));
const newNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num >= 40) // filter is true and false
  // this is called chaining
console.log(newNums)