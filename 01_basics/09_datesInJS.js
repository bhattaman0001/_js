// Dates
let myDate = new Date()
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toLocaleString())
// console.log(myDate.toISOString())
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toDateString())
let myTimeStamp = Date.now()
// we can compare the times of these 2s
// console.log(myTimeStamp)
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000)) // floor is used to get the exact value of element inside it



// customisation of locale string
let newDate = new Date()
console.log(newDate.toLocaleString('default', {
    weekday : "long",
    day : "2-digit"
}))