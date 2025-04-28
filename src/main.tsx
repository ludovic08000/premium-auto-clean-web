
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fonction d'initialisation pour améliorer la compatibilité serveur
function initializeApp() {
  try {
    console.log("Initialisation de l'application...");
    
    // Vérifier si le conteneur root existe
    const rootElement = document.getElementById("root");

    if (!rootElement) {
      console.error("Élément root non trouvé dans le DOM");
      return false;
    } else {
      // Ajouter une classe pour signaler que JavaScript est chargé
      document.documentElement.classList.add('js-loaded');
      
      // Utilisation de StrictMode pour détecter les problèmes potentiels
      createRoot(rootElement).render(
        <StrictMode>
          <App />
        </StrictMode>
      );
      
      console.log("Application chargée avec succès");
      return true;
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation de l'application:", error);
    return false;
  }
}

// Démarrer l'application quand le DOM est chargé
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  // Le DOM est déjà chargé
  initializeApp();
}

// Backup pour s'assurer que l'application démarre toujours
window.addEventListener('load', function() {
  if (!document.documentElement.classList.contains('js-loaded')) {
    console.log("Tentative de récupération après le chargement complet...");
    initializeApp();
  }
});
