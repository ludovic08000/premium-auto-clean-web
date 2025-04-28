
### INSTRUCTIONS DE DÉPLOIEMENT POUR IONOS ###

Pour garantir que l'application fonctionne correctement sur IONOS (avec les bons types MIME), suivez ces étapes :

1. Uploadez tous les fichiers du dossier "build" ou "dist" vers votre hébergement

2. Configurez le comportement des MIME types :
   - Renommez `.htaccess-ionos` en `.htaccess` (ou fusionnez son contenu avec le .htaccess existant)
   - Assurez-vous que le fichier `.user.ini` est présent à la racine
   - Vérifiez que les scripts `xml-proxy.php` et `js-proxy.php` sont présents

3. Option PHP (recommandée pour les problèmes persistants) :
   - Renommez `index-ionos.php` en `index.php`
   - Placez ce fichier à la racine de votre site
   - Cette méthode contourne les limitations de IONOS en utilisant PHP pour servir les fichiers statiques

4. Testez le fonctionnement :
   - Accédez à https://votre-domaine.com/test-mime.php pour vérifier les types MIME
   - Vérifiez que le sitemap est accessible à https://votre-domaine.com/sitemap.xml
   - Assurez-vous que l'application se charge correctement

5. En cas de problème persistant :
   - Utilisez la technique PHP : tous les fichiers sont servis via PHP avec des en-têtes explicites
   - Contactez le support IONOS en mentionnant les problèmes de type MIME
   - Vérifiez les journaux d'erreurs pour plus de détails

Note: Ces solutions sont spécifiques à IONOS et peuvent ne pas être nécessaires sur d'autres hébergeurs.
