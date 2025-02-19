// You have a list of food items, but you want to keep only the healthy ones. remove all items that contain "Burger"

// create a function that removes unhealthy food items (those containing "burger") and returns the updated list

function filterHealthy (foodList) {
    return foodList.filter((foodItem) => foodItem !== "Burger")
}