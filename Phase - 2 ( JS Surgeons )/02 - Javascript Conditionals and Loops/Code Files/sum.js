let myArray = [1, 2, 3, 4, 5]

function sumOfArray (arr) {
    let sum = 0;
    for(let i = 0; i < arr.length; i++) {
        sum += arr[i]
    }
    return sum;
}

let ans = sumOfArray(myArray)
console.log(ans);