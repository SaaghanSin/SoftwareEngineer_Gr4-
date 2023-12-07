<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('DBconnect.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="POST")
{
    global $conn;
    $MaMayIn = isset($_POST["MaMayIn"]) ? $_POST["MaMayIn"] : null;
    $CoSo = isset($_POST["CoSo"]) ? $_POST["CoSo"] : null;
    $Toa = isset($_POST["Toa"]) ? $_POST["Toa"] : null;
    $LoaiMayIn = isset($_POST["LoaiMayIn"]) ? $_POST["LoaiMayIn"] : null;
    $TrangThaiHoatDong = isset($_POST["TrangThaiHoatDong"]) ? $_POST["TrangThaiHoatDong"] : null;

    $MaMayIn1 = isset($MaMayIn) ? mysqli_real_escape_string($conn, $MaMayIn) : '';
    $CoSo1 = isset($CoSo) ? mysqli_real_escape_string($conn, $CoSo) : '';
    $Toa1 = isset($Toa) ? mysqli_real_escape_string($conn, $Toa) : '';
    $LoaiMayIn1 = isset($LoaiMayIn) ? mysqli_real_escape_string($conn, $LoaiMayIn) : '';
    $TrangThaiHoatDong1 = isset($TrangThaiHoatDong) ? mysqli_real_escape_string($conn, $TrangThaiHoatDong) : '';

    $query ="INSERT INTO may_in (MaMayIn,CoSo,Toa,LoaiMayIn,TrangThaiHoatDong) values ('$MaMayIn1','$CoSo1','$Toa1','$LoaiMayIn1','$TrangThaiHoatDong1')";
    $query_run=mysqli_query($conn,$query);
    // $data = json_decode(file_get_contents("php://input"), true);
    // $MaMayIn = isset($data["MaMayIn"]) ? mysqli_real_escape_string($conn, $data["MaMayIn"]) : '';
    // $CoSo = isset($data["CoSo"]) ? mysqli_real_escape_string($conn, $data["CoSo"]) : '';
    // $Toa = isset($data["Toa"]) ? mysqli_real_escape_string($conn, $data["Toa"]) : '';
    // $LoaiMayIn = isset($data["LoaiMayIn"]) ? mysqli_real_escape_string($conn, $data["LoaiMayIn"]) : '';
    // $TrangThaiHoatDong = isset($data["TrangThaiHoatDong"]) ? mysqli_real_escape_string($conn, $data["TrangThaiHoatDong"]) : '';

    // $query = "INSERT INTO may_in (MaMayIn, CoSo, Toa, LoaiMayIn, TrangThaiHoatDong) VALUES ('$MaMayIn', '$CoSo', '$Toa', '$LoaiMayIn', '$TrangThaiHoatDong')";
    // $query_run = mysqli_query($conn, $query);
    if ($query_run)
    {
        $data =['message'=> 'Create successfully',];
        header("HTTP/1.0 Create successfully");
        echo json_encode($data);
    }
}
else {
    $data =[
        'message'=>$requestmethod. ' Method not allow',
    ];
    header("HTTP/1.0 method not allowed");
    echo json_encode(($data));
}

?>