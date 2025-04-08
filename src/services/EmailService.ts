
import { toast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";

interface EmailData {
  nom: string;
  email: string;
  telephone: string;
  vehicule: string;
  service: string;
  date: string;
  message: string;
}

// Initialize EmailJS
emailjs.init("bzjjpS39IdapP6Fpp"); // Public key

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log("Préparation des données pour EmailJS:", data);
    
    // Préparation des données pour l'envoi par EmailJS (notification admin)
    const adminTemplateParams = {
      from_name: data.nom,
      from_email: data.email,
      telephone: data.telephone,
      vehicule: data.vehicule,
      service: data.service,
      date_souhaitee: data.date,
      message: data.message,
      to_email: "contact@premiumautoclean.com",
      subject: "📅 Nouveau RDV client - " + data.nom,
    };
    
    // Envoi de l'email avec EmailJS (notification admin)
    const adminResponse = await emailjs.send(
      "premium_smtp", // Service ID
      "template_gw4kn1m", // Template ID
      adminTemplateParams
    );
    
    console.log("Réponse d'EmailJS (admin):", adminResponse);
    
    // Préparation des paramètres spécifiques pour le client (email de confirmation)
    // Important: Le client email doit être passé en tant que 'reply_to' pour le template EmailJS
    const clientTemplateParams = {
      to_name: data.nom,
      reply_to: data.email, // Utiliser reply_to pour l'email du destinataire
      service: data.service,
      vehicule: data.vehicule,
      date_souhaitee: data.date,
      message: "Merci pour votre demande de rendez-vous. Nous vous contacterons dans les plus brefs délais pour confirmer votre rendez-vous.",
      subject: "✅ Confirmation RDV - Premium Auto Clean"
    };
    
    // Envoi de l'email de confirmation au client
    const clientResponse = await emailjs.send(
      "premium_smtp", // Service ID
      "template_gw4kn1m", // Template ID - utiliser le template existant
      clientTemplateParams
    );
    
    console.log("Réponse d'EmailJS (client):", clientResponse);
    
    if (adminResponse.status === 200 && clientResponse.status === 200) {
      toast({
        title: "Message envoyé",
        description: "Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.",
        duration: 5000,
      });
      return true;
    } else {
      toast({
        title: "Erreur d'envoi",
        description: "Le message n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.",
        variant: "destructive",
        duration: 5000,
      });
      return false;
    }
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    toast({
      title: "Erreur d'envoi",
      description: "Le message n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.",
      variant: "destructive",
      duration: 5000,
    });
    return false;
  }
};
