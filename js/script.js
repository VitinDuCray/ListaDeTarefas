const newTaskInput = document.getElementById('new-task-input');
const addTaskButton = document.getElementById('add-task-btn');
const taskList = document.getElementById('task-list');

addTaskButton.addEventListener('click', addTask);

function addTask() {
    const taskText = newTaskInput.value.trim();
    if (taskText === '') {
        alert('Por favor, insira uma tarefa.');
        return;
    }

    const listItem = document.createElement('li');
    listItem.textContent = taskText;
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Excluir';
    deleteButton.classList.add('delete-btn');
    deleteButton.addEventListener('click', deleteTask);
    listItem.appendChild(deleteButton);
    listItem.addEventListener('click', () => {
        listItem.classList.toggle('completed');
    });
    taskList.appendChild(listItem);
    newTaskInput.value = '';
}

function deleteTask(event) {
    const listItem = event.target.parentElement;
    taskList.removeChild(listItem);
}