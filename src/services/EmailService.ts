
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
    console.log("Envoi des données au script PHP:", data);
    
    // Chemin vers votre script PHP sur le serveur
    const phpScriptUrl = "/send-email.php"; // Assurez-vous que ce chemin est correct
    
    const response = await fetch(phpScriptUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
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
    
    const result = await response.json();
    console.log("Réponse du script PHP:", result);
    
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
