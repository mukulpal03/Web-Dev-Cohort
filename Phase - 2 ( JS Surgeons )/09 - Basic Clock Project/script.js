function updateClock () {
    const timeElement = document.getElementById('time');
    const dateElement = document.getElementById('date');

    const now = new Date()
    const hours = now.getHours() % 12 || 12;  // we did mod 12 to make it a 12 hours clock not a 24 hrs and we did || 12 coz 12 % 12 = 0
    const minutes = now.getMinutes() < 10 ? `0${now.getMinutes()}` : now.getMinutes()
    const seconds = now.getSeconds().toString().padStart(2, "0") // similar to minutes conversion, padstart means to fill till 2 char
    const ampm = now.getHours() >= 12 ? "PM" : "AM"

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`
    dateElement.textContent = now.toLocaleDateString(undefined, options)

}

setInterval(updateClock, 1000)

updateClock()

// study about tolocaledatestring in mdn, concept of undefined is imp