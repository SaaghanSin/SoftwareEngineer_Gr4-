<?php
//Khai báo sử dụng session
session_start();
//Khai báo utf-8 để hiển thị được tiếng việt
header('Content-Type: text/html; charset=UTF-8');
//Xử lý đăng nhập
if (isset($_POST['login']))
{
//Kết nối tới database
include('Dbconnect.php');
  
//Lấy dữ liệu nhập vào
$username = addslashes($_POST['username']);
$password = addslashes($_POST['password']);
  

// mã hóa pasword
$password = md5($password);
  
//Kiểm tra tên đăng nhập có tồn tại không
$query = "SELECT MatKhau FROM TaiKhoan WHERE TenDangNhap='$username'";
$result = pg_query($connect, $query);

$query1 = "SELECT* FROM SinhVien WHERE TenDangNhap='$username'";
$result1 = pg_query($connect, $query1);

//Lấy mật khẩu trong database ra
$row = pg_fetch_array($result);

      
//So sánh 2 mật khẩu có trùng khớp hay không
if ($password != $row['password']||!$result||$result1) {
echo "Mật khẩu không đúng hoặc tài khoản sai ";
exit;
}
else echo "Đăng nhập thành công";
}
?>