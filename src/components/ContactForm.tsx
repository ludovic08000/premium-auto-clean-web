
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [csrfToken, setCsrfToken] = useState("");

  useEffect(() => {
    const newToken = generateCSRFToken();
    setCsrfToken(newToken);
  }, []);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      vehicule: "",
      service: "",
      date: new Date(),
      heure: "",
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    if (!validateCSRFToken(csrfToken)) {
      toast.error("Erreur de sécurité: veuillez rafraîchir la page et réessayer.");
      return;
    }
    
    setIsSubmitting(true);
    try {
      const valuesWithCSRF = { ...values, csrfToken };
      const success = await sendEmail(valuesWithCSRF);
      if (success) {
        form.reset();
        const newToken = generateCSRFToken();
        setCsrfToken(newToken);
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="container py-16">
      <h2 className="section-heading text-center">
        Demandez un rendez-vous
      </h2>
      <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-8">
        Décrivez votre problème et nous vous recontacterons rapidement pour fixer un rendez-vous.
        Diagnostic gratuit pour toute demande de réparation.
      </p>
      <div className="card-premium p-6 md:p-8 max-w-4xl mx-auto">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
              className="w-full btn-primary"
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
