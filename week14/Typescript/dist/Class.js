"use strict";
class Manager {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.name = name;
        this.age = age;
    }
}
let user1 = new Manager("john", 30); // A class object created from class that implements a interface
console.log(user1);
// create a function take a user array and check if the valid user is there or not ?
function checkuser(user) {
    return user.filter((user) => user.age > 18);
}
const userfilter = checkuser([
    {
        firstName: "vishesh",
        lastName: "Dwivedi",
        age: 21,
    }, {
        firstName: "apoorv",
        lastName: "Dwivedi",
        age: 22,
    },
]);
console.log(userfilter);
