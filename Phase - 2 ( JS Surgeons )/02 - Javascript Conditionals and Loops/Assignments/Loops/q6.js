// You are planning a week's schedule and need to count the days you are working. You have an array where each element represents a day of the week. How can you calculate how many days you are working?

// create a function that takes an array of days and returns the number of days you are working. "Saturday" and "Sunday" are not working days.

function workingDays (days) {
    let workDays = 0;
    for(let i = 0; i < days.length; i++) {
        if(days[i] !== "Sunday" && days[i] !== "Saturday") {
            workDays++
        }
    }
    return workDays;
}