
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fonction d'initialisation robuste pour l'environnement de prévisualisation
function initializeApp() {
  try {
    console.log("Initialisation de l'application via main.jsx...");
    
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
      
      console.log("Application chargée avec succès via main.jsx");
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

// Exécution immédiate pour l'environnement de prévisualisation
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    console.log("Initialisation via DOMContentLoaded (JSX)");
    initializeApp();
  });
} else {
  console.log("Initialisation immédiate - DOM déjà chargé (JSX)");
  initializeApp();
}

// Ajouter un écouteur d'événements comme solution de secours
window.addEventListener('load', function() {
  if (!document.documentElement.classList.contains('js-loaded')) {
    console.log("Seconde tentative d'initialisation (JSX)...");
    initializeApp();
  }
});

// Ajouter un écouteur sur DOMContentLoaded pour une initialisation plus rapide
document.addEventListener('DOMContentLoaded', function() {
  if (!document.documentElement.classList.contains('js-loaded')) {
    console.log("Initialisation via DOMContentLoaded (JSX)...");
    initializeApp();
  }
});

// Système de secours supplémentaire - initialisation différée
setTimeout(function() {
  if (!document.documentElement.classList.contains('js-loaded')) {
    console.log("Initialisation différée après délai (JSX)...");
    initializeApp();
  }
}, 750); // Délai légèrement plus court que le main.tsx pour éviter les conflits
