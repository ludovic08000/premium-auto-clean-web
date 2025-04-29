
<?php
// Script amélioré pour gérer correctement les fichiers JavaScript
// Version 2.1 - Correction des problèmes MIME et sécurisation avancée

// Prévenir toute sortie avant les en-têtes
ob_start();

// Définir strictement le type MIME JavaScript
header("Content-Type: application/javascript; charset=UTF-8");

// Définir les en-têtes CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Gérer les requêtes préliminaires OPTIONS pour CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Récupérer le chemin du fichier demandé
$requestPath = isset($_GET['file']) ? $_GET['file'] : $_SERVER['REQUEST_URI'];

// Nettoyer et sécuriser le chemin
$requestPath = str_replace(['../', '..\\', ':', '?', '&'], '', $requestPath);
$requestPath = parse_url($requestPath, PHP_URL_PATH);

// Mode de débogage (à commenter en production)
$debug = isset($_GET['debug']) && $_GET['debug'] == '1';

if ($debug) {
    echo "// Debug mode enabled\n";
    echo "// Requested path: $requestPath\n";
}

// Rechercher le fichier dans différents emplacements
$searchLocations = [
    // Dossier dist/assets (build Vite standard)
    __DIR__ . '/dist/assets' . str_replace(['/assets/', '/dist/assets/', '/src/'], '/', $requestPath),
    __DIR__ . '/dist/assets' . $requestPath,
    // Dossier dist
    __DIR__ . '/dist' . $requestPath,
    // Racine du projet
    __DIR__ . $requestPath,
    // Dossier src
    __DIR__ . '/src' . $requestPath
];

// Extensions à essayer
$extensions = ['', '.js', '.mjs', '.jsx', '.tsx'];

// Chercher le fichier
$filePath = null;
foreach ($searchLocations as $location) {
    foreach ($extensions as $ext) {
        $testPath = $location . $ext;
        if (file_exists($testPath) && is_file($testPath) && is_readable($testPath)) {
            $filePath = $testPath;
            if ($debug) echo "// Found file: $testPath\n";
            break 2;
        } elseif ($debug) {
            echo "// File not found: $testPath\n";
        }
    }
}

// Si le fichier est trouvé
if ($filePath) {
    // Optimisation du cache
    $etag = md5_file($filePath);
    $lastModified = gmdate('D, d M Y H:i:s', filemtime($filePath)) . ' GMT';
    
    header('ETag: "' . $etag . '"');
    header('Last-Modified: ' . $lastModified);
    header('Cache-Control: max-age=3600'); // Cache 1 heure
    
    // Vérification du cache côté client
    if (isset($_SERVER['HTTP_IF_NONE_MATCH']) && trim($_SERVER['HTTP_IF_NONE_MATCH'], '"') == $etag) {
        header('HTTP/1.1 304 Not Modified');
        exit;
    }
    
    // Lire le contenu du fichier
    $content = file_get_contents($filePath);
    
    // Vérifier si le contenu n'est pas du HTML (éviter les erreurs "Unexpected token '<'")
    if (strpos($content, '<!DOCTYPE html>') === 0 || strpos($content, '<html') === 0) {
        if ($debug) {
            echo "// WARNING: File appears to be HTML, not JavaScript\n";
            echo "// Serving fallback JavaScript instead\n";
        }
        
        // Générer un script de secours approprié
        echo "console.error('Error loading JavaScript file. Received HTML instead of JavaScript.');";
        echo "console.warn('File path requested: " . addslashes($requestPath) . "');";
        
        // Script de secours pour la fonctionnalité minimale
        echo "if (typeof window.appLoaded === 'undefined') {";
        echo "  window.appLoaded = false;";
        echo "  document.addEventListener('DOMContentLoaded', function() {";
        echo "    var rootEl = document.getElementById('root');";
        echo "    if (rootEl) {";
        echo "      rootEl.innerHTML = '<div style=\"padding: 20px; text-align: center;\"><h2>Erreur de chargement</h2><p>Une erreur est survenue lors du chargement du fichier JavaScript.</p><button onclick=\"location.reload()\" style=\"padding: 10px; background: #333; color: white; border: 0; border-radius: 4px;\">Rafraîchir</button></div>';";
        echo "    }";
        echo "  });";
        echo "}";
    } else {
        // C'est du JavaScript valide, on l'envoie
        echo $content;
    }
} else {
    // Fichier non trouvé - générer un JavaScript de secours
    if ($debug) {
        echo "// File not found after checking all locations\n";
        echo "// Searched in: " . implode(', ', array_map(function($loc) { return str_replace(__DIR__, '[ROOT]', $loc); }, $searchLocations)) . "\n";
    }
    
    header('HTTP/1.1 404 Not Found');
    echo "console.error('JavaScript file not found: " . addslashes($requestPath) . "');";
    
    // Script de secours pour afficher une erreur propre
    echo "document.addEventListener('DOMContentLoaded', function() {";
    echo "  var rootEl = document.getElementById('root');";
    echo "  if (rootEl) {";
    echo "    rootEl.innerHTML = '<div style=\"padding: 20px; text-align: center;\"><h2>Fichier non trouvé</h2><p>Le fichier JavaScript \"" . addslashes($requestPath) . "\" n\\'a pas été trouvé.</p><button onclick=\"location.reload()\" style=\"padding: 10px; background: #333; color: white; border: 0; border-radius: 4px;\">Rafraîchir</button></div>';";
    echo "  }";
    echo "});";
}

// Envoyer la sortie et terminer
ob_end_flush();
exit;
?>
