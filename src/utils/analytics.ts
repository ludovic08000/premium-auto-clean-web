
/**
 * Utilitaires pour l'intégration de Google Analytics
 */

// Identifiant de mesure Google Analytics (remplacer par votre propre ID)
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

/**
 * Initialise Google Analytics
 */
export const initializeGA = (): void => {
  // Ne charger GA que si l'ID est configuré et que nous sommes en production
  if (GA_MEASUREMENT_ID === 'G-XXXXXXXXXX' || import.meta.env.DEV) {
    console.log('Google Analytics non initialisé: ID non configuré ou environnement de développement');
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
 * Envoie un événement à Google Analytics
 * @param eventName - Nom de l'événement
 * @param params - Paramètres de l'événement
 */
export const sendGAEvent = (eventName: string, params = {}): void => {
  if (!window.gtag) {
    console.log('Google Analytics non initialisé');
    return;
  }
  window.gtag('event', eventName, params);
};

/**
 * Enregistre une page vue dans Google Analytics
 * @param pagePath - Chemin de la page (facultatif, utilise window.location.pathname par défaut)
 * @param pageTitle - Titre de la page (facultatif, utilise document.title par défaut)
 */
export const sendPageView = (pagePath?: string, pageTitle?: string): void => {
  const path = pagePath || window.location.pathname;
  const title = pageTitle || document.title;
  
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
