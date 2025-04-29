
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
   - js-proxy.php
   - xml-proxy.php
   - gpt-proxy.php (NOUVEAU: proxy spécifique pour gptengineer.js)
   - index.html (avec les modifications pour la gestion des erreurs CORS)

ÉTAPE 3: RÉSOUDRE LES PROBLÈMES DE CORS
======================================
1. Dans index.html, remplacez :
   <script src="https://cdn.gpteng.co/gptengineer.js" type="module"></script>
   par
   <script src="/gpt-proxy.php" type="module"></script>

2. Si vous avez encore des problèmes avec gptengineer.js, utilisez le proxy local :
   - Accédez à https://cdn.gpteng.co/gptengineer.js
   - Copiez tout le contenu
   - Créez un fichier local "gptengineer.js" à la racine
   - Collez le contenu dans ce fichier
   - Modifiez index.html pour utiliser ce fichier local :
     <script src="/gptengineer.js" type="module"></script>

ÉTAPE 4: VÉRIFICATION DU DÉPLOIEMENT
==================================
1. Accédez à votre site avec ?debug=1 pour voir les informations de débogage
   https://votresite.com/?debug=1
   
2. Vérifiez les fichiers JavaScript avec le proxy JS :
   https://votresite.com/js-proxy.php?file=/src/main.jsx&debug=1
   
3. Vérifiez que le sitemap est accessible :
   https://votresite.com/sitemap.xml

DÉPANNAGE AVANCÉ
==============
Si vous rencontrez toujours des problèmes :

1. Vérifiez les logs d'erreur sur votre panneau IONOS
2. Assurez-vous que PHP a les permissions nécessaires
3. Essayez de désactiver temporairement le cache du navigateur
4. Utilisez les outils de développement du navigateur pour voir les erreurs précises
5. Essayez d'accéder directement aux fichiers via les scripts proxy

EXPLICATION TECHNIQUE
===================
Cette solution contourne les limitations d'IONOS en :
1. Utilisant PHP comme proxy pour servir les fichiers avec les bons types MIME
2. Résolvant les problèmes CORS avec des en-têtes appropriés
3. Fournissant des alternatives pour charger les scripts externes
4. Gérant les requêtes préflight OPTIONS pour CORS

Pour toute question, n'hésitez pas à contacter votre développeur.
