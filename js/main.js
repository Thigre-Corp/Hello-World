//déclaration de constantes
const addBtn = document.querySelector('#btn'); // retourne le premier élément du DOM qui coïncide avec le selecteur CSS ( id='btn' dans ce cas)
const taskCard = document.querySelector(".todoCard");
const tasksContainer = document.querySelector('#todoCards');
const delBtn = document.querySelector('.delBtn');

//events Listener
addBtn.addEventListener('click', addTask); // add a task on a click
delBtn.addEventListener('click', function() {deleteTask(taskCard);});


//mise en forme première liste
updateTaskName(taskCard);

//déclaration de fonctions
function addTask(){         //fonction qui permet d'ajouter une tâche dans la liste
    const newTask = taskCard.cloneNode(true); // clone l'objet taskCard (élément .todoCard)
    const newDelBtn = newTask.querySelector('.delBtn');

    newDelBtn.addEventListener('click', function(){deleteTask(newTask);});
    tasksContainer.appendChild(newTask);
    updateTaskName(newTask);
}

function deleteTask(task){  //fonction qui permet de supprimer une tâche dans la liste.
    task.remove();
}

function updateTaskName(task){  //fonction qui permet de modifier le texte par défaut d'une tâche dans la liste.
    const newTextArea = task.querySelector('.task');
    newTextArea.value = "Task "+ updateCounter() //tasksContainer.ariaValueNow;
}

function updateCounter(){   // fonction de calcul du compteur de tâche
    return tasksContainer.children.length;
}
