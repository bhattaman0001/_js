const nums = [1, 2, 3, 4, 5];
const myTotal = nums.reduce(function (preval, currval) {
  console.log(`prev: ${preval} and currval: ${currval}`);
  return preval + currval;
}, 0);
console.log(myTotal);
// reduced can also be used in calculating the total of items in a cart,, etc