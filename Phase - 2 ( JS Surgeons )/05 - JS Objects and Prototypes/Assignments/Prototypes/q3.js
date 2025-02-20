// You need to create a counter constructor function that initializes a count property to 0. the counter should have two prototype methods :- increment and decrement

function Counter () {
    this.count = 0
}

Counter.prototype.increment = function () {
    return this.count++
}

Counter.prototype.decrement = function () {
    return this.count--
}