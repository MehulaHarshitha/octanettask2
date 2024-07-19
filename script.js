const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const taskText = input.value.trim();

    if (taskText !== '') {
        const task = document.createElement('li');
        task.innerText = taskText;

        task.addEventListener('click', function() {
            task.classList.toggle('completed');
        });

        todoList.appendChild(task);
        input.value = '';
    }
});
