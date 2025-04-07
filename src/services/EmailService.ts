
import { toast } from "@/hooks/use-toast";

interface EmailData {
  nom: string;
  email: string;
  telephone: string;
  vehicule: string;
  service: string;
  date: string;
  message: string;
}

export const sendEmail = async (data: EmailData): Promise<boolean> => {
  try {
    // Préparation des données pour l'email
    const emailBody = `
      Nouvelle demande de rendez-vous:
      
      Nom: ${data.nom}
      Email: ${data.email}
      Téléphone: ${data.telephone}
      Véhicule: ${data.vehicule}
      Service souhaité: ${data.service}
      Date souhaitée: ${data.date}
      Message: ${data.message}
    `;

    // Utilisation d'un service d'email public sans restrictions CORS
    const response = await fetch("https://api.emailjs.com/api/v1.0/email/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        service_id: "service_6ce2hd9",
        template_id: "template_76ctkdq",
        user_id: "C4RfX7p0zZkni7pZD",
        template_params: {
          from_name: data.nom,
          from_email: data.email,
          telephone: data.telephone,
          vehicule: data.vehicule,
          service: data.service,
          date_souhaitee: data.date,
          message: data.message,
          to_email: "contact@premiumautoclean.com",
          subject: `Nouvelle demande de rendez-vous de ${data.nom}`
        }
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur lors de l'envoi de l'email:", errorData);
      toast({
        title: "Erreur d'envoi",
        description: "Le message n'a pas pu être envoyé. Veuillez réessayer ou nous contacter par téléphone.",
        variant: "destructive",
        duration: 5000,
      });
      return false;
    }

    toast({
      title: "Message envoyé",
      description: "Votre demande a été envoyée avec succès. Nous vous contacterons bientôt.",
      duration: 5000,
    });

    return true;
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
