<?php
header('Content-Type: application/json');

$filename = 'users.txt';
$users = [];

if (file_exists($filename)) {
    $lines = file($filename, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    foreach ($lines as $line) {
        list($username, $avatar) = explode('|', $line);
        $users[] = [
            'username' => trim($username),
            'avatar' => trim($avatar)
        ];
    }
}

echo json_encode($users);
?>