
<?php
// Script amélioré pour gérer correctement les fichiers XML sur IONOS
header("Content-Type: text/xml; charset=utf-8");

// Récupérer le chemin du fichier demandé
$requestPath = isset($_GET['file']) ? $_GET['file'] : $_SERVER['REQUEST_URI'];

// Nettoyer le chemin
$requestPath = str_replace('../', '', $requestPath);
$requestPath = str_replace('..\\', '', $requestPath);
$requestPath = parse_url($requestPath, PHP_URL_PATH);

// Chemin complet vers le fichier
$filePath = __DIR__ . $requestPath;

// Si le fichier demandé est sitemap.xml mais n'existe pas, utiliser sitemap-local.xml
if (strpos($requestPath, 'sitemap.xml') !== false && !file_exists($filePath)) {
    $filePath = __DIR__ . '/sitemap-local.xml';
}

// Vérifier que le fichier existe et est lisible
if (file_exists($filePath) && is_readable($filePath)) {
    // Définir les en-têtes pour le cache et CORS
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header('Cache-Control: max-age=3600'); // Cache pour 1 heure
    
    // Lire et envoyer le contenu du fichier
    readfile($filePath);
} else {
    // Renvoyer une erreur 404 si le fichier n'existe pas
    header('HTTP/1.1 404 Not Found');
    echo "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n";
    echo "<error>Le fichier XML demandé n'existe pas ou n'est pas accessible</error>";
}
?>
