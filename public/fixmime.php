
<?php
// Script pour corriger les problèmes de MIME type sur IONOS et autres hébergeurs
// Placer ce fichier à la racine du projet public

// Définir les types MIME corrects
$mimeTypes = [
    'js' => 'application/javascript',
    'mjs' => 'application/javascript',
    'jsx' => 'application/javascript',
    'tsx' => 'application/javascript',
    'css' => 'text/css',
    'html' => 'text/html',
    'json' => 'application/json',
    'svg' => 'image/svg+xml',
    'png' => 'image/png',
    'jpg' => 'image/jpeg',
    'jpeg' => 'image/jpeg',
    'gif' => 'image/gif',
    'woff' => 'font/woff',
    'woff2' => 'font/woff2'
];

// Obtenir le chemin de fichier demandé
$requestPath = isset($_GET['file']) ? $_GET['file'] : $_SERVER['REQUEST_URI'];
$extension = pathinfo($requestPath, PATHINFO_EXTENSION);

// Si c'est un fichier avec une extension reconnue, servir avec le bon type MIME
if (isset($mimeTypes[$extension])) {
    $filePath = __DIR__ . $requestPath;
    
    // Vérifier que le fichier existe
    if (file_exists($filePath)) {
        // Définir l'en-tête Content-Type approprié
        header('Content-Type: ' . $mimeTypes[$extension]);
        
        // En-têtes pour le support CORS
        header('Access-Control-Allow-Origin: *');
        header('Access-Control-Allow-Methods: GET, OPTIONS');
        header('Access-Control-Allow-Headers: Content-Type');
        
        // En-têtes de cache
        $cacheTime = ($extension === 'js' || $extension === 'jsx' || $extension === 'tsx' || $extension === 'mjs' || $extension === 'css') 
            ? 86400  // 1 jour pour JS et CSS
            : 604800; // 1 semaine pour autres
            
        header('Cache-Control: public, max-age=' . $cacheTime);
        header('Expires: ' . gmdate('D, d M Y H:i:s', time() + $cacheTime) . ' GMT');
        
        // Envoyer le contenu du fichier
        readfile($filePath);
        exit;
    }
}

// Si ce n'est pas un fichier que nous traitons spécifiquement ou si le fichier n'existe pas,
// renvoyer une erreur 404 ou rediriger vers index.html pour le SPA routing
if (strpos($requestPath, '.') === false) {
    // C'est probablement une route SPA, rediriger vers index.html
    include __DIR__ . '/index.html';
} else {
    // C'est un fichier qui n'existe pas, renvoyer 404
    header('HTTP/1.0 404 Not Found');
    echo '404 - Fichier non trouvé';
}
?>
