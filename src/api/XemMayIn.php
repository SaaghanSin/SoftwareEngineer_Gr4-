<?php
header("Content-Type: application/json");

// Database connection details
include('Dbconnect.php');
try {

    // Prepare and execute the SQL statement
    $stmt = $pdo->prepare("SELECT * FROM may_in");
    $stmt->execute();

    // Fetch the result as an associative array
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
    echo json_encode($result);
} catch (PDOException $e) {
    echo json_encode(['error']);
}
?>