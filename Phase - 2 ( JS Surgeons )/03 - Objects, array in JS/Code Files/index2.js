let fname = 'Hitesh'
let fname2 = fname

fname2 = 'piyush'

// here the value got copied

const p1 = {
    fname: 'hitesh',
    address: {
        hno: 1,
        street: 1
    },
    lname: fname
}

// const p2 = p1;  


// addressing issue / heap memory issue

const p2 = {...p1}   // shallow copy, ye nested objs ko copy nahi karta, it just copies the first level

p2.fname = 'piyush'

console.log(p1);

const p1KaString = JSON.stringify(p1)

const p3 = JSON.parse(p1KaString);  // deep copy

console.log(p3);