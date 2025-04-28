
### INSTRUCTIONS DE DÉPLOIEMENT POUR IONOS ###

Pour garantir que l'application fonctionne correctement sur IONOS (notamment les problèmes de MIME types), suivez ces étapes:

ÉTAPE 1: PRÉPARATION DES FICHIERS
=================================
1. Avant de téléverser les fichiers sur IONOS:
   - Renommez ".htaccess-ionos" en ".htaccess"
   - Renommez "index-ionos.php" en "index.php"
   - Assurez-vous que les fichiers suivants sont prêts à être téléversés:
     * .htaccess (l'ancien renommé)
     * .user.ini
     * index.php (l'ancien index-ionos.php)
     * js-proxy.php
     * xml-proxy.php
     * test-mime.php
     * tous les fichiers de votre build React

ÉTAPE 2: TÉLÉVERSEMENT
=====================
1. Téléversez TOUS les fichiers mentionnés ci-dessus vers votre hébergement IONOS
2. Assurez-vous que les fichiers sont à la RACINE de votre site web

ÉTAPE 3: VÉRIFICATION
====================
1. Accédez à https://votre-domaine.com/test-mime.php pour vérifier les types MIME
2. Vérifiez que le sitemap est accessible à https://votre-domaine.com/sitemap.xml
3. Assurez-vous que l'application se charge correctement

DÉPANNAGE
=========
Si vous rencontrez des problèmes:

1. PROBLÈME DE SITEMAP:
   - Vérifiez que xml-proxy.php est présent et accessible
   - Essayez d'accéder directement à https://votre-domaine.com/xml-proxy.php?file=/sitemap.xml

2. PROBLÈME DE CHARGEMENT JAVASCRIPT:
   - Vérifiez que js-proxy.php est présent et accessible
   - Essayez d'accéder directement à https://votre-domaine.com/js-proxy.php?file=/src/main.jsx

3. ERREUR 500 OU PAGE BLANCHE:
   - Vérifiez les journaux d'erreurs sur le panneau de contrôle IONOS
   - Vérifiez les permissions des fichiers (644 pour les fichiers, 755 pour les répertoires)
   - Utilisez le mode debug: https://votre-domaine.com/?debug=1

EXPLICATIONS TECHNIQUES
======================
La solution mise en place contourne les limitations de IONOS:
1. Tous les fichiers sont servis via PHP avec les en-têtes MIME appropriés
2. Les requêtes sont interceptées par .htaccess et redirigées vers les scripts PHP appropriés
3. Le script index.php sert de point d'entrée pour le SPA et gère également les fichiers statiques

Si vous avez besoin d'aide supplémentaire, contactez votre développeur.
