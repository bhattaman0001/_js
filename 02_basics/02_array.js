const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "batman", "flash"]

// marvel_heros.push(dc_heros) // it took array as an input
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])// to access the array inside the array


// merging or concatning 2 arrays
const totalHeros = marvel_heros.concat(dc_heros)
// console.log(totalHeros)

// but instead of using concat, we  can also use spread
// spread takes one-one element from each passing parameters and add them into new array
const new_all_heros = [...marvel_heros, ...dc_heros] // further we can give more things inside spread
// console.log(new_all_heros)


// flat is also a method in array
const flat_example_array = [1,2,3,[4,5,6],7,[3,4,[1,3,[5,6]]]]
// so in this example, flat converts it into a single array
console.log(flat_example_array.flat(Infinity))// pass the depth upto which we have to flat the array

// more interesting methods of array
Array.isArray()
Array.from()
Array.of()
// so..on