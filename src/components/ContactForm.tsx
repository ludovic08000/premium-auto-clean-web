
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormValues } from "@/schemas/contactFormSchema";
import { sendEmail } from "@/services/EmailService";
import { generateCSRFToken, validateCSRFToken } from "@/services/CSRFService";
import PersonalInfoFields from "@/components/contact/PersonalInfoFields";
import VehicleSelector from "@/components/contact/VehicleSelector";
import ServiceSelector from "@/components/contact/ServiceSelector";
import DateSelector from "@/components/contact/DateSelector";
import TimeSelector from "@/components/contact/TimeSelector";
import MessageField from "@/components/contact/MessageField";
import { Send } from "lucide-react";
import { toast } from "sonner";

const ContactForm = () => {
  console.log("ContactForm component is rendering");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    console.log("ContactForm component is mounted");
    // Générer un token CSRF au chargement du composant
    const newToken = generateCSRFToken();
    setCsrfToken(newToken);
    
    return () => {
      console.log("ContactForm component is unmounting");
    };
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      vehicule: "",
      service: "",
      date: new Date(), // Date par défaut nécessaire
      heure: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    console.log("Submitting form with values:", values);
    
    // Vérification du token CSRF
    if (!validateCSRFToken(csrfToken)) {
      toast.error("Erreur de sécurité: veuillez rafraîchir la page et réessayer.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Ajoute le token CSRF aux données envoyées
      const valuesWithCSRF = { ...values, csrfToken };
      const success = await sendEmail(valuesWithCSRF);
      if (success) {
        form.reset();
        // Générer un nouveau token CSRF après soumission réussie
        const newToken = generateCSRFToken();
        setCsrfToken(newToken);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-8 gold-gradient-text">
        Demandez un rendez-vous
      </h2>
      <div className="card-premium p-6 md:p-8 max-w-4xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {/* Champ caché pour le token CSRF */}
            <input type="hidden" name="csrf_token" value={csrfToken} />
            
            <PersonalInfoFields form={form} />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <VehicleSelector form={form} />
              <ServiceSelector form={form} />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <DateSelector form={form} />
              <TimeSelector form={form} />
            </div>
            
            <div className="grid grid-cols-1">
              <MessageField form={form} />
            </div>
            
            <Button
              type="submit"
              className="w-full bg-gradient-gold text-dark font-medium hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Envoi en cours..." : (
                <span className="flex items-center justify-center gap-2">
                  <Send className="h-4 w-4" />
                  Envoyer la demande
                </span>
              )}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ContactForm;
