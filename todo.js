document.addEventListener('DOMContentLoaded', function() {
    var taskInput = document.getElementById('taskInput');
    var addTaskBtn = document.getElementById('addTaskBtn');
    var taskList = document.getElementById('taskList');
    var errorDiv = document.getElementById('error');
  
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', editOrDeleteTask);
    
    function addTask() {
      var taskText = taskInput.value.trim();
      if (taskText === '') {
        displayError('Task cannot be empty!');
        return;
      }
      
      var listItem = document.createElement('li');
      listItem.innerHTML = '<span>' + taskText + '</span>' +
                           '<button class="editBtn">Edit</button>' +
                           '<button class="deleteBtn">Delete</button>';
      taskList.appendChild(listItem);
      
      taskInput.value = '';
      errorDiv.textContent = '';
    }
    
    function editOrDeleteTask(event) {
      if (event.target.classList.contains('editBtn')) {
        var taskItem = event.target.parentNode;
        var taskText = taskItem.querySelector('span').textContent;
        var newTaskText = prompt('Edit task:', taskText);
        if (newTaskText !== null && newTaskText.trim() !== '') {
          taskItem.querySelector('span').textContent = newTaskText.trim();
        }
      }
      else if (event.target.classList.contains('deleteBtn')) {
        var taskItem = event.target.parentNode;
        taskList.removeChild(taskItem);
      }
    }
    
    function displayError(message) {
      errorDiv.textContent = message;
    }
  });
  