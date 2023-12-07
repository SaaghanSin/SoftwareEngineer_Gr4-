<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('function.php');

$requestmethod = $_SERVER["REQUEST_METHOD"];

// Log a message to indicate that the script is running
echo json_encode("Script is running...");

if ($requestmethod == "POST") {
    // Retrieve POST parameters
    $username = isset($_POST['username']) ? $_POST['username'] : null;
    $pwd = isset($_POST['pwd']) ? $_POST['pwd'] : null;

    // Create an associative array to hold the input data
    $inputStu = [
        'TenDangNhap' => $username,
        'MatKhau' => $pwd,
    ];

    // Log a message indicating the if flow
    echo json_encode("In the if flow...");

    $storeStu = studentcheck($inputStu['TenDangNhap'], $inputStu['MatKhau']);
    echo $storeStu;
} else {
    // Log a message indicating the else flow
    echo json_encode("In the else flow...");

    $data = [
        'message' => $requestmethod . ' Method not allowed',
    ];
    header("HTTP/1.0 method not allowed");
    echo json_encode($data);
}
?>
