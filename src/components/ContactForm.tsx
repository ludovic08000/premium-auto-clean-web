
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { contactFormSchema, ContactFormValues } from "@/schemas/contactFormSchema";
import { submitContactForm } from "@/services/ContactService";
import PersonalInfoFields from "@/components/contact/PersonalInfoFields";
import VehicleSelector from "@/components/contact/VehicleSelector";
import ServiceSelector from "@/components/contact/ServiceSelector";
import DateSelector from "@/components/contact/DateSelector";
import TimeSelector from "@/components/contact/TimeSelector";
import MessageField from "@/components/contact/MessageField";

const ContactForm = () => {
  console.log("ContactForm component is rendering");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    console.log("ContactForm component is mounted");
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
      message: "",
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setIsSubmitting(true);
    try {
      await submitContactForm(values, toast);
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="container py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Demandez un rendez-vous
      </h2>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
            className="w-full bg-gold text-dark hover:bg-gold/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer la demande"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default ContactForm;
