<?php
header("Content-Type: application/json");

// Database connection details
include('Dbconnect.php');
try {

    $a1 = isset($_GET['a1']) ? $_GET['a1'] : null;
    $a2 = isset($_GET['a2']) ? $_GET['a2'] : null;
    $a3 = isset($_GET['a3']) ? $_GET['a3'] : null;
    $a4 = isset($_GET['a4']) ? $_GET['a4'] : null;

    // Check if user ID is provided
    if ($a1&&$a2&&$$a3&&$a4&&$a5) {
        // Prepare the SQL statement to call the stored procedure
        $stmt = $pdo->prepare("CALL cap_nhat_may_in_OFF(a1,a2,a3,a4)");

        // Bind parameters
        $stmt->bindParam(':userId', $userId, PDO::PARAM_INT);

        // Execute the stored procedure
        $stmt->execute();

        // Fetch the result
        $result = $stmt->fetch(PDO::FETCH_ASSOC);

        // Return the result as JSON
        echo json_encode($result);
    } else {
        echo json_encode(['error']);
    }
} catch (PDOException $e) {
    echo json_encode(['error']);
}
?>