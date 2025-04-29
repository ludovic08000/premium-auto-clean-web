
<?php
// Script optimisé pour proxy Lovable avec gestion robuste des erreurs
// Version 2.1 - Correction des problèmes MIME et implémentation du cache

// Prévenir toute sortie avant les en-têtes
ob_start();

// Définir strictement le type MIME JavaScript
header("Content-Type: application/javascript; charset=UTF-8");

// Définir les en-têtes CORS
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

// Gérer les requêtes préliminaires OPTIONS
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    exit(0);
}

// Configuration du proxy
$scriptUrl = 'https://cdn.gpteng.co/gptengineer.js';
$cacheFile = __DIR__ . '/cache/gptengineer.js';
$cacheDir = __DIR__ . '/cache';
$cacheTime = 3600; // 1 heure en secondes
$debug = isset($_GET['debug']) && $_GET['debug'] == '1';

// Script de secours en cas d'échec
$fallbackScript = <<<'JAVASCRIPT'
// Version de secours du script gptengineer.js
console.warn('Chargement de secours de gptengineer.js - Fonctionnalités limitées');
if (!window.lovable) {
  window.lovable = {
    initialized: false,
    version: 'fallback',
    init: function() { 
      console.log('Initialisation de la version de secours'); 
      this.initialized = true;
    }
  };
  
  // Tenter d'initialiser automatiquement
  try {
    window.lovable.init();
  } catch (e) {
    console.error('Erreur lors de l\'initialisation:', e);
  }
}
JAVASCRIPT;

// Créer le répertoire de cache s'il n'existe pas
if (!file_exists($cacheDir) && !is_dir($cacheDir)) {
    if ($debug) echo "// Création du répertoire de cache\n";
    mkdir($cacheDir, 0755, true);
}

// Fonction pour récupérer le script depuis le serveur distant
function fetchScript($url) {
    global $debug;
    
    if ($debug) echo "// Tentative de récupération du script depuis $url\n";
    
    if (!function_exists('curl_init')) {
        if ($debug) echo "// cURL n'est pas disponible, utilisation de file_get_contents\n";
        
        $context = stream_context_create([
            'http' => [
                'method' => 'GET',
                'header' => [
                    'User-Agent: Mozilla/5.0 (compatible; PremiumAutoClean/1.0)',
                    'Accept: */*'
                ],
                'timeout' => 5
            ],
            'ssl' => [
                'verify_peer' => false,
                'verify_peer_name' => false
            ]
        ]);
        
        $content = @file_get_contents($url, false, $context);
        
        if ($content === false) {
            if ($debug) echo "// Échec de récupération via file_get_contents\n";
            return null;
        }
        
        return $content;
    }
    
    // Utilisation de cURL si disponible
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_FOLLOWLOCATION => true,
        CURLOPT_TIMEOUT => 5,
        CURLOPT_SSL_VERIFYPEER => false,
        CURLOPT_USERAGENT => 'Mozilla/5.0 (compatible; PremiumAutoClean/1.0)'
    ]);
    
    $content = curl_exec($ch);
    $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    if ($httpCode !== 200 || empty($content)) {
        if ($debug) echo "// Échec de récupération via cURL (HTTP $httpCode)\n";
        return null;
    }
    
    return $content;
}

// Vérifier si la version en cache est utilisable
$useCache = false;
if (file_exists($cacheFile) && (time() - filemtime($cacheFile) < $cacheTime)) {
    if ($debug) echo "// Utilisation du fichier en cache\n";
    $useCache = true;
    $content = file_get_contents($cacheFile);
} else {
    // Récupérer depuis le serveur distant
    $content = fetchScript($scriptUrl);
    
    // Si la récupération réussit, mettre en cache
    if ($content !== null && !empty($content)) {
        if ($debug) echo "// Script récupéré avec succès, mise en cache\n";
        file_put_contents($cacheFile, $content);
    } else if (file_exists($cacheFile)) {
        // Utiliser la version en cache même périmée en cas d'échec
        if ($debug) echo "// Échec de récupération, utilisation du cache périmé\n";
        $content = file_get_contents($cacheFile);
    } else {
        // Aucun cache, aucune récupération
        if ($debug) echo "// Échec total, utilisation du script de secours\n";
        $content = $fallbackScript;
    }
}

// Vérification du contenu (s'assurer qu'il ne s'agit pas de HTML)
if (strpos($content, '<!DOCTYPE html>') === 0 || strpos($content, '<html') === 0) {
    if ($debug) echo "// Contenu HTML détecté au lieu de JavaScript, utilisation du script de secours\n";
    $content = $fallbackScript;
}

// Envoyer le script
echo $content;

// Terminer la sortie
ob_end_flush();
?>
