// Call-back function
function add(a, b, callBack) {
    const res = a + b;
    callBack(res);
}
function showRes(res) {
    console.log(`Result: ${res}`);
}
// add(2, 3, showRes)

// Closure function
function greet(name) {
    function calcAge(yob) {
        console.log(`${name} is ${2024 - yob} years old`);
    }
    return calcAge(1994);
}
// greet("John");

// Constructor function
function Person(name, age) {
    this.name = name;
    this.age = age;
}
let person1 = new Person("John", 21);
// console.log(`Person1: ${person1.name}, ${person1.age}`);

// Currying function
function curryAdd(x) {
    return function(y) {
        return x + y
    };
}
// console.log(`curryResult: ${curryAdd(5)(3)}`); // 8


// Recursive function
function countDown(num) {
    console.log(`Num: ${num}`)
    const updatedNum = num-1;
    if (updatedNum > 0) {
        countDown(updatedNum);
    }
}
// countDown(5);

// Generator function
function* numberGenerator() {
    let i = 1;
    while(true) {
        yield i++
    }
}
const numbers = numberGenerator();
// console.log(numbers.next().value);
// console.log(numbers.next().value);

// IIFE function
(function greet() {
    console.log("Hello Javascript")
})()
