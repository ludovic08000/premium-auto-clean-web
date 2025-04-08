
import { toast } from "@/hooks/use-toast";
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

// Initialize EmailJS
emailjs.init("bzjjpS39IdapP6Fpp"); // Public key

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    console.log("Préparation des données pour EmailJS:", data);
    
    // Préparation des données pour l'envoi par EmailJS (notification admin)
    const adminTemplateParams = {
      nom: data.nom, // Utilise le format {{nom}} dans le template
      email: data.email, // Utilise le format {{email}} dans le template
      telephone: data.telephone, // Utilise le format {{telephone}} dans le template
      vehicule: data.vehicule, // Utilise le format {{vehicule}} dans le template
      service: data.service, // Utilise le format {{service}} dans le template
      date: data.date, // Utilise le format {{date}} dans le template
      heure: data.heure, // Utilise le format {{heure}} dans le template
      message: data.message, // Utilise le format {{message}} dans le template
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
    
    // Configuration pour l'email auto-reply au client - s'assurer que tous les champs nécessaires sont remplis
    const clientTemplateParams = {
      to_name: data.nom || "Client",
      to_email: data.email,
      reply_to: "contact@premiumautoclean.com",
      from_name: "Premium Auto Clean",
      from_email: "contact@premiumautoclean.com",
      service: data.service || "Service demandé",
      vehicule: data.vehicule || "Véhicule",
      date: data.date || "À confirmer", // Format date
      heure: data.heure || "À confirmer", // Heure spécifique du rendez-vous
      date_souhaitee: `${data.date || "À confirmer"} à ${data.heure || "À confirmer"}`, // Combinaison date et heure
      subject: "✅ Confirmation RDV - Premium Auto Clean",
      email: data.email,
      nom: data.nom, // Ajout pour la compatibilité avec les variables {{nom}} dans le template client
      telephone: data.telephone, // Ajout pour la compatibilité avec {{telephone}}
      message: data.message // Ajout pour la compatibilité avec {{message}}
    };
    
    console.log("Envoi de confirmation au client:", clientTemplateParams);
    
    // Envoi de l'email de confirmation au client avec le template auto-reply
    const clientResponse = await emailjs.send(
      "premium_smtp", // Service ID
      "template_x6ttulj", // Template ID d'auto-réponse
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
