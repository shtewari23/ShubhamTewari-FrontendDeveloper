<?php
// Check for authorization header
$authorizationHeader = $_SERVER['HTTP_AUTHORIZATION'] ?? '';

// Validate the authorization header (You should replace 'your_secret_key' with your actual secret key)
$validToken = 'ABC123';
error_log('Authorization Header: ' . $authorizationHeader);
error_log('Valid Token: ' . $validToken);
if ($authorizationHeader !== $validToken) {
    http_response_code(401); // Unauthorized
    exit;
}

// API logic
$data = [
    'capsules' => [
        // Your data fetching logic here
        // Example data:
        ['name' => 'Dragon 1', 'type' => 'capsule'],
        ['name' => 'Crew Dragon', 'type' => 'capsule'],
    ],
];

// Respond with JSON
header('Content-Type: application/json');
echo json_encode($data);
?>
