// const arr = ["swaleh", "edu", "others"]

// // arr.map((v,i) => console.log(v,i))

// for(let i = 0; i <= arr.length - 1; i++) {
//     // console.log(arr[i], i)
// }

// const food = ["rice", "chicken", "shawarma", "fries", "bhajia"]

// // food.map((v) => console.log(v))

// function printName() {
//     return "Swaleh"
// }

// const printName2 = () => {
//     return "swaleh from arrow function"
// }

// const printName3 = () => "Swaleh from arrow function 2"
// const printName4 = (name) => name

// console.log(printName())
// console.log(printName2())
// console.log(printName3())
// console.log(printName4("Swaleh from parameter"))
// console.log(printName4("Tr. Edu from parameter"))

let name = {
    firstName: "Swaleh",
    lastName: "Kemboi",
    age: 20,
    printDetails: function() {
        return this.firstName + " " + this.lastName
    },
    printAge: function (){
        return this.age
    },
    printWhole: function(){
        return `${this.firstName} ${this.lastName} is ${this.age} years old`
    }
}
let {firstName, age} = name


console.log(name.printDetails())
console.log(name.printAge())
console.log(name.printWhole())
console.log(firstName,age)