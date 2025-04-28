
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Vérifier si le conteneur root existe
const rootElement = document.getElementById("root");

if (!rootElement) {
  console.error("Élément root non trouvé dans le DOM");
} else {
  // Ajouter une classe pour signaler que JavaScript est chargé
  document.documentElement.classList.add('js-loaded');
  
  // Utilisation de StrictMode pour détecter les problèmes potentiels
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}
