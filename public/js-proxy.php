
<?php
// Script optimisé pour gérer les fichiers JavaScript
// Version 2.3 - Optimisation et suppression des fonctionnalités non essentielles

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
$requestPath = preg_replace('/[?&].*$/', '', $requestPath); // Supprimer les paramètres d'URL

// Mode de débogage désactivé par défaut
$debug = false;

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
$extensions = ['', '.js', '.mjs'];

// Chercher le fichier
$filePath = null;
foreach ($searchLocations as $location) {
    foreach ($extensions as $ext) {
        $testPath = $location . $ext;
        if (file_exists($testPath) && is_file($testPath) && is_readable($testPath)) {
            $filePath = $testPath;
            break 2;
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
    
    // Vérifier si le contenu n'est pas du HTML
    if (strpos($content, '<!DOCTYPE html>') === 0 || 
        strpos($content, '<html') === 0 || 
        preg_match('/<\!DOCTYPE\s+html>/i', $content) || 
        preg_match('/<html/i', substr($content, 0, 1000))) {
            
        // Générer un script de secours approprié
        echo "console.error('Erreur de chargement JavaScript: Contenu HTML détecté à la place du JavaScript.');";
        echo "console.warn('Fichier demandé: " . addslashes($requestPath) . "');";
    } else {
        // C'est du JavaScript valide, on l'envoie
        echo $content;
    }
} else {
    // Fichier non trouvé - générer un JavaScript minimal de secours
    header('HTTP/1.1 404 Not Found');
    echo "console.error('JavaScript file not found: " . addslashes($requestPath) . "');";
}

// Envoyer la sortie et terminer
ob_end_flush();
exit;
?>
