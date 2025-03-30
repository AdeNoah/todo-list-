const form = document.getElementById('form')
const todoInput = document.querySelector('#todo-text-input');
const addButton = document.querySelector('#todo-add-button');
const todoList = document.querySelector('#todo-list');
const todoTemplate = document.querySelector('.todo-template');

// disabling the default action of a form 
form.addEventListener('submit', event => {
    event.preventDefault()
})

// adding the new tasks to the list 
addButton.addEventListener('click', () => {
    if(todoInput.value === ''){
    } else {
        const clonedTodoTemplate = todoTemplate.content.cloneNode(true);
        const  todoText = clonedTodoTemplate.querySelector('.todo-text')
        todoText.innerText = todoInput.value;
        
        todoList.appendChild(clonedTodoTemplate)
        
        // todoList.style.display = 'block';

        if(!todoList.style.display || todoList.style.display === 'none') {
            todoList.style.display = 'block';
        }
        todoInput.value = '';
    }
})

// to check a task as completed
todoList.addEventListener('click', e => {
    if(e.target.classList.contains('fa-check')) {
        const todoText = e.target.closest('.todo-task').querySelector('.todo-text')
        todoText.classList.toggle('checked')
        todoText.classList.toggle('unchecked')
    }
})


// deleting a todo task from the todo list
todoList.addEventListener('click', e => {
    if(e.target.classList.contains('fa-trash')) {
        const todoTask = e.target.closest('.todo-task');
        todoTask.remove()
        /*
        const todoTask = e.target.parentElement.parentElement;
        todoTask.remove()   */
    }
})