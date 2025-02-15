// create a function to check if the number is odd or even

function checkEvenOdd (num) {
    if(num % 2 == 0) {
        return "Even"
    } else {
        return "Odd"
    }
}

// write a function that takes three numbers and returns the largest

function findLargest (a, b, c) {
    if(a >= b && a >= c) {
        return a;
    } else if (b >= c) {
        return b;
    } else {
        return c;
    }
}

// write a function that checks if a person is eligible to vote and returns "Eligible" or "Not Eligible"

function checkVotingEligibility (age) {
    if (age >= 18) {
        return "Eligible"
    } else {
        return "Not Eligible"
    }
}

// write a function that returns the corresponding grade using if-else

function calculateGrade (marks) {
    if(marks >= 90) {
        return "A"
    } else if (marks >= 80) {
        return "B"
    } else if (marks >= 70) {
        return "C"
    } else if (marks >= 60) {
        return "D"
    } else {
        return "F"
    }
}

// write a function to check if a year is a leap year

function isLeapYear (year) {
    if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
        return "Leap Year"
    } else {
        return "Not a Leap Year"
    }
}

// write a function that uses switch-case to return the traffic light situation

function trafficLightAction (color) {
    switch (color) {
        case "Red":
            return "Stop"
        case "Yellow":
            return "Slow Down"
        case "Green":
            return "Go"
        default: 
            return "Invalid color"
    }
}

//  write a function that uses switch-case to return the day name for valid inputs otherwise "Invalid Day"

function getDayOfWeek (day) {
    switch (day) {
        case 1:
            return "Monday"
        case 2:
            return "Tuesday"
        case 3:
            return "Wednesday"
        case 4:
            return "Thursday"
        case 5:
            return "Friday"
        case 6:
            return "Saturday"
        case 7:
            return "Sunday"
        default: 
            return "Invalid Day"
    }
}

// write a function that uses if-else to classify a number

function checkNumberType (num) {
    if (num > 0) {
        return "Positive"
    } else if (num < 0) {
        return "Negative"
    } else {
        return "Zero"
    }
}

// write a function that uses switch-case to convert temperature

function convertTemp (value, scale) {
    switch (scale) {
        case "C":
            return (value * 9) / 5 + 32 + "F"
        case "F":
            return ((value - 32) * 5) / 9 + "C"
        default: 
            return "Invalid Scale" 
    }
}

// write a function that uses switch-case to perform arithmetic operations. Handle the edge case of "cannot divide by zero"

function calculator (num1, num2, operator) {
    switch (operator) {
        case "+":
            return num1 + num2
        case "-":
            return num1 - num2;
        case "*": 
            return num1 * num2;
        case "/":
            return num2 === 0 ? "cannot divide by zero" : num1 / num2
        default: 
            return "Invalid Operator"
    }
}