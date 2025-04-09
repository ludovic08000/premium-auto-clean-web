
import { toast } from "sonner";
import emailjs from "emailjs-com";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { ContactFormValues } from "@/schemas/contactFormSchema";

// Initialize EmailJS avec la clé publique
emailjs.init("bzjjpS39IdapP6Fpp");

export const sendEmail = async (values: ContactFormValues): Promise<boolean> => {
  console.log("Form submitted with values:", values);
  
  try {
    const formattedDate = format(values.date, "dd/MM/yyyy", { locale: fr });
    const formattedDateTime = `${formattedDate} à ${values.heure}`;
    
    // Préparation des données pour l'envoi par EmailJS (notification admin)
    const adminTemplateParams = {
      to_name: "Administration Premium Auto Clean",
      from_name: values.nom,
      reply_to: values.email,
      subject: `Nouvelle demande de ${values.service}`,
      nom: values.nom,
      email: values.email,
      telephone: values.telephone,
      vehicule: values.vehicule,
      service: values.service,
      date: formattedDateTime,
      message: values.message || "",
      to_email: "contact@premiumautoclean.com",
    };
    
    console.log("Préparation des données pour EmailJS:", adminTemplateParams);
    
    // Envoi de l'email avec EmailJS (notification admin)
    const adminResponse = await emailjs.send(
      "premium_smtp",
      "template_gw4kn1m",
      adminTemplateParams
    );
    
    console.log("Réponse d'EmailJS (admin):", adminResponse);
    
    // Configuration pour l'email auto-reply au client
    const clientTemplateParams = {
      to_name: values.nom || "Client",
      to_email: values.email,
      reply_to: "contact@premiumautoclean.com",
      from_name: "Premium Auto Clean",
      from_email: "contact@premiumautoclean.com",
      service: values.service || "Service demandé",
      vehicule: values.vehicule || "Véhicule",
      date: formattedDateTime,
      date_souhaitee: formattedDateTime,
      subject: "✅ Confirmation RDV - Premium Auto Clean",
      email: values.email,
      nom: values.nom,
      telephone: values.telephone,
      message: values.message || ""
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
    console.error("Erreur lors de l'envoi de l'email:", error, typeof error);
    // Affichage d'informations plus détaillées sur l'erreur
    if (error instanceof Error) {
      toast.error(`Erreur: ${error.message}`);
    } else {
      toast.error("Le message n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.");
    }
    return false;
  }
};

export const heures = [
  "9:00",
  "9:30",
  "10:00",
  "10:30",
  "11:00",
  "11:30",
  "14:00",
  "14:30",
  "15:00",
  "15:30",
  "16:00",
  "16:30",
  "17:00",
  "17:30",
];
