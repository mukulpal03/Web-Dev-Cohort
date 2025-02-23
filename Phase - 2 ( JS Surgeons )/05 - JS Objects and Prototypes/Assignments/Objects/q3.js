/* Write a function that checks if a product object has a discount property and returns true or false 

constraints
    product should be a valid object
*/

function hasDiscount (product) {
    if(typeof(product) === 'object') {
        return ("discount" in product)
    }
}