
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
import { Send, Phone, Mail, MapPin, Terminal } from "lucide-react";
import { toast } from "sonner";
import { motion } from "framer-motion";

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
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-neon-cyan text-sm uppercase tracking-widest font-mono mb-4 block">
            // Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wider">
            Envoyez votre <span className="neon-text-cyan">demande</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="neon-card h-full">
              <div className="flex items-center gap-2 mb-6">
                <Terminal className="text-neon-cyan" size={20} />
                <span className="font-mono text-sm text-neon-cyan">CONTACT_INFO</span>
              </div>
              
              <p className="text-muted-foreground mb-8 font-mono text-sm">
                {">"} Décrivez votre problème<br />
                {">"} On vous rappelle rapidement
              </p>
              
              <div className="space-y-6">
                <a href="tel:0649754342" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-neon-cyan/30 group-hover:border-neon-cyan transition-colors">
                    <Phone className="text-neon-cyan" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Téléphone</div>
                    <span className="font-display font-bold group-hover:neon-text-cyan transition-all">06 49 75 43 42</span>
                  </div>
                </a>
                
                <a href="mailto:ludovic43@msn.com" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 flex items-center justify-center border border-neon-magenta/30 group-hover:border-neon-magenta transition-colors">
                    <Mail className="text-neon-magenta" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Email</div>
                    <span className="font-display font-bold group-hover:neon-text-magenta transition-all">ludovic43@msn.com</span>
                  </div>
                </a>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center border border-neon-purple/30">
                    <MapPin className="text-accent" size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-mono uppercase">Horaires</div>
                    <span className="font-display font-bold">Lun-Ven : 9h-18h</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="neon-card">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-neon-green animate-pulse" />
                <span className="font-mono text-sm text-muted-foreground">FORM_ACTIVE</span>
              </div>

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
                    className="w-full btn-primary !py-4"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2 font-mono">
                        <div className="w-4 h-4 border-2 border-neon-cyan border-t-transparent rounded-full animate-spin" />
                        PROCESSING...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2 relative z-10">
                        <Send size={18} />
                        ENVOYER
                      </span>
                    )}
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
