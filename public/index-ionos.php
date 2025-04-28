
<?php
// Script spécifique à IONOS pour gérer les problèmes de MIME types
$requestUri = $_SERVER['REQUEST_URI'];
$fileExtension = pathinfo($requestUri, PATHINFO_EXTENSION);

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
    'svg' => 'image/svg+xml'
];

// Si c'est un fichier avec type MIME spécifique
if (isset($mimeTypes[$fileExtension])) {
    $filePath = __DIR__ . $requestUri;
    
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
}

// Pour XML spécifiquement (sitemap, etc.)
if ($fileExtension === 'xml') {
    include __DIR__ . '/xml-proxy.php';
    exit;
}

// Pour JS spécifiquement
if (in_array($fileExtension, ['js', 'mjs', 'jsx', 'tsx'])) {
    include __DIR__ . '/js-proxy.php';
    exit;
}

// Pour les routes SPA et autres fichiers HTML (index.html par défaut)
include __DIR__ . '/index.html';
?>
