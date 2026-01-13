<?php
include "config.php";

if (!isset($_SESSION['user_id'])) exit;

$task = $_POST['task'];
$priority = $_POST['priority'];
$due = $_POST['due'];

$stmt = $conn->prepare(
    "INSERT INTO tasks(user_id, task, priority, due_date, completed) VALUES(?,?,?,?,0)"
);
$stmt->bind_param("isss", $_SESSION['user_id'], $task, $priority, $due);
$stmt->execute();
?>
