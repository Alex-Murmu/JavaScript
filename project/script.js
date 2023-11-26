let taskList = [];

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const newTask = {
            id: Date.now(),
            text: taskText,
            completed: false
        };

        taskList.push(newTask);
        displayTasks();
        taskInput.value = "";
    }
}

function removeTask(id) {
    taskList = taskList.filter(task => task.id !== id);
    displayTasks();
}

function toggleTaskCompletion(id) {
    taskList = taskList.map(task => {
        if (task.id === id) {
            task.completed = !task.completed;
        }
        return task;
    });

    displayTasks();
}

function displayTasks() {
    const taskListElement = document.getElementById("task-list");
    taskListElement.innerHTML = "";

    taskList.forEach(task => {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span class="${task.completed ? 'completed' : ''}">${task.text}</span>
            <button onclick="toggleTaskCompletion(${task.id})">Toggle</button>
            <button onclick="removeTask(${task.id})">Remove</button>
        `;
        taskListElement.appendChild(taskItem);
    });
}
