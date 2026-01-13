let chart;
let draggedItem = null;

// 🌙 Dark mode
document.getElementById("themeToggle").onclick = () => {
    document.body.classList.toggle("dark");
};

// 🔄 Load tasks
function loadTasks() {
    fetch("fetch_task.php")
        .then(res => res.json())
        .then(tasks => {
            renderTasks(tasks);
            updateChart(tasks);
        });
}

// 🖼 Render tasks + drag & drop
function renderTasks(tasks) {
    const list = document.getElementById("taskList");
    list.innerHTML = "";

    tasks.forEach(task => {
        const li = document.createElement("li");
        li.draggable = true;
        li.dataset.id = task.id;

        if (task.completed == 1) li.classList.add("completed");

        li.innerHTML = `
            ${task.task} (${task.priority})
            <button onclick="toggleTask(${task.id})">✔</button>
            <button onclick="deleteTask(${task.id})">❌</button>
        `;

        // 🗂 Drag events
        li.addEventListener("dragstart", () => {
            draggedItem = li;
            li.classList.add("dragging");
        });

        li.addEventListener("dragend", () => {
            draggedItem = null;
            li.classList.remove("dragging");
        });

        li.addEventListener("dragover", e => {
            e.preventDefault();
            const bounding = li.getBoundingClientRect();
            const offset = bounding.y + bounding.height / 2;

            if (e.clientY - offset > 0) {
                li.after(draggedItem);
            } else {
                li.before(draggedItem);
            }
        });

        list.appendChild(li);
    });
}

// ➕ Add task
function addTask() {
    fetch("add_task.php", {
        method: "POST",
        body: new URLSearchParams({
            task: taskInput.value,
            priority: priority.value,
            due: dueDate.value
        })
    }).then(loadTasks);
}

// ✔ Toggle task
function toggleTask(id) {
    fetch("update_task.php", {
        method: "POST",
        body: new URLSearchParams({ id })
    }).then(loadTasks);
}

// ❌ Delete task
function deleteTask(id) {
    fetch("delete_task.php", {
        method: "POST",
        body: new URLSearchParams({ id })
    }).then(loadTasks);
}

// 📊 Chart
function updateChart(tasks) {
    const completed = tasks.filter(t => t.completed == 1).length;
    const pending = tasks.length - completed;

    if (chart) chart.destroy();

    chart = new Chart(taskChart, {
        type: "doughnut",
        data: {
            labels: ["Completed", "Pending"],
            datasets: [{
                data: [completed, pending],
                backgroundColor: ["#4CAF50", "#FF9800"]
            }]
        }
    });
}

// 🚪 Logout
function logout() {
    window.location.href = "login.html";
}

// ▶ Start app
loadTasks();
