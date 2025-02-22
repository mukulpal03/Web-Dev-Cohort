const todoInput = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoItems = document.getElementById('todo-items');
const deleteAll = document.getElementById('del-all-btn')

addBtn.addEventListener("click", () => {
    const value = todoInput.value

    const li = document.createElement('li')
    li.innerText = value

    const delbtn = document.createElement('button')
    delbtn.innerText = 'X'

    delbtn.addEventListener("click", () => {
        li.remove()
    })

    li.appendChild(delbtn)

    todoItems.appendChild(li);
    todoInput.value = ''
});

deleteAll.addEventListener("click", () => {
    todoItems.innerHTML = ''
})