
<?php
// Script pour gérer correctement les fichiers JavaScript avec le bon type MIME
header("Content-Type: application/javascript");

// Récupérer le chemin du fichier demandé
$requestPath = isset($_GET['file']) ? $_GET['file'] : $_SERVER['REQUEST_URI'];

// Supprimer tout chemin relatif pour éviter les attaques de traversée de répertoire
$requestPath = str_replace('../', '', $requestPath);
$requestPath = str_replace('..\\', '', $requestPath);

// Chemin complet vers le fichier
$filePath = __DIR__ . $requestPath;

// Vérifier que le fichier existe et est lisible
if (file_exists($filePath) && is_readable($filePath)) {
    // Définir les en-têtes pour le cache et CORS
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET');
    header('Cache-Control: max-age=86400'); // Cache pour 1 jour
    
    // Lire et envoyer le contenu du fichier
    readfile($filePath);
} else {
    // Renvoyer une erreur 404 si le fichier n'existe pas
    header('HTTP/1.1 404 Not Found');
    echo "// Le fichier demandé n'existe pas ou n'est pas accessible.";
}
?>
