/* Write a function that takes a car object and a color string, then adds the color property to the object.

constraints: 
    car should be a valid object with at lease brand and model properties
    color should be a non-empty string, otherwise return "Invalid color"
*/

function addCarColor (car, color) {
    if(typeof(car) === 'object' && ("brand" in car) && ("model" in car)) {
        if(typeof(color) !== 'string' || color === '') {
            return "Invalid color"
        }
        return {...car, color}
    } 
}