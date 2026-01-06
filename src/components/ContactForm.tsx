
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
import { Send, Phone, Mail, MapPin } from "lucide-react";
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
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div>
            <h2 className="section-heading">Contactez-nous</h2>
            <p className="text-muted-foreground mb-8">
              Décrivez votre problème et on vous rappelle rapidement pour en discuter.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Phone className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Téléphone</div>
                  <a href="tel:0649754342" className="font-semibold hover:text-primary">06 49 75 43 42</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Mail className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Email</div>
                  <a href="mailto:ludovic43@msn.com" className="font-semibold hover:text-primary">ludovic43@msn.com</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                  <MapPin className="text-primary" size={20} />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Horaires</div>
                  <div className="font-semibold">Lun-Ven : 9h-18h</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-card rounded-2xl p-6 md:p-8 shadow-sm border border-border">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
                  
                  <MessageField form={form} />
                  
                  <Button
                    type="submit"
                    className="w-full btn-primary"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Envoi en cours..." : (
                      <span className="flex items-center justify-center gap-2">
                        <Send size={18} />
                        Envoyer ma demande
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
