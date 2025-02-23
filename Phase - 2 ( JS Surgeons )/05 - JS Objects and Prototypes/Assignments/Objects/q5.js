/* write a function that returns the number of properties in an object

constraints
    • user should be a valid object
    • if the object is empty, return 0

*/

function countProperties (user) {
    if(typeof(user) === 'object') {
        if(Object.keys(user).length > 0) {
            return Object.keys(user)
        }
        return 0;
    }
}