/* 

Problem Statement
In your web application, some objects contain unnecessary properties. To optimize performance, you need to remove all properties that have null or undefined values.

Challenge
    Write a function that removes all properties with null or undefined values from an object.

Constraints
    • The input should be a valid object.
    • If the object has no valid properties left, return {}. 

*/

// input - {name: "alice", age: 25, email: null}

// output - {name: "alice", age: 25}


function cleanObject(obj) {
    if(typeof(obj) === 'object') {
      if(Object.keys(obj).length !== 0) {
        let cleanedObj = {}
        for(let key in obj) {
          if(obj[key] === null || obj[key] === undefined) {
            cleanedObj[key] = obj[key]
          }
        }
        return cleanedObj
      }
      return {}
    }
}

cleanObject({name: "alice", age: 25, email: null})