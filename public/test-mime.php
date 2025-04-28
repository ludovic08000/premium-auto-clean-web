
<?php
// Ce fichier permet de tester si les types MIME sont correctement servis
header('Content-Type: text/html; charset=utf-8');
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Test des types MIME</title>
</head>
<body>
    <h1>Test des types MIME sur IONOS</h1>
    
    <h2>Fichiers testés :</h2>
    <ul>
        <?php
        $files = [
            '/sitemap.xml' => 'XML Sitemap',
            '/src/main.js' => 'JavaScript principal',
            '/src/main.tsx' => 'TypeScript React',
            '/index.html' => 'HTML principal'
        ];
        
        foreach ($files as $file => $description) {
            echo "<li>";
            echo "<strong>$description</strong> ($file): ";
            $headers = get_headers('https://' . $_SERVER['HTTP_HOST'] . $file, 1);
            
            if (isset($headers['Content-Type'])) {
                echo "Type MIME: " . $headers['Content-Type'];
            } else {
                echo "Type MIME non détecté";
            }
            echo "</li>";
        }
        ?>
    </ul>
    
    <h2>Solution pour corriger les types MIME :</h2>
    <ol>
        <li>Renommez le fichier <code>index-ionos.php</code> en <code>index.php</code> et placez-le à la racine</li>
        <li>Utilisez le fichier <code>.htaccess-ionos</code> comme <code>.htaccess</code> principal</li>
        <li>Assurez-vous que le fichier <code>.user.ini</code> est présent à la racine</li>
    </ol>
    
    <p>Note: Pour IONOS, il est souvent préférable d'utiliser PHP pour servir les fichiers statiques avec les bons types MIME plutôt que de se fier uniquement à .htaccess</p>
</body>
</html>
