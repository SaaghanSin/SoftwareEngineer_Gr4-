<?php
// Include the database connection file
include('DbConnect.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

function generateToken($userId)
{
    $token = base64_encode(random_bytes(32));
    return $token;
}
function verifyLogin($username, $password)
{
    // Connect to the database

    global $conn;
    // Escape user inputs for security
    $TenDangNhap = isset($username) ? mysqli_real_escape_string($conn, $username) : '';
    $MatKhau = isset($password) ? mysqli_real_escape_string($conn, $password) : '';

    if (!empty($TenDangNhap) && !empty($MatKhau)) {
        $query = "SELECT * FROM `tai_khoan` WHERE `TenDangNhap`='$TenDangNhap' AND `MatKhau`='$MatKhau'";
        $result = mysqli_query($conn, $query);

        if ($result && mysqli_num_rows($result) > 0) {
            $userRow = mysqli_fetch_assoc($result);
            $userId = $userRow['UserId'];
            $token = generateToken($userId);

            // Return the token along with success status
            $querySPSO = "SELECT * FROM `spso` WHERE `TenDangNhap`='$TenDangNhap'";
            $resultSPSO = mysqli_query($conn, $querySPSO);

            if ($resultSPSO && mysqli_num_rows($resultSPSO) > 0) {
                return ['success' => true, 'token' => $token, 'type' => false];
            } else {
                return ['success' => true, 'token' => $token, 'type' => true];
            }
        } else {

            return ['success' => false];
        }
    } else {

        return ['success' => false];
    }
}
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the POST data
    $TenDangNhap = isset($_POST['TenDangNhap']) ? $_POST['TenDangNhap'] : null;
    $MatKhau = isset($_POST['MatKhau']) ? $_POST['MatKhau'] : null;
    $isLoginValid = verifyLogin($TenDangNhap, $MatKhau);
    $responseData = $isLoginValid;
    header('Content-Type: application/json');
    echo json_encode($responseData);
}
