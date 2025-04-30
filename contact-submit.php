<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = ""; // No space — just empty string
$dbname = "infynix";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Get form data safely
$name = $_POST['name'] ?? '';
$email = $_POST['email'] ?? '';
$phone = $_POST['phone'] ?? '';
$subject = $_POST['subject'] ?? '';
$message = $_POST['message'] ?? '';

// Insert into database
$sql = "INSERT INTO contact_messages (name, email, phone, subject, message)
        VALUES ('$name', '$email', '$phone', '$subject', '$message')";

if ($conn->query($sql) === TRUE) {
  echo "Message sent successfully!";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
