document.addEventListener("DOMContentLoaded", () => {
  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("create-task-form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission

        addTask();
    });
});

function addTask() {
    const taskDescription = document.getElementById("new-task-description").value.trim();

    if (!taskDescription) {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("tasks");
    const li = document.createElement("li");
    li.innerHTML = ${taskDescription} <button class="delete-btn" onclick="deleteTask(this)">Delete</button>;

    taskList.appendChild(li);

    // Clear input field
    document.getElementById("new-task-description").value = "";
}

function deleteTask(button) {
    button.parentElement.remove();
}
});

