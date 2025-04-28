
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Fonction d'initialisation pour l'environnement de prévisualisation
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

// Exécution immédiate pour l'environnement de prévisualisation
initializeApp();

// Ajouter un écouteur d'événements comme solution de secours
window.addEventListener('load', function() {
  if (!document.documentElement.classList.contains('js-loaded')) {
    console.log("Seconde tentative d'initialisation...");
    initializeApp();
  }
});
