
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
    
    // Préparation des données pour l'envoi par EmailJS
    const templateParams = {
      from_name: data.nom,
      from_email: data.email,
      telephone: data.telephone,
      vehicule: data.vehicule,
      service: data.service,
      date_souhaitee: data.date,
      message: data.message,
    };
    
    // Envoi de l'email avec EmailJS
    const response = await emailjs.send(
      "premium_smtp", // Service ID
      "template_gw4kn1m", // Template ID
      templateParams
    );
    
    console.log("Réponse d'EmailJS:", response);
    
    if (response.status === 200) {
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
