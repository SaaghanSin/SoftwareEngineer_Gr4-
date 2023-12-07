<?php
include('Dbconnect.php');

header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: PUT');
header('Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With');

// Define $requestMethod
$requestMethod = $_SERVER["REQUEST_METHOD"];

function updatePageNumber($username, $pageNumber)
{
    global $conn;
    $TenDangNhap = isset($username) ? mysqli_real_escape_string($conn, $username) : '';
    $SoTrangSoHuu = isset($pageNumber) ? mysqli_real_escape_string($conn, $pageNumber) : '';

    if (!empty($TenDangNhap) && !empty($SoTrangSoHuu)) {
        $query = "UPDATE `sinh_vien` SET `SoTrangSoHuu` = $SoTrangSoHuu WHERE `TenDangNhap` = '$TenDangNhap'";
        $queryRun = mysqli_query($conn, $query);

        if ($queryRun) {
            return ['success' => true, 'message' => 'Page number updated successfully'];
        } else {
            return ['success' => false, 'message' => 'Failed to update page number 2222'];
        }
    } else {
        return [
            'success' => false,
            'message' => 'Invalid parameters',
            'username' => $TenDangNhap,
            'pageNumber' => $SoTrangSoHuu
        ];
    }
}

if ($requestMethod == "PUT") {
    // Parse raw PUT data
    $putData = file_get_contents("php://input");
    $putDataArray = json_decode($putData, true);
    $TenDangNhap = $putDataArray['TenDangNhap'] ?? '';
    $SoTrangSoHuu = $putDataArray['SoTrangSoHuu'] ?? 0;

    // Update page number
    $isUpdateSuccessful = updatePageNumber($TenDangNhap, $SoTrangSoHuu);
    $responseData = $isUpdateSuccessful;
} else {
    $responseData = ['success' => false, 'message' => $requestMethod . ' Method not allowed'];
}

header('Content-Type: application/json');
echo json_encode($responseData);
