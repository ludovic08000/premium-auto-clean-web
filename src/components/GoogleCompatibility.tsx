
import { useEffect } from 'react';

interface GoogleCompatibilityProps {
  verificationCode?: string;
}

/**
 * Composant pour améliorer la compatibilité avec Google
 * Gère les meta tags de viewport, la vérification et autres paramètres essentiels
 */
const GoogleCompatibility: React.FC<GoogleCompatibilityProps> = ({ 
  verificationCode 
}) => {
  useEffect(() => {
    // Vérifier si le viewport meta tag est présent et correctement configuré
    let viewportMeta = document.querySelector('meta[name="viewport"]');
    if (!viewportMeta) {
      viewportMeta = document.createElement('meta');
      viewportMeta.setAttribute('name', 'viewport');
      document.head.appendChild(viewportMeta);
    }
    viewportMeta.setAttribute('content', 'width=device-width, initial-scale=1.0');
    
    // Fonctions de nettoyage
    return () => {
      // Aucun nettoyage nécessaire car ces meta tags doivent rester
    };
  }, [verificationCode]);

  return null; // Ce composant ne rend rien visuellement
};

export default GoogleCompatibility;
