// You have multiple levels of stars to count. each level contains a certain number of stars. How many total stars are there?

// create a function that takes an array of arrays (representing the number of stars in each level) and returns the total number of stars.

function totalStars (starLevels) {
    let starsCount = 0;
    for(let i = 0; i < starLevels.length; i++) {
        for(let j = 0; j < starLevels[i].length; j++) {
            if(starLevels[i][j] === "*") {
                starsCount++
            }
        }
    }
    return starsCount;
}

totalStars([["*", "*", "*"], ["*", "*"], ["*"]])

// output - 6