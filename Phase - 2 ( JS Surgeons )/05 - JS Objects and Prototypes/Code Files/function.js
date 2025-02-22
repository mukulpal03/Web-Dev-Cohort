// Arrow func

// const add = (x, y) => {
//     return x + y
// }

const add = (x, y) => x + y;

console.log(add(1, 3));

// interview ques

Function.prototype.describe = function () {
    console.log(`Function name is ${this.name}`);
}

function masalaChai () {}
function gingerChai () {}

function greet (name) {
    return `Hello ${name}`
}

greet.describe()

function add (a, b) {   // function declaration
    return a + b;  
}

const subtract = function (a, b) {   // function expression
    return a - b;
}

function applyOperation (a, b, operation) {   // first class function
    return operation(a, b)
}

const result = applyOperation(5, 4, (x, y) => x * y)

function createCounter () {  // Closures
    let count = 0;
    return function () {
        count++
        return count
    }
}

(function () {  
    console.log("hitesh");
})()     // IIFE (immediately invoked function expression) - suppose we creating a web application and app start hote hi database connection ka function call ho jaye