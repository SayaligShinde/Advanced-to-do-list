<?php
include "config.php";

$username = trim($_POST['username']);
if ($username == "") exit;

$stmt = $conn->prepare("INSERT IGNORE INTO users(username) VALUES(?)");
$stmt->bind_param("s", $username);
$stmt->execute();

$stmt = $conn->prepare("SELECT id FROM users WHERE username=?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();
$user = $result->fetch_assoc();

$_SESSION['user_id'] = $user['id'];
?>
