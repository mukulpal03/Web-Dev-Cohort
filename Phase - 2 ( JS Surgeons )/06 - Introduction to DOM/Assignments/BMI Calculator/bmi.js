form.addEventListener('submit', function (event) {
    event.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    console.log(document.querySelector('#height').value);
    console.log(height);
    
    

    if(height < 0 || isNaN(height)) {
        result.innerHTML = "Please enter a valid height"
    } else if(weight < 0 || isNaN(weight)) {
        result.innerHTML = "Please enter a valid weight"
    } else {
        result.innerHTML = `<span>${bmi}</span>`;
    } 

    const under = document.querySelector('#under')
    const normal = document.querySelector('#normal')
    const over = document.querySelector('#over')

    if(bmi < 18.6) {
        under.style.color = '#0056b3';
        normal.style.color = 'black';
        over.style.color = 'black';
        under.style.fontWeight = 'bold'
        over.style.fontWeight = 'lighter'
        normal.style.fontWeight = 'lighter'
    } else if(bmi >= 18.6 && bmi <= 24.9) {
        under.style.color = 'black';
        normal.style.color = '#0056b3';
        over.style.color = 'black';
        normal.style.fontWeight = 'bold'
        over.style.fontWeight = 'lighter'
        under.style.fontWeight = 'lighter'
    } else {
        under.style.color = 'black';
        normal.style.color = 'black';
        over.style.color = '#0056b3';
        over.style.fontWeight = 'bold';
        under.style.fontWeight = 'lighter';
        normal.style.fontWeight = 'lighter';
    }
})