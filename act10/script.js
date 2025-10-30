const columns = document.querySelectorAll('.column');

columns.forEach(column => {
  column.addEventListener('dragover', (e) => {
    e.preventDefault();
    const draggingTask = document.querySelector('.dragging');
    const closestTask = getClosestTask(column, e.clientY);
    
    if (closestTask) {
      column.insertBefore(draggingTask, closestTask);
    } else {
      column.appendChild(draggingTask);
    }
  });
});

const tasks = document.querySelectorAll('.task');
tasks.forEach(task => {
  task.addEventListener('dragstart', () => {
    task.classList.add('dragging');
  });
  
  task.addEventListener('dragend', () => {
    task.classList.remove('dragging');
    saveKanbanState();
  });
});

function getClosestTask(column, y) {
  const tasks = [...column.querySelectorAll('.task')];
  return tasks.reduce((closest, task) => {
    const box = task.getBoundingClientRect();
    const offset = y - box.top - box.height / 2;
    
    if (offset < 0 && offset > closest.offset) {
      return { task, offset };
    } else {
      return closest;
    }
  }, { offset: Number.NEGATIVE_INFINITY }).task;
}

function saveKanbanState() {
  const kanbanState = {};
  columns.forEach(column => {
    kanbanState[column.id] = [...column.querySelectorAll('.task')].map(task => task.textContent);
  });
  localStorage.setItem('kanban', JSON.stringify(kanbanState));
}

window.addEventListener('load', () => {
  const savedState = JSON.parse(localStorage.getItem('kanban'));
  if (savedState) {
    for (const [columnId, tasks] of Object.entries(savedState)) {
      const column = document.getElementById(columnId);
      tasks.forEach(taskText => {
        const task = document.createElement('div');
        task.classList.add('task');
        task.setAttribute('draggable', 'true');
        task.textContent = taskText;
        column.appendChild(task);
      });
    }
  }
});
