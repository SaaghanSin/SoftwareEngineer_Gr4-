<?php
header("Content-Type: application/json");

// Database connection details
include('Dbconnect.php');
function addPrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=mysqli_real_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=mysqli_real_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=mysqli_real_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=mysqli_real_escape_string($conn, $PrinterInput['LoaiMayIn']);
    $TrangThaiHoatDong=mysqli_real_escape_string($conn, $PrinterInput['TrangThaiHoatDong']);

    $query ="INSERT INTO may_in (MaMayIn,CoSo,Toa,LoaiMayIn,TrangThaiHoatDong) values ('$MaMayIn','$CoSo','$Toa','$LoaiMayIn','$TrangThaiHoatDong')";
    $query_run=mysqli_query($conn,$query);
    if ($query_run)
    {
        $data =[
            'message'=> 'Create successfully',
        ];
        header("HTTP/1.0 Create successfully");
        return json_encode($data);
    }
}

function deletePrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=mysqli_real_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=mysqli_real_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=mysqli_real_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=mysqli_real_escape_string($conn, $PrinterInput['LoaiMayIn']);
    $TrangThaiHoatDong=mysqli_real_escape_string($conn, $PrinterInput['TrangThaiHoatDong']);

    $query ="DELETE FROM may_in where ('$MaMayIn'=MaMayIn and'$CoSo'=CoSo and '$Toa'=Toa and'$LoaiMayIn'=LoaiMayIn and'$TrangThaiHoatDong'=TrangThaiHoatDong)";
    $query_run=mysqli_query($conn,$query);
    if ($query_run)
    {
        $data =[
            'message'=> 'Delete successfully',
        ];
        header("HTTP/1.0 Delete successfully");
        return json_encode($data);
    }
    else
    {
        $data =[
            'message'=> 'Delete unsuccessfully',
        ];
        header("HTTP/1.0 Delete unsuccessfully");
        return json_encode($data);
    }
}

function getPrinterlist()
{
    global $conn;
    $query ="SELECT * FROM may_in";
    $query_run=mysqli_query($conn,$query);
    if ($query_run)
    {
        $res = mysqli_fetch_all($query_run, MYSQLI_ASSOC);
        $data =[
            'data'=>$res,
        ];
        header("HTTP/1.0 Successfully");
        return json_encode($data);
    }
    else {
        $data =[
            'message'=> 'Unsuccessfully',
        ];
        header("HTTP/1.0 Unsuccessfully");
        echo json_encode(($data));
    }
}

function UpdateOnPrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=mysqli_real_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=mysqli_real_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=mysqli_real_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=mysqli_real_escape_string($conn, $PrinterInput['LoaiMayIn']);

    $query ="UPDATE may_in set TrangThaiHoatDong='on' where ('$MaMayIn'=MaMayIn and'$CoSo'=CoSo and '$Toa'=Toa and'$LoaiMayIn'=LoaiMayIn )";
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

function UpdateOffPrinter($PrinterInput)
{
    global $conn;
    $MaMayIn=mysqli_real_escape_string($conn, $PrinterInput['MaMayIn']);
    $CoSo=mysqli_real_escape_string($conn, $PrinterInput['CoSo']);
    $Toa=mysqli_real_escape_string($conn, $PrinterInput['Toa']);
    $LoaiMayIn=mysqli_real_escape_string($conn, $PrinterInput['LoaiMayIn']);

    $query ="UPDATE may_in set TrangThaiHoatDong='off' where ('$MaMayIn'=MaMayIn and'$CoSo'=CoSo and '$Toa'=Toa and'$LoaiMayIn'=LoaiMayIn )";
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

function studentcheck($studentInPut)
{
    global $conn;
    $TenDangNhap=mysqli_real_escape_string($conn, $studentInPut['TenDangNhap']);
    $MatKhau=mysqli_real_escape_string($conn, $studentInPut['MatKhau']);

    $query ="SELECT * FROM (`sinh_vien` JOIN `tai_khoan` ON `sinh_vien`.`TenDangNhap`=`tai_khoan`.`TenDangNhap`) WHERE (`tai_khoan`.`TenDangNhap`='$TenDangNhap' AND `tai_khoan`.`MatKhau`='$MatKhau');";
    $query_run=mysqli_query($conn,$query);
    if(mysqli_num_rows($query_run) == 1){
        $data =[
            'message'=> 'Login successfully',
        ];
        header("HTTP/1.0 Update successfully");
        return json_encode($data);
    }
    else
    {
        $data =[
            'message'=> 'Login unsuccessfully',
        ];
        header("HTTP/1.0 Update unsuccessfully");
        return json_encode($data);
    }
}


function SPSOcheck($SPSOInPut)
{
    global $conn;
    $TenDangNhap=mysqli_real_escape_string($conn, $SPSOInPut['TenDangNhap']);
    $MatKhau=mysqli_real_escape_string($conn, $SPSOInPut['MatKhau']);

    $query ="SELECT * FROM (`spso` JOIN `tai_khoan` ON `spso`.`TenDangNhap`=`tai_khoan`.`TenDangNhap`) WHERE (`tai_khoan`.`TenDangNhap`='$TenDangNhap' AND `tai_khoan`.`MatKhau`='$MatKhau');";
    $query_run=mysqli_query($conn,$query);
    if(mysqli_num_rows($query_run) == 1){
        $data =[
            'message'=> 'Login successfully',
        ];
        header("HTTP/1.0 Update successfully");
        return json_encode($data);
    }
    else
    {
        $data =[
            'message'=> 'Login unsuccessfully',
        ];
        header("HTTP/1.0 Update unsuccessfully");
        return json_encode($data);
    }
}

?>


