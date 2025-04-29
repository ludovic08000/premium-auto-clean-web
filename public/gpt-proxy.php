
<?php
// Script pour charger gptengineer.js avec le bon type MIME et les en-têtes CORS
// Prévenir toute sortie avant les en-têtes
ob_start();

// Définir le type MIME JavaScript
header("Content-Type: application/javascript");

// Définir les en-têtes CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Gérer les requêtes préliminaires OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// URL du script à proxifier
$scriptUrl = 'https://cdn.gpteng.co/gptengineer.js';

// Version minimaliste de secours si le téléchargement échoue
$fallbackScript = "console.log('gptengineer.js : Version de secours chargée');";

try {
    // Configuration de l'appel cURL
    $ch = curl_init($scriptUrl);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT => 5,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_USERAGENT => 'Mozilla/5.0 (compatible; PremiumAutoClean/1.0)'
    ]);

    // Exécuter la requête
    $content = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    
    // Vérifier les erreurs cURL et le code HTTP
    if (curl_errno($ch) || $httpCode !== 200 || empty($content)) {
        throw new Exception("Échec du téléchargement (HTTP: $httpCode)");
    }
    
    // Vérifier le type de contenu
    $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
    if (strpos($contentType, 'javascript') === false && strpos($content, '<!DOCTYPE') === 0) {
        throw new Exception("Contenu non-JavaScript reçu");
    }
    
    // Le script est valide, on l'envoie
    echo $content;
    
} catch (Exception $e) {
    // En cas d'erreur, utiliser le script de secours
    echo "console.error('Proxy error: " . addslashes($e->getMessage()) . "');\n";
    echo $fallbackScript;
}

curl_close($ch);
ob_end_flush();
?>
