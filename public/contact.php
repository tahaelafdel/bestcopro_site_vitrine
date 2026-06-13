<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=UTF-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

$rawInput = file_get_contents('php://input');
$data = json_decode($rawInput ?: '', true);

if (!is_array($data)) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid request']);
    exit;
}

$fullName = trim((string)($data['fullName'] ?? ''));
$email = trim((string)($data['email'] ?? ''));
$phone = trim((string)($data['phone'] ?? ''));
$message = trim((string)($data['message'] ?? ''));
$website = trim((string)($data['website'] ?? ''));

if ($website !== '') {
    echo json_encode(['success' => true]);
    exit;
}

if ($fullName === '' || $email === '' || $phone === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => 'Required fields are missing or invalid']);
    exit;
}

$recipient = 'contact@bestcopro.ma';
$subject = 'Nouvelle demande de contact - BEST COPRO';
$safeName = str_replace(["\r", "\n"], ' ', $fullName);
$safeEmail = str_replace(["\r", "\n"], ' ', $email);

$bodyLines = [
    'Nouvelle demande depuis le site BEST COPRO',
    '',
    'Nom complet: ' . $fullName,
    'Email: ' . $email,
    'Telephone: ' . $phone,
    '',
    'Message:',
    $message !== '' ? $message : 'Aucun message precise.',
    '',
    'Date: ' . date('Y-m-d H:i:s'),
    'IP: ' . ($_SERVER['REMOTE_ADDR'] ?? 'unknown'),
];

$headers = [
    'From: BEST COPRO <no-reply@bestcopro.ma>',
    'Reply-To: ' . $safeName . ' <' . $safeEmail . '>',
    'Content-Type: text/plain; charset=UTF-8',
];

$sent = mail($recipient, $subject, implode("\n", $bodyLines), implode("\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Email could not be sent']);
    exit;
}

echo json_encode(['success' => true]);
