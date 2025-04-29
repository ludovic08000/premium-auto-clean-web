

### INSTRUCTIONS DE DÉPLOIEMENT AMÉLIORÉES ###

Pour résoudre les problèmes de CORS et MIME types sur votre hébergement IONOS, suivez attentivement ces étapes :

ÉTAPE 1: PRÉPARATION DES FICHIERS
=================================
1. Créez un dossier "dist" à la racine de votre site si ce n'est pas déjà fait
2. Compilez votre application avec "npm run build"
3. Copiez tous les fichiers générés dans le dossier "dist" vers le dossier "dist" de votre hébergement

ÉTAPE 2: CONFIGURATION DES FICHIERS SPÉCIAUX
===========================================
1. Renommez "index-ionos.php" en "index.php" et placez-le à la racine
2. Renommez ".htaccess-ionos" en ".htaccess" et placez-le à la racine
3. Assurez-vous que les fichiers suivants sont présents à la racine :
   - index.php (ancien index-ionos.php)
   - .htaccess (ancien .htaccess-ionos)
   - .user.ini
   - js-proxy.php (MISE À JOUR IMPORTANTE - Version 2.0)
   - xml-proxy.php
   - gpt-proxy.php (MISE À JOUR IMPORTANTE - Version 2.1)
   - index.html (avec les modifications pour la gestion des erreurs CORS et le script Lovable)

ÉTAPE 3: CRÉER UN DOSSIER CACHE
==============================
1. Créez un dossier "cache" à la racine de votre site
2. Assurez-vous que ce dossier a les permissions d'écriture (chmod 755)
3. Ce dossier est utilisé pour mettre en cache les fichiers externes et améliorer les performances

ÉTAPE 4: RÉSOUDRE LES PROBLÈMES DE CORS ET MIME
=============================================
1. Dans index.html, assurez-vous que le système de chargement amélioré est présent:
   - Le chargement principal via CDN : https://cdn.gpteng.co/gptengineer.js
   - Le chargement de secours via proxy : /gpt-proxy.php
   
2. Si vous avez des erreurs "Uncaught SyntaxError: Failed to execute 'appendChild' on 'Node': Unexpected token '<'", cela signifie que vos fichiers JavaScript sont servis avec un mauvais type MIME :
   
   a. Vérifiez que .user.ini est bien configuré
   b. Assurez-vous que les fichiers js-proxy.php et gpt-proxy.php sont accessibles
   c. Utilisez les chemins avec proxy explicites comme :
      /js-proxy.php?file=/dist/assets/main.js
      au lieu de :
      /dist/assets/main.js

3. Pour déboguer, ajoutez le paramètre debug=1 aux requêtes de proxy :
   /js-proxy.php?file=/dist/assets/main.js&debug=1
   /gpt-proxy.php?debug=1

ÉTAPE 5: VÉRIFICATION DU DÉPLOIEMENT
==================================
1. Ouvrez la console de votre navigateur (F12) et vérifiez qu'il n'y a pas d'erreurs CORS ou MIME
   
2. Vérifiez que les fichiers sont bien servis avec le bon type MIME :
   - Les fichiers JS doivent avoir "Content-Type: application/javascript"
   - Les fichiers XML doivent avoir "Content-Type: text/xml"
   
3. Si des erreurs persistent, essayez de :
   - Vider le cache du navigateur (Ctrl+F5 ou Cmd+Shift+R)
   - Utiliser la navigation privée
   - Tester avec un autre navigateur

SOLUTIONS AUX PROBLÈMES COURANTS
==============================

1. Erreur "Unexpected token '<'" :
   - Cette erreur se produit quand un fichier HTML est chargé comme JavaScript
   - Solution : Utilisez les scripts proxy (js-proxy.php) pour charger vos fichiers JS
   - Vérifiez que js-proxy.php est bien la version 2.0 ou supérieure
   
2. Erreur "CORS policy: No 'Access-Control-Allow-Origin' header" :
   - Cette erreur se produit quand les en-têtes CORS ne sont pas correctement configurés
   - Solution : Utilisez les scripts proxy qui ajoutent les en-têtes CORS nécessaires
   - Vérifiez que gpt-proxy.php est bien la version 2.1 ou supérieure
   
3. Erreur "Failed to load module script" :
   - Cette erreur se produit quand un module ES6 est chargé avec un mauvais MIME type
   - Solution : Assurez-vous que le type="module" est utilisé seulement pour les vrais modules
   - Utilisez js-proxy.php avec l'extension appropriée (par exemple .mjs)

4. Le site fonctionne localement mais pas sur IONOS :
   - C'est généralement dû aux différences de configuration du serveur
   - Solution : Utilisez les scripts proxy fournis et assurez-vous qu'index.html utilise le système de chargement robuste

Pour toute question, n'hésitez pas à contacter votre développeur.

