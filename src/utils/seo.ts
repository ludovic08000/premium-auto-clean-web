
/**
 * Utilitaires pour le SEO et la compatibilité avec Google
 */

/**
 * Génère un lien canonique pour la page actuelle
 * @param path - Chemin à ajouter à l'URL de base (facultatif)
 * @returns L'URL canonique complète
 */
export const getCanonicalUrl = (path?: string): string => {
  const baseUrl = 'https://premiumautoclean.com';
  if (!path) {
    return baseUrl;
  }
  
  // Nettoyer le chemin pour s'assurer qu'il n'y a pas de doubles slashes
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${baseUrl}${cleanPath}`;
};

/**
 * Génère une structure de données structurées (JSON-LD) pour le SEO local
 * @param pageSpecificData - Données spécifiques à la page à fusionner avec les données de base
 * @returns Objet JSON-LD prêt à être sérialisé
 */
export const generateLocalBusinessSchema = (pageSpecificData?: Record<string, any>) => {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Premium Auto Clean",
    "description": "Service professionnel de lavage, nettoyage écologique et détailing automobile haut de gamme. Protection céramique, rénovation des phares, préparation esthétique complète.",
    "url": window.location.href,
    "image": "/assets/images/premium-auto-clean-og.png",
    "telephone": "+33612345678",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "7 Rue des Laveurs",
      "addressLocality": "Charleville-Mézières",
      "postalCode": "08000",
      "addressCountry": "FR"
    }
    // Autres propriétés de base...
  };

  if (pageSpecificData) {
    return { ...baseSchema, ...pageSpecificData };
  }

  return baseSchema;
};

/**
 * Ajoute un script JSON-LD au document
 * @param jsonLdData - Données JSON-LD à ajouter
 * @returns Fonction de nettoyage pour supprimer le script
 */
export const addJsonLdScript = (jsonLdData: Record<string, any>): (() => void) => {
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.text = JSON.stringify(jsonLdData);
  document.head.appendChild(script);
  
  return () => {
    if (document.head.contains(script)) {
      document.head.removeChild(script);
    }
  };
};

/**
 * Met à jour les métadonnées Open Graph pour une page
 * @param title - Titre de la page
 * @param description - Description de la page
 * @param image - URL de l'image (relative à la racine)
 */
export const updateOpenGraphMetadata = (title: string, description: string, image?: string): void => {
  const updateMetaTag = (property: string, content: string) => {
    let metaTag = document.querySelector(`meta[property="${property}"]`);
    if (!metaTag) {
      metaTag = document.createElement('meta');
      metaTag.setAttribute('property', property);
      document.head.appendChild(metaTag);
    }
    metaTag.setAttribute('content', content);
  };

  updateMetaTag('og:title', title);
  updateMetaTag('og:description', description);
  if (image) {
    updateMetaTag('og:image', image);
  }
  updateMetaTag('og:url', window.location.href);
};
