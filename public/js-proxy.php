
<?php
// Script amélioré pour gérer correctement les fichiers JavaScript sur IONOS
header("Content-Type: application/javascript");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Gérer les requêtes préliminaires OPTIONS pour CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

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

// Chercher d'abord dans le dossier dist
$distPath = __DIR__ . '/dist/assets' . str_replace(['/src/', '/dist/'], '/', $requestPath);
foreach ($extensions as $ext) {
    $testPath = $distPath . $ext;
    if (file_exists($testPath) && is_readable($testPath)) {
        $filePath = $testPath;
        if ($debug) echo "// Found file in dist folder: " . $testPath . "\n";
        break;
    } elseif ($debug) {
        echo "// Not found in dist: " . $testPath . "\n";
    }
}

// Si non trouvé dans dist, chercher à la racine
if (!$filePath) {
    foreach ($extensions as $ext) {
        $testPath = __DIR__ . $requestPath . $ext;
        if (file_exists($testPath) && is_readable($testPath)) {
            $filePath = $testPath;
            if ($debug) echo "// Found file at root: " . $testPath . "\n";
            break;
        } elseif ($debug) {
            echo "// Not found at root: " . $testPath . "\n";
        }
    }
}

// Chercher dans le dossier src en dernier recours
if (!$filePath) {
    $srcPath = __DIR__ . $requestPath;
    foreach ($extensions as $ext) {
        $testPath = $srcPath . $ext;
        if (file_exists($testPath) && is_readable($testPath)) {
            $filePath = $testPath;
            if ($debug) echo "// Found file in src: " . $testPath . "\n";
            break;
        } elseif ($debug) {
            echo "// Not found in src: " . $testPath . "\n";
        }
    }
}

// Vérifier que le fichier existe et est lisible
if ($filePath && is_readable($filePath)) {
    // Définir les en-têtes pour le cache
    header('Cache-Control: max-age=3600'); // Cache pour 1 heure
    
    // Lire le contenu du fichier
    $content = file_get_contents($filePath);
    
    // Vérifier si le contenu ressemble à du JavaScript
    if (strpos($content, '<!DOCTYPE html>') === 0 || strpos($content, '<html') === 0) {
        echo "// ATTENTION: Le fichier $filePath semble contenir du HTML au lieu de JavaScript\n";
        echo "// Cela peut causer des erreurs de parsing côté client\n";
    }
    
    // Envoyer le contenu du fichier
    echo $content;
} else {
    // Renvoyer une erreur 404 si le fichier n'existe pas
    header('HTTP/1.1 404 Not Found');
    echo "// Le fichier JavaScript demandé n'existe pas ou n'est pas accessible: " . $requestPath;
    if ($debug) {
        echo "\n// Debug info: recherche effectuée dans " . __DIR__ . ", " . __DIR__ . '/dist/assets/' . " et " . __DIR__ . '/src/';
    }
}
?>
