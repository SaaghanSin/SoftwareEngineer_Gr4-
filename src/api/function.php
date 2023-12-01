<?php
header("Content-Type: application/json");

// Database connection details
include('Dbconnect.php');
function addPrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=pg_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=pg_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=pg_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=pg_escape_string($conn, $PrinterInput['LoaiMayIn']);
    $TrangThaiHoatDong=pg_escape_string($conn, $PrinterInput['TrangThaiHoatDong']);

    $query ="INSERT INTO may_in (MaMayIn,CoSo,Toa,LoaiMayIn,TrangThaiHoatDong) values ('$MaMayIn','$CoSo','$Toa','$LoaiMayIn','$TrangThaiHoatDong')";
    $query_run=pg_exec($conn,$query);
    if ($query_run)
    {
        $data =[
            'status'=>201,
            'message'=> 'Create successfully',
        ];
        header("HTTP/1.0 Create successfully");
        return json_encode($data);
    }
}

function deletePrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=pg_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=pg_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=pg_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=pg_escape_string($conn, $PrinterInput['LoaiMayIn']);
    $TrangThaiHoatDong=pg_escape_string($conn, $PrinterInput['TrangThaiHoatDong']);

    $query ="DELETE FROM may_in where ('$MaMayIn'=MaMayIn and'$CoSo'=CoSo and '$Toa'=Toa and'$LoaiMayIn'=LoaiMayIn and'$TrangThaiHoatDong'=TrangThaiHoatDong)";
    $query_run=pg_exec($conn,$query);
    if ($query_run)
    {
        $data =[
            'status'=>201,
            'message'=> 'Delete successfully',
        ];
        header("HTTP/1.0 Delete successfully");
        return json_encode($data);
    }
}

function getPrinterlist()
{
    global $conn;
    $query ="SELECT * FROM may_in";
    $query_run=pg_exec($conn,$query);
    if ($query_run)
    {
        $res = pg_fetch_all($query_run, PGSQL_ASSOC);
        $data =[
            'status'=>405,
            'message'=> 'Method allow',
            'data'=>$res,
        ];
        header("HTTP/1.0 Successfully");
        return json_encode($data);
    }
    else {
        $data =[
            'status'=>405,
            'message'=> 'Method not allow',
        ];
        header("HTTP/1.0 method not allowed");
        echo json_encode(($data));
    }
}

function UpdateOnPrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=pg_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=pg_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=pg_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=pg_escape_string($conn, $PrinterInput['LoaiMayIn']);

    $query ="UPDATE may_in set TrangThaiHoatDong='on' where ('$MaMayIn'=MaMayIn and'$CoSo'=CoSo and '$Toa'=Toa and'$LoaiMayIn'=LoaiMayIn )";
    $query_run=pg_exec($conn,$query);
    if ($query_run)
    {
        $data =[
            'status'=>201,
            'message'=> 'Update successfully',
        ];
        header("HTTP/1.0 Update successfully");
        return json_encode($data);
    }
}

function UpdateOffPrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=pg_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=pg_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=pg_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=pg_escape_string($conn, $PrinterInput['LoaiMayIn']);

    $query ="UPDATE may_in set TrangThaiHoatDong='off' where ('$MaMayIn'=MaMayIn and'$CoSo'=CoSo and '$Toa'=Toa and'$LoaiMayIn'=LoaiMayIn )";
    $query_run=pg_exec($conn,$query);
    if ($query_run)
    {
        $data =[
            'status'=>201,
            'message'=> 'Update successfully',
        ];
        header("HTTP/1.0 Update successfully");
        return json_encode($data);
    }
}

?>

?>

