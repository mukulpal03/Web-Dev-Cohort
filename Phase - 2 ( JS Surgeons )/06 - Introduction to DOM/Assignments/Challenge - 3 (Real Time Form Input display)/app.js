let nameInput = document.querySelector('#nameInput');
let jobInput = document.querySelector('#jobInput');
let ageInput = document.querySelector('#ageInput');
let bioInput = document.querySelector('#bioInput');
let nameDisplay = document.querySelector('#nameDisplay');
let jobDisplay = document.querySelector('#jobDisplay');
let ageDisplay = document.querySelector('#ageDisplay');
let bioDisplay = document.querySelector('#bioDisplay');

nameInput.addEventListener('input', () => {
     nameDisplay.textContent = nameInput.value || "Not Provided"
})

jobInput.addEventListener('input', () => {
     jobDisplay.textContent = jobInput.value || "Not Provided"
})

ageInput.addEventListener('input', () => {
    ageDisplay.textContent = ageInput.value || "Not Provided"
})

bioInput.addEventListener('input', () => {
    bioDisplay.textContent = bioInput.value || "Not Provided"
})
