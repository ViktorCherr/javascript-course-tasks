/*
Предположим, у вас есть онлайн-платформа для управления задачами (todo-лист). 
Пользователь вводит название задачи и она добавляется в список его дел. 
Если пользователь вводит задачу, которая уже есть в списке дел, то система уведомляет 
его об этом и не добавляет дело в список.

Также пользователь может удалять дела из списка дел.
*/
const tasks = new Set();

function addTask(task) {
    const inp = document.querySelector('#taskInput');
    let val = inp.value;
    if (val !== '') {
        if (tasks.has(val)) {
            alert('Эта задача уже есть в списке!');
        }
        tasks.add(val);
        inp.value = '';
        showTasks();
    } else {
        alert('Заполните поле!');
    }
}

function showTasks(){
    const list = document.querySelector('#taskList');
    list.innerHTML = '';
    tasks.forEach(task => {
        let li = document.createElement('li');
        li.innerHTML = `${task}<button class='del-btn' onclick='delTask(this)'>Удалить</button>`;
        list.appendChild(li);
    })
}

function delTask(task){
    tasks.delete(task.parentElement.textContent.slice(0, -7));
    showTasks();
}