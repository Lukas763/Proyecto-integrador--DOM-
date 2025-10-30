const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');


function createTask(taskContent) {
  
  const taskItem = document.createElement('li');
  
  
  const taskText = document.createElement('span');
  taskText.textContent = taskContent;
  taskItem.appendChild(taskText);
  
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Eliminar';
  deleteButton.classList.add('delete-btn');
  taskItem.appendChild(deleteButton);
  
  
  taskList.appendChild(taskItem);

  
  deleteButton.addEventListener('click', () => {
    taskItem.remove(); 
  });
}


taskForm.addEventListener('submit', (event) => {
  event.preventDefault(); 
  
  const taskContent = taskInput.value.trim(); 
  
  if (taskContent !== '') {
    createTask(taskContent); 
    taskInput.value = ''; 
  }
});
