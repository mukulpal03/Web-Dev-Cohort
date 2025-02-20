class Person {
    constructor (fname, lname) { // Class ke objects bnane ke liye we use constructor 
        this.fname = fname
        this.lname = lname
    }

    getFullName () {
        return `${this.fname} ${this.lname}`
    }
}

// Person.Prototype = Constructor, getfullname
 
const p1 = new Person("Mukul", "Pal")    // p1.__proto__ = Person.Prototype
const p2 = new Person("Piyush", "Garg")

console.log(p1);

class Car {

}

const c1 = new Car()
console.log(c1);   // Js compiler/interpreter by default ek constructor bna deta h if we dont write it explicitly

// Inheritance

class A {
    funInsideA () {

    }
}

class B extends A{   // B.prototype = A
    funInsideB () {

    }
}

// Object.setPrototypeOf(B.prototype, A.prototype)  // Internally

const p = new B()

console.log(p.funInsideA());
