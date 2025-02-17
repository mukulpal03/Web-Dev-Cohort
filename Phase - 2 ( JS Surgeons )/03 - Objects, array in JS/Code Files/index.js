const person = {
    x: 10,
    firstName: "Mukul",
    lastName: "Pal",
    hobbies: ["code", "gym"],
    isMarried: false,
    getFullName: function () {
        return this.firstName + this.lastName
    },
    address: {
        hno: 1,
        street: 1,
        countryCode: 'IN',
        state: 'DEL'
    }
}

console.log(person.x);
