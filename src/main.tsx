
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Déclaration de l'interface pour appConfig
interface AppConfig {
  mainScriptLoaded: boolean;
}

// Déclaration pour étendre l'interface Window
declare global {
  interface Window {
    appConfig?: AppConfig;
  }
}

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
      window.appConfig = {
        mainScriptLoaded: true
      };
      return true;
    }
  } catch (error) {
    console.error("Erreur lors de l'initialisation de l'application:", error);
    
    // Tenter de signaler l'erreur visuellement
    const rootElement = document.getElementById("root");
    if (rootElement) {
      rootElement.innerHTML = `
        <div style="padding: 20px; text-align: center; font-family: sans-serif; color: #d4af37; background-color: #111;">
          <h2>Erreur de chargement</h2>
          <p>Une erreur s'est produite lors du chargement de l'application.</p>
          <button onclick="window.location.reload()" style="padding: 10px 20px; background: #d4af37; color: #111; border: none; border-radius: 4px; cursor: pointer; margin-top: 15px;">Rafraîchir la page</button>
        </div>
      `;
    }
    return false;
  }
}

// Exécuter l'initialisation immédiatement
// Attendez que le DOM soit complètement chargé pour l'environnement de prévisualisation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Initialisation via DOMContentLoaded");
    initializeApp();
  });
} else {
  // Si le DOM est déjà chargé (ce qui peut être le cas pour la prévisualisation)
  console.log("Initialisation immédiate - DOM déjà chargé");
  initializeApp();
}

// Ajouter plusieurs écouteurs d'événements pour s'assurer que l'application démarre
window.addEventListener('load', () => {
  if (!window.appConfig?.mainScriptLoaded) {
    console.log("Initialisation via window.load");
    initializeApp();
  }
});

// Système de secours supplémentaire - initialisation différée
setTimeout(() => {
  if (!window.appConfig?.mainScriptLoaded) {
    console.log("Initialisation différée après délai");
    initializeApp();
  }
}, 1000);

// Gestionnaire d'erreurs global
window.onerror = function(message, source, lineno, colno, error) {
  console.error("Erreur globale détectée:", message, source, error);
  // Ne pas retourner true pour permettre la propagation normale des erreurs
};
