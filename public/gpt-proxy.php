
<?php
// Script pour gérer le chargement de gptengineer.js
header("Content-Type: application/javascript");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

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

// Exécuter la requête
$content = curl_exec($ch);

// Gérer les erreurs
if (curl_errno($ch)) {
    echo "// Erreur lors de la récupération du script: " . curl_error($ch);
} else {
    // Retourner le contenu
    echo $content;
}

// Fermer cURL
curl_close($ch);
?>
