console.log("OBJECTS IN JAVASCRIPT")

// class Person {
//     constructor(name) {
//         this.name = name
//     }
//     // this keyword
//     /*
//     this keyword refers to the object to which it belongs to
//     */
//     getName() {
//         console.log(`Hello ${this.name}`)
//     }                                               

//     setName(newName) {
//         this.name = newName
//     }

// }

// let person1 = new Person("Samson")
// person1.getName()
// person1.setName("Delilah")
// person1.getName()
// // obsfuscation

const a = {
    er: 's',
    ed: "ss",
    pol: "efs"
}
Object.keys(a).forEach(e => console.log(e))
Object.values(a).forEach(e => console.log(e))