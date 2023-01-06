const creatingTask = (e) => {
    e.preventDefault();
    const input = document.querySelector('[task-name]');
    const value = input.value;
    input.value = '';
    console.log(value);
    const ul = document.querySelector('[listContent]');

    ul.appendChild(creatingDiv(value));
}

const buton = document.querySelector(' [buton-form]');
buton.addEventListener('click', creatingTask);


//creating a li task
const creatingDiv = (taskName) => {
    const div = document.createElement('div');
    div.classList.add('task');
    const li = document.createElement('li');
    li.classList.add('task-text');
    li.innerText = taskName;
    div.appendChild(creatingCheckButton());
    div.appendChild(li);
    div.appendChild(creatingTrashButton());
    return div;
}

//creating a icon 
const creatingCheckButton = () => {
    const checkButton = document.createElement('i');
    checkButton.classList.add('fa-regular', 'fa-square-check','checkIcon');
    checkButton.addEventListener('click', () => {
        checkButton.classList.toggle('fa-regular');
        checkButton.classList.toggle('fa-solid');

    });
    return checkButton;
}

//creating a trash icon
const creatingTrashButton = () => {
    const trashButton = document.createElement('i');
    trashButton.classList.add('fa-solid', 'fa-trash', 'trashIcon');
    trashButton.addEventListener('click', () => {
        trashButton.parentElement.remove();
    });
    return trashButton;
}