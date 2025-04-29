
<?php
// Script de test des types MIME pour IONOS - version optimisée
header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Test des types MIME sur IONOS</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            line-height: 1.6;
        }
        .success { color: green; }
        .error { color: red; }
        .warning { color: orange; }
        pre {
            background: #f4f4f4;
            padding: 10px;
            border-radius: 4px;
            overflow-x: auto;
        }
    </style>
</head>
<body>
    <h1>Test des types MIME sur IONOS</h1>
    
    <h2>Fichiers testés:</h2>
    <ul>
        <?php
        $files = [
            '/sitemap.xml' => 'XML Sitemap',
            '/src/main.js' => 'JavaScript principal',
            '/index.html' => 'HTML principal'
        ];
        
        foreach ($files as $file => $description) {
            echo "<li>";
            echo "<strong>$description</strong> ($file): ";
            
            $ch = curl_init('https://' . $_SERVER['HTTP_HOST'] . $file);
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
            curl_setopt($ch, CURLOPT_HEADER, true);
            curl_setopt($ch, CURLOPT_NOBODY, true);
            curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
            
            $response = curl_exec($ch);
            $contentType = curl_getinfo($ch, CURLINFO_CONTENT_TYPE);
            $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
            
            if ($httpCode == 200) {
                // Vérifier le type MIME
                $expectedType = "";
                if (strpos($file, '.xml') !== false) $expectedType = "text/xml";
                if (strpos($file, '.js') !== false) $expectedType = "application/javascript";
                if (strpos($file, '.html') !== false) $expectedType = "text/html";
                
                if ($contentType == $expectedType || ($expectedType == "application/javascript" && strpos($contentType, "javascript") !== false)) {
                    echo "<span class='success'>Type MIME correct: $contentType</span>";
                } else {
                    echo "<span class='error'>Type MIME incorrect: $contentType (attendu: $expectedType)</span>";
                }
            } else {
                echo "<span class='warning'>HTTP $httpCode - Fichier non trouvé ou inaccessible</span>";
            }
            
            curl_close($ch);
            echo "</li>";
        }
        ?>
    </ul>
    
    <h2>Configuration du serveur:</h2>
    <pre><?php echo php_uname(); ?></pre>
    <pre><?php echo $_SERVER['SERVER_SOFTWARE']; ?></pre>
    
    <h2>Solution pour corriger les types MIME:</h2>
    <ol>
        <li>Renommez le fichier <code>index-ionos.php</code> en <code>index.php</code> et placez-le à la racine</li>
        <li>Renommez le fichier <code>.htaccess-ionos</code> en <code>.htaccess</code> principal</li>
        <li>Vérifiez que les fichiers <code>js-proxy.php</code> et <code>xml-proxy.php</code> sont présents à la racine</li>
    </ol>
    
    <h2>Tests de fonctionnement:</h2>
    <ul>
        <li><a href="/?debug=1">Tester le mode debug</a></li>
        <li><a href="/sitemap.xml">Tester le sitemap XML</a></li>
    </ul>
</body>
</html>
