const dateDisplay = document.querySelector('.date')
const digitalClock = document.querySelector('.digital-clock')
const clock = document.querySelector(".clock");
const handHour = document.querySelector('.hour')
const handMinute = document.querySelector('.minute')
const handSec = document.querySelector('.second')

const date = new Date()

dateDisplay.textContent = date.toDateString()

setInterval(() => {
    const date = new Date()
    digitalClock.textContent = `${date.toLocaleTimeString()}`

    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours() % 12;

    handHour.style.transform = `translateX(-50%) rotate(${30 * hours}deg)`
    handMinute.style.transform = `rotate(${6 * minutes}deg)`
    handSec.style.transform = `rotate(${6 * seconds}deg)`
}, 1000)

for(let i = 1;i<=12;i++){
    const number = document.createElement("div");
    number.classList.add('number')
    number.style.setProperty("--rotation", `${i * 30}deg`);
    const span = document.createElement("span");
    span.innerText = i;
    number.appendChild(span)
    clock.appendChild(number)
}