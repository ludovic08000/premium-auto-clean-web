
<?php
// Script amélioré pour IONOS - à renommer en index.php sur l'hébergement
// Gère tous les problèmes de MIME types en servant les fichiers via PHP

// Activer le débogage - à commenter en production
$debug = isset($_GET['debug']) ? true : false;

// Définir les types MIME par extension
$mimeTypes = [
    'js' => 'application/javascript',
    'mjs' => 'application/javascript',
    'jsx' => 'application/javascript',
    'tsx' => 'application/javascript',
    'xml' => 'text/xml',
    'html' => 'text/html',
    'css' => 'text/css',
    'json' => 'application/json',
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'gif' => 'image/gif',
    'svg' => 'image/svg+xml',
    'woff' => 'font/woff',
    'woff2' => 'font/woff2',
    'ttf' => 'font/ttf',
    'eot' => 'application/vnd.ms-fontobject'
];

// Récupérer l'URI demandée et nettoyer
$requestUri = $_SERVER['REQUEST_URI'];
$requestPath = parse_url($requestUri, PHP_URL_PATH);
$fileExtension = strtolower(pathinfo($requestPath, PATHINFO_EXTENSION));

// Gérer les requêtes CORS préliminaires (preflight)
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type, Authorization');
    header('Access-Control-Max-Age: 86400');
    exit(0);
}

// Debug mode
if ($debug) {
    header('Content-Type: text/plain');
    echo "URI demandée: " . $requestUri . "\n";
    echo "Chemin: " . $requestPath . "\n";
    echo "Extension: " . $fileExtension . "\n";
    echo "MIME attendu: " . (isset($mimeTypes[$fileExtension]) ? $mimeTypes[$fileExtension] : "non spécifié") . "\n";
    exit;
}

// Traitement spécial pour XML
if ($fileExtension === 'xml') {
    include __DIR__ . '/xml-proxy.php';
    exit;
}

// Traitement spécial pour JS
if (in_array($fileExtension, ['js', 'mjs', 'jsx', 'tsx'])) {
    include __DIR__ . '/js-proxy.php';
    exit;
}

// Traitement spécial pour cdn.gpteng.co
if (strpos($requestUri, 'gptengineer.js') !== false) {
    // Rediriger vers le proxy de script
    header('Location: https://cdn.gpteng.co/gptengineer.js');
    exit;
}

// Pour les autres types de fichiers connus
if (isset($mimeTypes[$fileExtension])) {
    $filePath = __DIR__ . $requestPath;
    
    // Si le fichier existe
    if (file_exists($filePath)) {
        // Définir le bon type MIME
        header('Content-Type: ' . $mimeTypes[$fileExtension]);
        header('Access-Control-Allow-Origin: *');
        header('Cache-Control: max-age=86400');
        
        // Envoyer le contenu
        readfile($filePath);
        exit;
    }
    
    // Chercher dans le dossier dist si le fichier n'est pas trouvé à la racine
    $distPath = __DIR__ . '/dist' . $requestPath;
    if (file_exists($distPath)) {
        // Définir le bon type MIME
        header('Content-Type: ' . $mimeTypes[$fileExtension]);
        header('Access-Control-Allow-Origin: *');
        header('Cache-Control: max-age=86400');
        
        // Envoyer le contenu
        readfile($distPath);
        exit;
    }
}

// Vérifier si c'est un fichier statique avec une autre extension
$filePath = __DIR__ . $requestPath;
if (file_exists($filePath) && is_file($filePath)) {
    // Servir le fichier avec un type MIME générique
    $finfo = finfo_open(FILEINFO_MIME_TYPE);
    $mime = finfo_file($finfo, $filePath);
    finfo_close($finfo);
    
    header('Content-Type: ' . $mime);
    header('Access-Control-Allow-Origin: *');
    readfile($filePath);
    exit;
}

// Pour tout autre cas, servir l'application SPA
include __DIR__ . '/index.html';
?>
