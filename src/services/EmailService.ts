
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
    // Préparation des données pour l'API SendMail
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

    // Configuration pour l'API SendMail
    const sendMailerConfig = {
      from: "noreply@premiumautoclean.com",
      to: "contact@premiumautoclean.com",
      subject: `Nouvelle demande de rendez-vous de ${data.nom}`,
      text: emailBody,
      smtp: {
        user: "contact@premiumautoclean.com",
        password: "Hp+fkj!?21121982",
        host: "smtp.ionos.fr",
        port: 587,
        secure: false
      },
      token: "mlsn.89a01f8fc4132c06f141f73579a9f882a7fdbeed8f9953a57e601fa4de14cf4a"
    };

    // Appel à l'API SendMail
    const response = await fetch("https://api.sendmail.to/v1/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${sendMailerConfig.token}`
      },
      body: JSON.stringify({
        from: sendMailerConfig.from,
        to: sendMailerConfig.to,
        subject: sendMailerConfig.subject,
        text: sendMailerConfig.text,
        smtp: sendMailerConfig.smtp
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erreur lors de l'envoi de l'email:", errorData);
      return false;
    }

    return true;
  } catch (error) {
    console.error("Erreur lors de l'envoi de l'email:", error);
    return false;
  }
};
