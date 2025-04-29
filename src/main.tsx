
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fonction d'initialisation pour l'environnement de prévisualisation et de production
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
      window.appConfig = window.appConfig || {};
      window.appConfig.mainScriptLoaded = true;
      return true;
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation de l'application:", error);
    return false;
  }
}

// Exécuter l'initialisation immédiatement
initializeApp();

// Ajouter plusieurs écouteurs d'événements pour s'assurer que l'application démarre
document.addEventListener('DOMContentLoaded', () => {
  if (!document.documentElement.classList.contains('js-loaded')) {
    console.log("Initialisation via DOMContentLoaded");
    initializeApp();
  }
});

window.addEventListener('load', () => {
  if (!document.documentElement.classList.contains('js-loaded')) {
    console.log("Initialisation via window.load");
    initializeApp();
  }
});

// Gestionnaire d'erreurs global
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Erreur globale détectée:", message, source, error);
  // Ne pas retourner true pour permettre la propagation normale des erreurs
};
