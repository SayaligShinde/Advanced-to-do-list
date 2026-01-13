<?php
include "config.php";

$id = $_POST['id'];

$stmt = $conn->prepare("UPDATE tasks SET completed = !completed WHERE id=?");
$stmt->bind_param("i", $id);
$stmt->execute();
?>
