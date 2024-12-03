"use strict";
function greet(user) {
    console.log("Hello" + user.firstName + user.lastName);
}
function printN(id) {
    console.log("your id is " + id);
}
;
printN("vishesh");
printN(2);
let user = {
    name: "harkirat",
    age: 12,
    address: {
        city: "ayodhya",
        pincode: 224001,
    }
};
function Eligible(user) {
    if (user.age >= 18) {
        return true;
    }
    else {
        return false;
    }
}
let person = {
    name: "harkirat",
    age: 21,
    greet: () => {
        return "Hi Vishesh Dwivedi@Google";
    },
}; //person is Random object created directly from the interface not from the classes 
let greeting = person.greet();
console.log(greeting);
console.log(person.name);
