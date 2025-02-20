// Create a Shopping Cart System where items can be added with a price. implement a method getTotalPrice() that calculates the total price of all items in the cart.

function ShoppingCart () {
    this.items = []
}

ShoppingCart.prototype.addItem = function (price) {
    this.items.push(price)
}

ShoppingCart.prototype.getTotalPrice = function () {
    let totalPrice = 0
    for(let i = 0; i < this.items.length; i++) {
        totalPrice += this.items[i]
    }
    return totalPrice;
}