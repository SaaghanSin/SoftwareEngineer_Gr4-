<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: pplication/json');
header('Access-Control-Allow-Method: GET');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-request-With');
include('function.php');
$requestmethod=$_SERVER["REQUEST_METHOD"];
if ($requestmethod=="GET")
{
    $printerList=getPrinterlist();
    echo $printerList;
}
else {
    $data =[
        'message'=>$requestmethod. 'Method not allow',
    ];
    header("HTTP/1.0 method not allowed");
    echo json_encode(($data));
}

?>
