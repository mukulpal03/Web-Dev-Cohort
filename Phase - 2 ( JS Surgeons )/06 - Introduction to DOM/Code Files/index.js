// console.log(window);  coz its the part of browser not node

function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color
}

const themeBtn = document.getElementById('theme-button');

themeBtn.addEventListener("click", () => {
    const currColor = document.body.style.backgroundColor;
    if(!currColor || currColor === 'white') {
        changeBackgroundColor('black')
        themeBtn.innerText = 'Light Mode'
    } else {
        changeBackgroundColor('white')
        themeBtn.innerText = 'Dark Mode'
    }
});