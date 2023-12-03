<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: pplication/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('function.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="POST")
{
    $inputSPSO=json_decode(file_get_contents("php://input"), true);
    if (empty($inputStu)){
        $storeSPSO= SPSOcheck($_POST);
    }
    else $storeSPSO= SPSOcheck($inputSPSO);
    echo $storeSPSO;
}
else {
    $data =[
        'message'=>$requestmethod. ' Method not allow',
    ];
    header("HTTP/1.0 method not allowed");
    echo json_encode(($data));
}

?>