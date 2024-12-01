"use strict";
let x = 1;
x = "vishesh";
console.log(x);
function greet(firstName) {
    console.log("hello" + firstName);
}
greet("vishesh");
function sum(n1, n2) {
    return n1 + n2;
}
let ans = sum("vishesh", 54);
console.log(ans);
//problem no 3 takes a fucntion as input and gives a output as 
function wait(func) {
    setTimeout(func, 1000);
}
function func() {
    console.log("Hello");
}
;
wait(func);
function exF(mul, a, b) {
    setTimeout(() => mul(a, b), 1000);
}
function mul(a, b) {
    console.log(a * b);
}
exF(mul, 31, 56);
//In the setimeout and setInterval the fucntion need to be the callback not  drectly the function 
