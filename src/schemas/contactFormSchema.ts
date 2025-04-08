
import { z } from "zod";

export const contactFormSchema = z.object({
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

export type ContactFormValues = z.infer<typeof contactFormSchema>;
