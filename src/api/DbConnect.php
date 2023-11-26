<?php
$host = "localhost";
$port = "5432";
$dbname = "TempDB";
$user = "postgres";
$password = "0000";

// Connection string
$dsn = "host=$host port=$port dbname=$dbname user=$user password=$password";

// Connect to the PostgreSQL database
$conn = pg_connect($dsn);

// Check the connection
if (!$conn) {
    die("Connection failed: " . pg_last_error());
}

echo "Connected successfully";

// Perform database operations here


?>