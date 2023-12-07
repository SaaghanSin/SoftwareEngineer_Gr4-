<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('Dbconnect.php');

$requestmethod = $_SERVER["REQUEST_METHOD"];

if ($requestmethod == "GET") {
    global $conn;
    $TenDangNhap = isset($_GET['TenDangNhap']) ? mysqli_real_escape_string($conn, $_GET['TenDangNhap']) : '';
    $query = "SELECT NgayMuaGiay, GioMuaGiay, TongSoTienThanhToan, SoTrangMua, PhuongThucThanhToan FROM sv_lichsumuagiay WHERE TenDangNhap='$TenDangNhap'";
    $query_run = mysqli_query($conn, $query);

    if ($query_run) {
        $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
        header("HTTP/1.0 200 OK");
        echo json_encode($res);
    } else {
        $data = [
            'message' => 'Unsuccessfully',
        ];
        header("HTTP/1.0 500 Internal Server Error");
        echo json_encode($data);
    }
} else {
    $data = [
        'message' => $requestmethod . ' Method not allowed',
    ];
    header("HTTP/1.0 405 Method Not Allowed");
    echo json_encode($data);
}
