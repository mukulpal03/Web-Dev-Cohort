/* Write a function that takes two Objects and merges them into one. if a key exists in both objects, the value from the second object should overwrite the value from the first object

constraints
    • Both inputs should be valid objects
    • if an object is empty, return the other object as it is
    • if both objects are empty, return {}

*/

function mergeObjects (obj1, obj2) {
    if(typeof(obj1) === 'object' && typeof(obj2) === 'object') {
        return {...obj1, ...obj2}
    }
}