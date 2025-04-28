
<?php
// Script pour corriger les problèmes de MIME type sur IONOS
// Placer ce fichier à la racine du projet public

// Définir les types MIME corrects
$mimeTypes = [
    'js' => 'application/javascript',
    'mjs' => 'application/javascript',
    'css' => 'text/css',
    'html' => 'text/html',
    'json' => 'application/json'
];

// Obtenir le chemin de fichier demandé
$requestPath = $_SERVER['REQUEST_URI'];
$extension = pathinfo($requestPath, PATHINFO_EXTENSION);

// Si c'est un fichier JavaScript, servir avec le bon type MIME
if (isset($mimeTypes[$extension])) {
    $filePath = __DIR__ . $requestPath;
    
    // Vérifier que le fichier existe
    if (file_exists($filePath)) {
        // Définir l'en-tête Content-Type approprié
        header('Content-Type: ' . $mimeTypes[$extension]);
        
        // Désactiver la mise en cache pour le développement
        // En production, vous pouvez activer la mise en cache
        header('Cache-Control: no-store, no-cache, must-revalidate, max-age=0');
        header('Cache-Control: post-check=0, pre-check=0', false);
        header('Pragma: no-cache');
        
        // Envoyer le contenu du fichier
        readfile($filePath);
        exit;
    }
}

// Si ce n'est pas un fichier que nous traitons spécifiquement,
// laisser le serveur le gérer normalement
?>
