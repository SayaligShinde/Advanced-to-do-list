# 📝 Advanced To-Do List Web Application

A full-stack **Advanced To-Do List Web Application** built using **HTML, CSS, JavaScript, PHP, and MySQL**.  
This project demonstrates modern web development concepts including authentication, drag-and-drop UI, analytics, and persistent storage.

---

## 🚀 Features

- 🔐 Session-based user authentication  
- ➕ Add, update, and delete tasks  
- ✔ Mark tasks as completed  
- 🗂 Drag & Drop tasks to reorder  
- 🌙 Dark mode toggle  
- 📊 Task analytics (Completed vs Pending) using Chart.js  
- 💾 Data persistence with MySQL  
- 📱 Responsive and user-friendly UI  

---

## 🛠️ Tech Stack

**Frontend**
- HTML5  
- CSS3  
- JavaScript (ES6)  
- Chart.js  

**Backend**
- PHP (MySQLi, Sessions)  
- MySQL  

**Tools**
- XAMPP  
- VS Code  
- MySQL Workbench / phpMyAdmin  
- GitHub  

---

## 📁 Project Structure

Advanced-to-do-list/

- ->index.html
- ->login.html
- ->style.css
- ->script.js

- ->config.php
- ->login.php
- ->fetch_task.php
- ->add_task.php
- ->update_task.php
- ->delete_task.php

---

##⚙️ Installation & Setup

1️⃣ Prerequisites
Install XAMPP
Start Apache and MySQL

2️⃣ Clone the Repository
git clone https://github.com/your-username/advanced-to-do-list.git

Move the folder to:
C:\xampp\htdocs\

3️⃣ Create the Database
Open phpMyAdmin
Create a database named advanced_todo
Run the SQL queries provided above

4️⃣ Configure Database Connection
Edit config.php:
$conn = new mysqli("localhost", "todo_user", "todo123", "advanced_todo");

5️⃣ Run the Application
Open your browser and go to:
http://localhost/Advanced-to-do-list/login.html
