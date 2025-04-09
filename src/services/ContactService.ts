
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { v4 as uuidv4 } from "uuid";
import { useToast } from "@/hooks/use-toast";
import emailjs from "emailjs-com";
import { ContactFormValues } from "@/schemas/contactFormSchema";

export const submitContactForm = async (
  values: ContactFormValues,
  toast: ReturnType<typeof useToast>["toast"]
): Promise<boolean> => {
  console.log("Form submitted with values:", values);
  
  try {
    const formattedDate = format(values.date, "dd/MM/yyyy", { locale: fr });
    const formattedDateTime = `${formattedDate} à ${values.heure}`;

    // Préparation des données pour EmailJS
    const adminEmailParams = {
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
      heure: values.heure,
      message: values.message || "",
    };

    console.log("Préparation des données pour EmailJS:", adminEmailParams);

    // Envoi de l'email à l'administrateur
    const adminResponse = await emailjs.send(
      "service_3914d3h",
      "template_5j9515j",
      adminEmailParams,
      "user_OyZlQVaEnwlmw9rGJQJz8"
    );

    console.log("Réponse d'EmailJS (admin):", adminResponse);

    // Envoi d'une confirmation au client
    const clientEmailParams = {
      to_name: values.nom,
      to_email: values.email,
      reply_to: "contact@premiumautoclean.com",
      from_name: "Premium Auto Clean",
      from_email: "contact@premiumautoclean.com",
      service: values.service,
      vehicule: values.vehicule,
      date: formattedDateTime,
      heure: values.heure,
      date_souhaitee: `${formattedDateTime} à ${values.heure}`,
      subject: "✅ Confirmation RDV - Premium Auto Clean",
      ...values,
    };

    console.log("Envoi de confirmation au client:", clientEmailParams);

    // Envoi de l'email de confirmation au client
    const clientResponse = await emailjs.send(
      "service_3914d3h",
      "template_x6ttulj",
      clientEmailParams,
      "user_OyZlQVaEnwlmw9rGJQJz8"
    );

    console.log("Réponse d'EmailJS (client):", clientResponse);

    // Afficher un message de succès
    toast({
      title: "Demande envoyée !",
      description:
        "Nous avons bien reçu votre demande de rendez-vous. Un email de confirmation vous a été envoyé.",
      variant: "default",
    });
    
    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi du formulaire:", error);
    toast({
      title: "Erreur",
      description:
        "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
      variant: "destructive",
    });
    
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
