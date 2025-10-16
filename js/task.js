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
  completeBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24"><path fill="#1bae00" fill-rule="evenodd" d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11M7 13l1.5-1.5l2 2l5-5L17 10l-6.5 6.5z" clip-rule="evenodd"/></svg>';

  completeBtn.addEventListener("click", () => {
    task.classList.toggle("completed");
  });

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");
  deleteBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 24 24"><path fill="#ae0000" d="M12 4c-4.419 0-8 3.582-8 8s3.581 8 8 8s8-3.582 8-8s-3.581-8-8-8m3.707 10.293a.999.999 0 1 1-1.414 1.414L12 13.414l-2.293 2.293a.997.997 0 0 1-1.414 0a1 1 0 0 1 0-1.414L10.586 12L8.293 9.707a.999.999 0 1 1 1.414-1.414L12 10.586l2.293-2.293a.999.999 0 1 1 1.414 1.414L13.414 12z"/></svg>';

  deleteBtn.addEventListener("click", () => {
    task.remove();
  });

  task.appendChild(taskContent);
  task.appendChild(completeBtn);
  task.appendChild(deleteBtn);
  taskDisplay.appendChild(task);

  input.value = "";
});
