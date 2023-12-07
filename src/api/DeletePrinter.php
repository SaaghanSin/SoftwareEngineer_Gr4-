<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');
header('Access-Control-Allow-Method: DELETE');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('Dbconnect.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="DELETE")
{
    global $conn;
    
    parse_str(file_get_contents("php://input"), $deleteData);
    $MaMayIn = $deleteData['MaMayIn'];
    // $CoSo = isset($_POST["CoSo"]) ? $_POST["CoSo"] : null;
    // $Toa = isset($_POST["Toa"]) ? $_POST["Toa"] : null;
    // $LoaiMayIn = isset($_POST["LoaiMayIn"]) ? $_POST["LoaiMayIn"] : null;
    // $TrangThaiHoatDong = isset($_POST["TrangThaiHoatDong"]) ? $_POST["TrangThaiHoatDong"] : null;

    $query ="DELETE FROM may_in WHERE MaMayIn='$MaMayIn' LIMIT 1 ";
    $query_run=mysqli_query($conn,$query);
    if ($query_run)
    {
        $data =[
            'message'=> 'Delete successfully',
        ];
        header("HTTP/1.0 Delete successfully");
        echo json_encode($data);
    }
    else
    {
        $data =[
            'message'=> 'Delete unsuccessfully',
        ];
        header("HTTP/1.0 Delete unsuccessfully");
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