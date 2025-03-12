const timeElement = document.querySelector('#time');
const dateElement = document.querySelector('#date');

function updateClock () {
    const date = new Date()
    const hours = date.getHours() % 12 || 12
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    const seconds = date.getSeconds().toString().padStart(2, "0")
    const ampm = date.getHours() >= 12 ? "PM" : "AM"

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    timeElement.textContent = `${hours}:${minutes}:${seconds}:${ampm}`;
    dateElement.textContent = date.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000)

updateClock()