
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
    
    // Configuration pour l'email auto-reply au client
    const clientTemplateParams = {
      to_name: data.nom,
      to_email: data.email,
      service: data.service,
      vehicule: data.vehicule,
      date_souhaitee: data.date,
      subject: "✅ Confirmation RDV - Premium Auto Clean",
      from_name: "Premium Auto Clean",
      from_email: "contact@premiumautoclean.com"
    };
    
    // Envoi de l'email de confirmation au client avec le template auto-reply
    const clientResponse = await emailjs.send(
      "premium_smtp", // Service ID
      "template_x6ttulj", // Template ID d'auto-réponse fourni par l'utilisateur
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
