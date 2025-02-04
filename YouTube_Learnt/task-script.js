const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

function addTask() {
  const taskValue = taskInput.value.trim();

  if (taskValue === "") {
    alert("Please enter a task");
    return;
  }

  // create a new task
  const li = document.createElement("li");

  // add task list
  li.textContent = taskValue;

  // add delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  // add delete functionality
  deleteBtn.addEventListener("click", function () {
    li.remove();
  });

  // add line-through
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  //append btn to delete list item
  li.appendChild(deleteBtn);

  // Add the list item to the task list
  taskList.appendChild(li);

  taskInput.value = "";
}
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});
