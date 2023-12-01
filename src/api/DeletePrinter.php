<?php

header('Access-Control-Allow-Origin: *');
header('Content-Type: pplication/json');
header('Access-Control-Allow-Method: DELETE');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('function.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="DELETE")
{
    $deletePrinter=json_decode(file_get_contents("php://input"));
    if (empty($deletePrinter)){
        $storePrinter= deletePrinter($_POST);
    }
    else $storePrinter= deletePrinter($deletePrinter);
    echo $storePrinter;
}
else {
    $data =[
        'status'=>405,
        'message'=>$requestmethod. ' Method not allow',
    ];
    header("HTTP/1.0 method not allowed");
    echo json_encode(($data));
}

?>