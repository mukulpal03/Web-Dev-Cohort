// You have a basket full of apples. You need to count how many apples are in the basket, but you dont know the exact number. Each time you pick an apple, you count one. your task is to count how many apples are in the basket.

// create a function that countes the number of apples in the basket using a loop

function countApples (apples) {
    let count = 0;
    for(let i = 0; i < apples; i++) {
        count++
    }
    return count;
}