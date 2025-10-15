<?php
// Webhook pentru deployment automat de la GitHub
// Configurare
$secret = 'your-webhook-secret-key'; // Schimbă cu o cheie secretă
$repo_path = '/home/username/peak-tech-srl'; // Path-ul unde vei clona repo-ul
$public_path = '/home/username/public_html'; // Path-ul către public_html

// Verifică dacă request-ul vine de la GitHub
function verify_webhook($data, $signature, $secret) {
    $expected_signature = hash_hmac('sha256', $data, $secret, false);
    return hash_equals("sha256=".$expected_signature, $signature);
}

// Logare pentru debugging
function log_message($message) {
    $log = date('Y-m-d H:i:s') . " - " . $message . "\n";
    file_put_contents('deploy.log', $log, FILE_APPEND | LOCK_EX);
}

// Verifică metoda HTTP
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    die('Method Not Allowed');
}

// Obține datele
$payload = file_get_contents('php://input');
$signature = $_SERVER['HTTP_X_HUB_SIGNATURE_256'] ?? '';

// Verifică semnătura (opțional, pentru securitate)
if (!empty($secret) && !verify_webhook($payload, $signature, $secret)) {
    http_response_code(401);
    log_message('Unauthorized webhook attempt');
    die('Unauthorized');
}

// Decodează payload-ul
$data = json_decode($payload, true);

// Verifică dacă push-ul este pe branch-ul main
if ($data['ref'] !== 'refs/heads/main') {
    log_message('Push pe alt branch: ' . $data['ref']);
    die('Not main branch');
}

log_message('Webhook primit pentru main branch');

// Comenzile de deployment
$commands = [
    "cd $repo_path",
    "git pull origin main 2>&1",
    "npm ci 2>&1",
    "npm run export 2>&1",
    "rm -rf $public_path/*",
    "cp -r out/* $public_path/",
    "echo 'Deployment completed at " . date('Y-m-d H:i:s') . "'"
];

// Execută comenzile
$output = [];
foreach ($commands as $command) {
    log_message("Executing: $command");
    exec($command, $command_output, $return_code);
    $output[] = "Command: $command";
    $output[] = "Output: " . implode("\n", $command_output);
    $output[] = "Return code: $return_code";
    $output[] = "---";
    
    if ($return_code !== 0) {
        log_message("Command failed: $command");
        break;
    }
}

log_message('Deployment process completed');

// Răspunde cu succes
http_response_code(200);
echo json_encode([
    'status' => 'success',
    'message' => 'Deployment completed',
    'timestamp' => date('Y-m-d H:i:s')
]);
?>
