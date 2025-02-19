const arr = [1, 2, 3, 4, 5, 6]

// understand real signature first

if(!Array.prototype.myForEach) {
    // Fallback - PollyFill - Backup function
    Array.prototype.myForEach = function (userfn) {
        for(let i = 0; i < this.length; i++) {
            userfn(this[i], i)
        }
    }
}

if(!Array.prototype.myMap) {
    Array.prototype.myMap = function (userfn) {
        let newArr = []
        for(let i = 0; i < this.length; i++) {
            newArr.push(userfn(this[i], i))
        }
        return newArr;
    }
}

if(!Array.prototype.myFilter) {
    Array.prototype.myFilter = function (userfn) {
        const result = []

        for(let i = 0; i < this.length; i++) {
            if (userfn(this[i])) {
                result.push(this[i])
            }
        }
        return result;
    }
}

arr.myForEach((val) => console.log(val));

const res = arr.myMap((e) => e * 2);

console.log(res);
