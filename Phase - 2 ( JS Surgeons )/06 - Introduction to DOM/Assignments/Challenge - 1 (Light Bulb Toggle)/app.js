const bulb = document.querySelector('#bulb');
const toggleBtn = document.querySelector('#toggleButton')
const statusMsg = document.querySelector('#status')
const darkModeTextToggle = document.querySelectorAll('.dark')   // to change all the texts to white if theme is dark else black

toggleBtn.addEventListener("click", () => {
    const isOff = bulb.classList.toggle("off");    // here we are toggling the class to bulb and bulb off

    darkModeTextToggle.forEach(element => element.classList.toggle('dark'));   // here we are toggling the class of the texts

    toggleBtn.innerText = isOff ? 'Turn On' : 'Turn Off';
    statusMsg.innerText = `Status: ${isOff ? 'Off' : 'On'}`;
    document.body.style.backgroundColor = isOff ? 'black' : 'white';
})