const form = document.querySelector("form");
const input = document.querySelector("input");
const taskDisplay = document.getElementById("task-display");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskText = input.value.trim();

  if (taskText === "") return;

  // Create task element
  const task = document.createElement("div");
  task.classList.add("task");

  const taskContent = document.createElement("span");
  taskContent.textContent = taskText;

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = "✔";

  completeBtn.addEventListener("click", () => {
    task.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML = "✕";

  deleteBtn.addEventListener("click", () => {
    task.remove();
  });

  task.appendChild(taskContent);
  task.appendChild(completeBtn);
  task.appendChild(deleteBtn);
  taskDisplay.appendChild(task);

  input.value = "";
});
