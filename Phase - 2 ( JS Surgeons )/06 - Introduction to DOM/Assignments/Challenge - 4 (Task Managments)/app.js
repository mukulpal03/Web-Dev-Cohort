const addBtn = document.querySelector("#addButton");
const taskInput = document.querySelector("#taskInput");
const emptyListMsg = document.querySelector(".empty-list");
const taskList = document.querySelector("#taskList");
const completedTasks = document.querySelector("#completedTasks");
const allTasks = document.querySelector("#totalTasks");

let tasksCompleted = 0;
let tasks = [];

const updateTaskCounts = () => {
    allTasks.innerText = `Total tasks: ${tasks.length}`;
    completedTasks.innerText = `Completed: ${tasksCompleted}`;
    emptyListMsg.style.display = tasks.length === 0 ? "block" : "none";
};

addBtn.addEventListener("click", () => {
    const taskValue = taskInput.value.trim();
    if (!taskValue) return;

    tasks.push(taskValue);

    const li = document.createElement("li");
    li.classList.add("task-item");

    li.innerHTML = `
        <input type="checkbox" class="complete-checkbox">
        <span class="task-text">${taskValue}</span>
        <button class="delete-button">Delete</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";

    updateTaskCounts();
});

taskList.addEventListener("click", (e) => {
    const li = e.target.closest("li");
    if (!li) return;

    if (e.target.classList.contains("complete-checkbox")) {
        if (e.target.checked) {
            li.classList.add("completed");
            tasksCompleted++;
        } else {
            li.classList.remove("completed");
            tasksCompleted--;
        }
    }

    if (e.target.classList.contains("delete-button")) {
        let delTask = li.children[1].textContent
        tasks = tasks.filter((task) => task !== delTask)

        if (li.querySelector(".complete-checkbox").checked) {
            tasksCompleted--;
        }
        taskList.removeChild(li);
    }
    updateTaskCounts();
});
