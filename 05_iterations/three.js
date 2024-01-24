// const arr = [1, 2, 3, 4, 5];
// for(const num of arr){
//     console.log(num)
// }



// const username = "hello world"
// for(const letter of username){
//     console.log(letter)
// }




// maps
const map = new Map()
// key-value pair, any type of keys with any type of values
map.set(1, "one")
map.set(2, "two")
map.set(3, "three")
map.set(1, "one")
// no duplicate value is stored in the maps
// console.log(map)


// making this is basically destructuring the key value pair
for(const [key, value] of map){
    console.log(key,' :- ',value)
}