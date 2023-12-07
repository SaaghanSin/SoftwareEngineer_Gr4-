<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('Dbconnect.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="PUT")
{
    global $conn;
    $MaMayIn = isset($_POST["MaMayIn"]) ? $_POST["MaMayIn"] : null;
    $CoSo = isset($_POST["CoSo"]) ? $_POST["CoSo"] : null;
    $Toa = isset($_POST["Toa"]) ? $_POST["Toa"] : null;
    $LoaiMayIn = isset($_POST["LoaiMayIn"]) ? $_POST["LoaiMayIn"] : null;

    $query ="UPDATE may_in set TrangThaiHoatDong='OFF' where ('$MaMayIn'=MaMayIn and'$CoSo'=CoSo and '$Toa'=Toa and'$LoaiMayIn'=LoaiMayIn )";
    $query_run=mysqli_query($conn,$query);
    if ($query_run)
    {
        $data =[
            'message'=> 'Update successfully',
        ];
        header("HTTP/1.0 Update successfully");
        return json_encode($data);
    }
    else
    {
        $data =[
            'message'=> 'Update unsuccessfully',
        ];
        header("HTTP/1.0 Update unsuccessfully");
        return json_encode($data);
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