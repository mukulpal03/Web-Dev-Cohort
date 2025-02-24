/**
 * Write your challenge solution here
 */

const bulb = document.querySelector('#bulb');
const toggleBtn = document.querySelector('#toggleButton')
const statusMsg = document.querySelector('#status')
const darkModeTextToggle = document.querySelectorAll('.dark')

toggleBtn.addEventListener("click", () => {
    const isOff = bulb.classList.toggle("off");

    darkModeTextToggle.forEach(element => element.classList.toggle('dark'));

    toggleBtn.innerText = isOff ? 'Turn On' : 'Turn Off';
    statusMsg.innerText = `Status: ${isOff ? 'Off' : 'On'}`;
    document.body.style.backgroundColor = isOff ? 'black' : 'white';
})