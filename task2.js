const input = document.querySelector('#input input');
const addBtn = document.getElementById('btns');
const taskList = document.getElementById('tasks');


addBtn.addEventListener('click',() => {
    const taskText = input.value.trim();
    if (taskText=='')
    {
        alert('Enter a task');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;
    li.classList.add('task-item');

    li.addEventListener('click',() => {
        li.classList.toggle('completed');
    });

    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'X';
    deletebtn.classList.add('deltethetask');
    deletebtn.addEventListener('click',(e) => {
        e.stopPropagation();
        li.remove();
    });

    li.appendChild(deletebtn);
    taskList.appendChild(li);

    input.value='';
});