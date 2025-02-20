const obj1 = {
    fname: "Piyush",
    lname: "Garg",
    getFullName: function () {
        if(this.lname !== undefined) return `${this.fname} ${this.lname}`
        return `${this.fname}`
    }
}

const obj2 = {
    fname: 'Anirudh',
    lname: 'Jwala'
}

obj2.__proto__ = obj1;
obj1.__proto__ = null;

console.log(obj1.getFullName());
console.log(obj2.getFullName());
console.log(obj2.toString());

// this is known as prototypal chaining

const arr = [1, 2, 3]

console.log(arr.hasOwnProperty());

// Everything is Js is an Object coz sabka last proto Object hota h
