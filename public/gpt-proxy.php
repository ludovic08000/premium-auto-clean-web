
<?php
// Script pour gérer le chargement de gptengineer.js
header("Content-Type: application/javascript");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Gérer les requêtes préliminaires OPTIONS pour CORS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// URL du script à proxifier
$scriptUrl = 'https://cdn.gpteng.co/gptengineer.js';

// Initialiser cURL
$ch = curl_init();

// Configurer cURL
curl_setopt($ch, CURLOPT_URL, $scriptUrl);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
curl_setopt($ch, CURLOPT_USERAGENT, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36');
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false); // À éviter en production si possible
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'Accept: */*',
    'Origin: https://premiumautoclean.com'
));

// Exécuter la requête
$content = curl_exec($ch);

// Gérer les erreurs
if (curl_errno($ch)) {
    echo "// Erreur lors de la récupération du script: " . curl_error($ch);
} else {
    // Vérifier si le contenu ressemble à du JavaScript
    if (strpos($content, '<!DOCTYPE html>') === 0 || strpos($content, '<html') === 0) {
        echo "// Le contenu récupéré semble être du HTML et non du JavaScript\n";
        echo "// Fallback à une version locale ou à une solution alternative\n";
        
        // Option 1: Rediriger vers une version locale si disponible
        if (file_exists(__DIR__ . '/gptengineer.js')) {
            echo file_get_contents(__DIR__ . '/gptengineer.js');
        } else {
            // Option 2: Fournir un script minimal de fallback
            echo "console.log('Script gptengineer.js non disponible. Fonctionnalités limitées.');\n";
        }
    } else {
        // Retourner le contenu JavaScript
        echo $content;
    }
}

// Fermer cURL
curl_close($ch);
?>
