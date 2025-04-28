
<?php
// Script amélioré pour gérer correctement les fichiers JavaScript sur IONOS
header("Content-Type: application/javascript");

// Récupérer le chemin du fichier demandé
$requestPath = isset($_GET['file']) ? $_GET['file'] : $_SERVER['REQUEST_URI'];

// Nettoyer le chemin
$requestPath = str_replace('../', '', $requestPath);
$requestPath = str_replace('..\\', '', $requestPath);
$requestPath = parse_url($requestPath, PHP_URL_PATH);

// Essayer plusieurs extensions si le fichier direct n'existe pas
$extensions = ['', '.js', '.mjs', '.jsx', '.tsx'];
$filePath = null;

foreach ($extensions as $ext) {
    $testPath = __DIR__ . $requestPath . $ext;
    if (file_exists($testPath) && is_readable($testPath)) {
        $filePath = $testPath;
        break;
    }
}

// Vérifier que le fichier existe et est lisible
if ($filePath && is_readable($filePath)) {
    // Définir les en-têtes pour le cache et CORS
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header('Cache-Control: max-age=86400'); // Cache pour 1 jour
    
    // Lire et envoyer le contenu du fichier
    readfile($filePath);
} else {
    // Renvoyer une erreur 404 si le fichier n'existe pas
    header('HTTP/1.1 404 Not Found');
    echo "// Le fichier JavaScript demandé n'existe pas ou n'est pas accessible";
}
?>
