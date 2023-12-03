<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: pplication/json');
header('Access-Control-Allow-Method: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('function.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="POST")
{
    $inputPrinter=json_decode(file_get_contents("php://input"), true);
    if (empty($inputPrinter)){
        $storePrinter= addPrinter($_POST);
    }
    else $storePrinter= addPrinter($inputPrinter);
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