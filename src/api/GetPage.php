<?php
include('Dbconnect.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

$requestmethod = $_SERVER["REQUEST_METHOD"];

if ($requestmethod == "GET") {
    global $conn;

    // Assuming you pass TenDangNhap as a query parameter in the URL
    $TenDangNhap = isset($_GET['TenDangNhap']) ? mysqli_real_escape_string($conn, $_GET['TenDangNhap']) : '';

    if (!empty($TenDangNhap)) {
        $query = "SELECT SoTrangSoHuu FROM sinh_vien WHERE TenDangNhap='$TenDangNhap' LIMIT 1";
        $query_run = mysqli_query($conn, $query);

        if ($query_run) {
            // Fetch the first row as an associative array
            $res = mysqli_fetch_assoc($query_run);

            if ($res) {
                $data = [
                    'success' => true,
                    'data' => $res
                ];
                header("HTTP/1.0 200 OK");
                echo json_encode($data);
            } else {
                $data = [
                    'success' => false,
                    'message' => 'No data found for the given username',
                ];
                header("HTTP/1.0 404 Not Found");
                echo json_encode($data);
            }
        } else {
            $data = [
                'success' => false,
                'message' => 'Unsuccessfully',
            ];
            header("HTTP/1.0 500 Internal Server Error");
            echo json_encode($data);
        }
    } else {
        $data = [
            'success' => false,
            'message' => 'TenDangNhap parameter is missing',
        ];
        header("HTTP/1.0 400 Bad Request");
        echo json_encode($data);
    }
} else {
    $data = [
        'success' => false,
        'message' => $requestmethod . ' Method not allowed',
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
}
