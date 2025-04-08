import { useState, useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { v4 as uuidv4 } from "uuid";

const formSchema = z.object({
  nom: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  telephone: z.string().min(10, "Le numéro de téléphone doit contenir au moins 10 chiffres"),
  vehicule: z.string().min(1, "Veuillez sélectionner un type de véhicule"),
  service: z.string().min(1, "Veuillez sélectionner un service"),
  date: z.date({
    required_error: "Veuillez sélectionner une date",
  }),
  heure: z.string().min(1, "Veuillez sélectionner une heure"),
  message: z.string().optional(),
});

type FormValues = z.infer<typeof formSchema>;

const heures = [
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

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      nom: "",
      email: "",
      telephone: "",
      vehicule: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (values: FormValues) => {
    console.log("Form submitted with values:", values);
    setIsSubmitting(true);
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

      // Stocker le rendez-vous dans localStorage pour l'admin
      const appointment = {
        id: uuidv4(),
        ...values,
        date: formattedDate,
        createdAt: new Date().toISOString(),
      };

      // Récupérer les rendez-vous existants ou initialiser un tableau vide
      const existingAppointments = JSON.parse(localStorage.getItem("appointments") || "[]");
      const updatedAppointments = [...existingAppointments, appointment];
      localStorage.setItem("appointments", JSON.stringify(updatedAppointments));

      // Afficher un message de succès
      toast({
        title: "Demande envoyée !",
        description:
          "Nous avons bien reçu votre demande de rendez-vous. Un email de confirmation vous a été envoyé.",
        variant: "default",
      });

      // Réinitialiser le formulaire
      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi du formulaire:", error);
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer.",
        variant: "destructive",
      });
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="nom"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nom</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Votre nom"
                      className="bg-dark border-gold/30 text-gold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="votre@email.com"
                      type="email"
                      className="bg-dark border-gold/30 text-gold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="telephone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Téléphone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="0600000000"
                      type="tel"
                      className="bg-dark border-gold/30 text-gold"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="vehicule"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Type de véhicule</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-dark border-gold/30 text-gold">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-dark border-gold/30 text-gold">
                      <SelectItem value="Citadine">Citadine</SelectItem>
                      <SelectItem value="Berline">Berline</SelectItem>
                      <SelectItem value="SUV">SUV</SelectItem>
                      <SelectItem value="Utilitaire">Utilitaire</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="service"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Service souhaité</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-dark border-gold/30 text-gold">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-dark border-gold/30 text-gold">
                      <SelectItem value="Lavage intérieur">Lavage intérieur</SelectItem>
                      <SelectItem value="Lavage extérieur">Lavage extérieur</SelectItem>
                      <SelectItem value="Lavage complet">Lavage complet</SelectItem>
                      <SelectItem value="Rénovation esthétique">Rénovation esthétique</SelectItem>
                      <SelectItem value="Traitement céramique">Traitement céramique</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="date"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Date souhaitée</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant={"outline"}
                          className={cn(
                            "w-[240px] bg-dark border-gold/30 text-gold justify-start text-left font-normal",
                            !field.value && "text-muted-foreground"
                          )}
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {field.value ? (
                            format(field.value, "dd MMMM yyyy", {
                              locale: fr,
                            })
                          ) : (
                            <span>Choisir une date</span>
                          )}
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 mt-5 bg-dark border-gold/30 text-gold" align="center" side="bottom">
                      <Calendar
                        mode="single"
                        locale={fr}
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) =>
                          date < new Date() || date > new Date(new Date().setDate(new Date().getDate() + 30))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1">
            <FormField
              control={form.control}
              name="heure"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Heure souhaitée</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-dark border-gold/30 text-gold">
                        <SelectValue placeholder="Sélectionner" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent className="bg-dark border-gold/30 text-gold">
                      {heures.map((heure) => (
                        <SelectItem key={heure} value={heure}>
                          {heure}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1">
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message (facultatif)</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Votre message"
                      className="bg-dark border-gold/30 text-gold resize-none"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
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
