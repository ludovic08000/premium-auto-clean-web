
/**
 * Service anti-CSRF pour protéger les formulaires
 */

// Génère un token CSRF basé sur un timestamp et une clé aléatoire
export const generateCSRFToken = (): string => {
  const timestamp = new Date().getTime();
  const randomString = Math.random().toString(36).substring(2, 15);
  const token = `${timestamp}-${randomString}`;
  
  // Stocke le token dans le localStorage avec une expiration
  localStorage.setItem('csrf_token', token);
  localStorage.setItem('csrf_expiry', (timestamp + 3600000).toString()); // Expiration après 1 heure
  
  return token;
};

// Vérifie si le token CSRF est valide
export const validateCSRFToken = (token: string): boolean => {
  const storedToken = localStorage.getItem('csrf_token');
  const expiryTime = localStorage.getItem('csrf_expiry');
  
  // Vérifie si le token existe et n'est pas expiré
  if (!storedToken || !expiryTime) {
    return false;
  }
  
  const now = new Date().getTime();
  if (now > parseInt(expiryTime, 10)) {
    // Token expiré, nettoyer et générer un nouveau
    clearCSRFToken();
    return false;
  }
  
  return token === storedToken;
};

// Nettoie le token CSRF du localStorage
export const clearCSRFToken = (): void => {
  localStorage.removeItem('csrf_token');
  localStorage.removeItem('csrf_expiry');
};

// Configure une expiration de session pour l'utilisateur
export const setupSessionTimeout = (timeoutMinutes: number = 30): void => {
  const expiry = new Date().getTime() + (timeoutMinutes * 60 * 1000);
  localStorage.setItem('session_expiry', expiry.toString());
  
  // Vérifie périodiquement si la session a expiré
  const checkInterval = setInterval(() => {
    const expiryTime = localStorage.getItem('session_expiry');
    if (!expiryTime || new Date().getTime() > parseInt(expiryTime, 10)) {
      // Session expirée
      clearInterval(checkInterval);
      localStorage.removeItem('session_expiry');
      // Autres actions de nettoyage si nécessaire
    }
  }, 60000); // Vérifie toutes les minutes
};
