/* write a function that removes the password property from user object and returns the updated object 

constraints
    • user should be a valid object with at least a username and password
    • if password does not exist, return the object as it is
*/

function removePassword (user) {
    if(typeof(user) === 'object' && ("username" in user)) {
        if("password" in user) {
            delete user.password
            return user;
        }
        return user
    }
}
