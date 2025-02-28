const colorBtns = document.querySelectorAll('button')
const mainHeading = document.querySelector('#mainHeading')

colorBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        let operation = e.target.id.slice(0, e.target.id.indexOf('B'))   // the id returns colorButton eg. redButton, so we are extracting red from it
        if(operation !== "reset") { 
            mainHeading.style.color = operation
        } else {
            mainHeading.style.color = 'black'
        }
    })
})
