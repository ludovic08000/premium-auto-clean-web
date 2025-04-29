
<?php
// Script amélioré pour gérer correctement les fichiers JavaScript sur IONOS
header("Content-Type: application/javascript");

// Définir les en-têtes CORS pour permettre l'accès depuis n'importe quel domaine
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Récupérer le chemin du fichier demandé
$requestPath = isset($_GET['file']) ? $_GET['file'] : $_SERVER['REQUEST_URI'];

// Nettoyer le chemin
$requestPath = str_replace('../', '', $requestPath);
$requestPath = str_replace('..\\', '', $requestPath);
$requestPath = parse_url($requestPath, PHP_URL_PATH);

// Essayer plusieurs extensions si le fichier direct n'existe pas
$extensions = ['', '.js', '.mjs', '.jsx', '.tsx'];
$filePath = null;

// Pour le débogage (à commenter en production)
$debug = isset($_GET['debug']) ? true : false;
if ($debug) {
    echo "// Requested path: " . $requestPath . "\n";
    echo "// Looking for files with extensions: " . implode(', ', $extensions) . "\n";
}

foreach ($extensions as $ext) {
    $testPath = __DIR__ . $requestPath . $ext;
    if (file_exists($testPath) && is_readable($testPath)) {
        $filePath = $testPath;
        if ($debug) echo "// Found file: " . $testPath . "\n";
        break;
    } elseif ($debug) {
        echo "// Not found: " . $testPath . "\n";
    }
}

// Chemin alternatif pour les fichiers dans le dossier dist
if (!$filePath && strpos($requestPath, '/src/') === 0) {
    $altPath = __DIR__ . '/dist' . str_replace('/src/', '/assets/', $requestPath);
    foreach ($extensions as $ext) {
        $testPath = $altPath . $ext;
        if (file_exists($testPath) && is_readable($testPath)) {
            $filePath = $testPath;
            if ($debug) echo "// Found in dist folder: " . $testPath . "\n";
            break;
        } elseif ($debug) {
            echo "// Not found in dist: " . $testPath . "\n";
        }
    }
}

// Vérifier que le fichier existe et est lisible
if ($filePath && is_readable($filePath)) {
    // Définir les en-têtes pour le cache
    header('Cache-Control: max-age=86400'); // Cache pour 1 jour
    
    // Lire et envoyer le contenu du fichier
    readfile($filePath);
} else {
    // Renvoyer une erreur 404 si le fichier n'existe pas
    header('HTTP/1.1 404 Not Found');
    echo "// Le fichier JavaScript demandé n'existe pas ou n'est pas accessible: " . $requestPath;
    if ($debug) {
        echo "\n// Debug info: recherche effectuée dans " . __DIR__ . " et " . __DIR__ . '/dist/assets/';
    }
}
?>
