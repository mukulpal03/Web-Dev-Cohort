/* Imagine you are bulding an online school management system. Each student has a profile containing their name, age, and grade. you need to store this information in an object format so that it can be accessed easily when required

Challenge
    write a function that takes name, age and grade as parameters and returns a student object containing these properties
*/

function createStudentProfile (name, age, grade) {
    if(typeof(name) === 'string' && typeof(age) === 'number' && age > 5 && typeof(grade) === 'string') {
        let obj = {
            name,
            age,
            grade
        }
        return obj
    }
    return "Invalid input"
}
