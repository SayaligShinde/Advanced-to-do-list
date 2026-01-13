<?php
$conn = new mysqli("localhost", "todo_user", "todo123", "advanced_todo");
$conn->set_charset("utf8mb4");

if ($conn->connect_error) {
    die("DB Connection Failed: " . $conn->connect_error);
}

session_start();
?>
