<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: pplication/json');
header('Access-Control-Allow-Method: PUT');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('function.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="PUT")
{
    $inputPrinter=json_decode(file_get_contents("php://input"));
    if (empty($inputPrinter)){
        $storePrinter= UpdateOnPrinter($_POST);
    }
    else $storePrinter= UpDateOnPrinter($inputPrinter);
    echo $storePrinter;
}
else {
    $data =[
        'message'=>$requestmethod. ' Method not allow',
    ];
    header("HTTP/1.0 method not allowed");
    echo json_encode(($data));
}

?>