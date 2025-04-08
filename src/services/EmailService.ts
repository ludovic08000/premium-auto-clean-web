
import { toast } from "sonner";
import emailjs from "emailjs-com";

interface EmailData {
  nom: string;
  email: string;
  telephone: string;
  vehicule: string;
  service: string;
  date: string;
  heure: string;
  message: string;
}

// Initialize EmailJS avec la clé publique
emailjs.init("bzjjpS39IdapP6Fpp");

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log("Préparation des données pour EmailJS:", data);
    
    // Préparation des données pour l'envoi par EmailJS (notification admin)
    const adminTemplateParams = {
      nom: data.nom,
      email: data.email,
      telephone: data.telephone,
      vehicule: data.vehicule,
      service: data.service,
      date: data.date,
      heure: data.heure,
      message: data.message,
      to_email: "contact@premiumautoclean.com",
      subject: "📅 Nouveau RDV client - " + data.nom,
    };
    
    // Envoi de l'email avec EmailJS (notification admin)
    const adminResponse = await emailjs.send(
      "premium_smtp",
      "template_gw4kn1m",
      adminTemplateParams
    );
    
    console.log("Réponse d'EmailJS (admin):", adminResponse);
    
    // Configuration pour l'email auto-reply au client
    const clientTemplateParams = {
      to_name: data.nom || "Client",
      to_email: data.email,
      reply_to: "contact@premiumautoclean.com",
      from_name: "Premium Auto Clean",
      from_email: "contact@premiumautoclean.com",
      service: data.service || "Service demandé",
      vehicule: data.vehicule || "Véhicule",
      date: data.date || "À confirmer",
      heure: data.heure || "À confirmer",
      date_souhaitee: `${data.date || "À confirmer"} à ${data.heure || "À confirmer"}`,
      subject: "✅ Confirmation RDV - Premium Auto Clean",
      email: data.email,
      nom: data.nom,
      telephone: data.telephone,
      message: data.message
    };
    
    console.log("Envoi de confirmation au client:", clientTemplateParams);
    
    // Envoi de l'email de confirmation au client avec le template auto-reply
    const clientResponse = await emailjs.send(
      "premium_smtp",
      "template_x6ttulj",
      clientTemplateParams
    );
    
    console.log("Réponse d'EmailJS (client):", clientResponse);
    
    if (adminResponse.status === 200 && clientResponse.status === 200) {
      toast.success("Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.");
      return true;
    } else {
      toast.error("Le message n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.");
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    toast.error("Le message n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.");
    return false;
  }
};
