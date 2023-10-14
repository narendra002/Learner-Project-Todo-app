// Select elements
const input = document.querySelector('.todo');
const addButton = document.querySelector('.add');
const taskList = document.querySelector('ul');

// Add task
addButton.addEventListener('click', () => {
  const taskText = input.value;
  if (taskText.trim() === '') {
    alert('Please enter a task.');
    return;
  }

  const taskItem = document.createElement('li');
  taskItem.className =
    'flex justify-between items-center p-2 border-b';

  const taskTextSpan = document.createElement('span');
  taskTextSpan.textContent = taskText;

  const deleteButton = document.createElement('button');
  deleteButton.className = 'text-red-500 delete';
  deleteButton.textContent = 'Delete';

  taskItem.appendChild(taskTextSpan);
  taskItem.appendChild(deleteButton);

  taskList.appendChild(taskItem);

  // Clear input field
  input.value = '';
});

// Remove task
taskList.addEventListener('click', (e) => {
  if (e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
  }
});
