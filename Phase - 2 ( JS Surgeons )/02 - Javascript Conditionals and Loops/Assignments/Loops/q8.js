// You are shopping for groceries and want to know the total cost of all items in your cart. you have an array of item prices.

// create a function that takes an array of item prices and returns the total cost.

function totalPrice (prices) {
    let totalPrice = 0;
    for(let i = 0; i < prices.length; i++) {
        totalPrice += prices[i]
    }
    return totalPrice;
}

totalPrice([1.5, 2.3, 3.7])

// output - 7.5