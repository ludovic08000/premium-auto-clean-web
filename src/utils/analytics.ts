
/**
 * Utilitaires pour l'intégration de Google Analytics et Google Tag Manager
 */

// Identifiant de mesure Google Analytics (remplacer par votre propre ID)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';
// Identifiant Google Tag Manager
const GTM_ID = 'GTM-NVT9633P';

/**
 * Initialise Google Analytics et vérifie la présence de GTM
 */
export const initializeGA = (): void => {
  // Vérifie si Google Tag Manager est déjà chargé
  if (window.dataLayer) {
    console.log('Google Tag Manager déjà chargé');
  }
  
  // Ne charger GA directement que si l'ID est configuré, GTM n'est pas présent, et que nous sommes en production
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX' || window.dataLayer || import.meta.env.DEV) {
    console.log('Chargement direct de Google Analytics ignoré: ID non configuré, GTM déjà présent, ou environnement de développement');
    return;
  }

  // Charger le script Google Analytics
  const script = document.createElement('script');
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  script.async = true;
  document.head.appendChild(script);
  
  // Initialiser Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);
  
  console.log('Google Analytics initialisé avec succès');
};

/**
 * Envoie un événement à Google Analytics/GTM
 * @param eventName - Nom de l'événement
 * @param params - Paramètres de l'événement
 */
export const sendGAEvent = (eventName: string, params = {}): void => {
  if (window.dataLayer) {
    // Utiliser Google Tag Manager si disponible
    window.dataLayer.push({
      event: eventName,
      ...params
    });
    console.log(`Événement '${eventName}' envoyé via GTM`, params);
    return;
  }
  
  if (!window.gtag) {
    console.log('Google Analytics non initialisé');
    return;
  }
  window.gtag('event', eventName, params);
};

/**
 * Enregistre une page vue dans Google Analytics/GTM
 * @param pagePath - Chemin de la page (facultatif, utilise window.location.pathname par défaut)
 * @param pageTitle - Titre de la page (facultatif, utilise document.title par défaut)
 */
export const sendPageView = (pagePath?: string, pageTitle?: string): void => {
  const path = pagePath || window.location.pathname;
  const title = pageTitle || document.title;
  
  if (window.dataLayer) {
    // Utiliser Google Tag Manager si disponible
    window.dataLayer.push({
      event: 'page_view',
      page_path: path,
      page_title: title,
      page_location: window.location.href
    });
    console.log(`Page vue envoyée via GTM: ${path}`);
    return;
  }
  
  if (!window.gtag) {
    console.log('Google Analytics non initialisé');
    return;
  }
  
  window.gtag('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href
  });
};

/**
 * Suit les clics sur les liens externes
 * @param element - Élément DOM à surveiller (par défaut, document.body)
 */
export const trackExternalLinks = (element: HTMLElement = document.body): void => {
  element.addEventListener('click', (event) => {
    const target = event.target as HTMLElement;
    const link = target.closest('a');
    
    if (link && link.href && link.hostname !== window.location.hostname) {
      sendGAEvent('external_link_click', {
        url: link.href,
        text: link.innerText || link.textContent,
      });
    }
  });
};

// Déclarer les types pour TypeScript
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
  }
}
