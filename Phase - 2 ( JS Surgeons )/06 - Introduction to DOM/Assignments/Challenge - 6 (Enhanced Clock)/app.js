const dateDisplay = document.querySelector('.date')
const digitalClock = document.querySelector('.digital-clock')

const date = new Date()

dateDisplay.textContent = date.toDateString()

setInterval(() => {
    const date = new Date()
    digitalClock.textContent = `${date.toLocaleTimeString()}`
}, 1000)


