<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('DbConnect.php');
$requestmethod = $_SERVER["REQUEST_METHOD"];
if ($requestmethod == "GET") {
    global $conn;
    $query = "SELECT * FROM may_in";
    $query_run = mysqli_query($conn, $query);
    if ($query_run) {
        $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
        $data =
            $res;
        header("HTTP/1.0 Successfully");
        echo json_encode(($data));
    } else {
        $data = [
            'message' => 'Unsuccessfully',
        ];
        header("HTTP/1.0 Unsuccessfully");
        echo json_encode(($data));
    }
} else {
    $data = [
        'message' => $requestmethod . 'Method not allow',
    ];
    header("HTTP/1.0 method not allowed");
    echo json_encode(($data));
}
