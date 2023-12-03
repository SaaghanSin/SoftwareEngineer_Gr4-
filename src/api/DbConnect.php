<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname="cnpm";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Check the connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

echo "Connected successfully";

// Perform database operations here
