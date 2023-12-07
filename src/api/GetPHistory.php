<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');

include('DbConnect.php');

$requestMethod = $_SERVER["REQUEST_METHOD"];

if ($requestMethod == "GET") {
    global $conn;

    $tenDangNhap = isset($_GET['TenDangNhap']) ? mysqli_real_escape_string($conn, $_GET['TenDangNhap']) : '';
    $query = "SELECT MaMayIn, TenFile, TrangThai, NgayIn, SoTrangTrongFile, SoBanIn FROM hoa_don WHERE TenDangNhap='$tenDangNhap'";
    $queryRun = mysqli_query($conn, $query);

    if ($queryRun) {
        $data = mysqli_fetch_all($queryRun, MYSQLI_ASSOC);
        $response = [
            'status' => 'success',
            'data' => $data,
        ];
        header("HTTP/1.0 200 OK");
        echo json_encode($response);
    } else {
        $response = [
            'status' => 'error',
            'message' => 'Unsuccessful: ' . mysqli_error($conn),
        ];
        header("HTTP/1.0 500 Internal Server Error");
        echo json_encode($response);
    }
} else {
    $response = [
        'status' => 'error',
        'message' => $requestMethod . ' method not allowed',
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($response);
}
