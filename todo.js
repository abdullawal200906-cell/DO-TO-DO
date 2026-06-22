// 1. Grab HTML items and store them in const variables
const taskInput = document.getElementById("taskInput");
const pressmeBtn = document.getElementById("pressmeBtn");
const taskList = document.getElementById("taskList");

// 2. Add event listener to listen for the button click
pressmeBtn.onclick = function () {
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("waiting,please types something meaningful");
        return;
    }

    // 3. Create elements dynamically
    const li = document.createElement("li");
    li.textContent = taskText;

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.classList.add("delete-btn");

    // 4. Set up the delete button logic
    deleteBtn.onclick = function () {
        li.remove();
    };

    // 5. Append (inject) elements to the document layout
    li.appendChild(deleteBtn);
    taskList.appendChild(li);

    // 6. Reset value of the input box
    taskInput.value = "";
};