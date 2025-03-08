const toggleBtn = document.querySelector('.toggle-btn');
const panel = document.querySelector('.panel');
const closeBtn = document.querySelector('.close-btn');
const menuItems = document.querySelectorAll('.menu-item');

toggleBtn.addEventListener('mouseover', () => {
    panel.classList.add('active');
})

closeBtn.addEventListener('click', () => {
    panel.classList.remove('active');
})

menuItems.forEach((menuItem) => {
    menuItem.addEventListener('click', (e) => {
        alert(`This is ${e.target.textContent} Page`)
    })
})
