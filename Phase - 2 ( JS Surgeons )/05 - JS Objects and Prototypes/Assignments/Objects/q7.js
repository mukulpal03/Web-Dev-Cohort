/* Write a function that converts an object into an array of key value pairs. each element in the array should be an array where the first item is the key and the second item is the value

constraints
    • the input should be a valid object
    • if the object is empty, return an empty array
*/

// input : {name: "alice", age: 25}

// expected output: [["name", "alice"], ["age", 25]]

function objectToArray (obj) {
    let convertedArr = [];
    if(typeof(obj) === 'object') {
        if(Object.keys(obj).length !== 0) {
            for(let key in obj) {
                let keyValArr = []
                keyValArr.push(key, obj[key])
                convertedArr.push(keyValArr)
            }
            return convertedArr;
        }
        return [];
    }
}

// another way - Object.entries(obj)