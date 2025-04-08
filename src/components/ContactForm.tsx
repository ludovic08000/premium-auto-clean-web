
import { useState } from "react";
import { Phone, Mail, Home, Calendar, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { sendEmail } from "@/services/EmailService";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const { toast } = useToast();
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    vehicule: "",
    service: "",
    date: "",
    heure: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string; text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDateSelect = (selectedDate: Date | undefined) => {
    setDate(selectedDate);
    if (selectedDate) {
      setFormData((prev) => ({ 
        ...prev, 
        date: format(selectedDate, 'yyyy-MM-dd')
      }));
    }
  };

  const handleHeureChange = (value: string) => {
    setFormData((prev) => ({ ...prev, heure: value }));
  };

  // Génération des créneaux horaires disponibles
  const generateHeures = () => {
    const heures = [];
    for (let h = 9; h <= 18; h++) {
      if (h !== 12 && h !== 13) { // Exclure la pause déjeuner
        heures.push(`${h}:00`);
        heures.push(`${h}:30`);
      }
    }
    return heures;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage(null);
    
    try {
      // Envoi du formulaire via le service email
      const success = await sendEmail({
        ...formData,
        date: date ? `${format(date, 'dd/MM/yyyy', { locale: fr })} à ${formData.heure}` : ""
      });
      
      if (success) {
        setSubmitMessage({
          type: "success",
          text: "Votre demande a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais."
        });
        
        toast({
          title: "Demande envoyée",
          description: "Nous avons bien reçu votre demande et vous contacterons prochainement.",
          duration: 5000,
        });
        
        // Reset form after successful submission
        setFormData({
          nom: "",
          email: "",
          telephone: "",
          vehicule: "",
          service: "",
          date: "",
          heure: "",
          message: "",
        });
        setDate(undefined);
      } else {
        setSubmitMessage({
          type: "error",
          text: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou nous contacter par téléphone."
        });
        
        toast({
          title: "Erreur",
          description: "Problème lors de l'envoi du formulaire. Veuillez réessayer.",
          variant: "destructive",
          duration: 5000,
        });
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
      setSubmitMessage({
        type: "error",
        text: "Une erreur est survenue lors de l'envoi de votre demande. Veuillez réessayer ou nous contacter par téléphone."
      });
      
      toast({
        title: "Erreur",
        description: "Problème lors de l'envoi du formulaire. Veuillez réessayer.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Prendre Rendez-vous</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="bg-dark p-6 rounded-lg border border-gold/30">
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="nom" className="block mb-2 text-gold/80">Nom complet</label>
                <input
                  type="text"
                  id="nom"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none"
                  required
                />
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="email" className="block mb-2 text-gold/80">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="telephone" className="block mb-2 text-gold/80">Téléphone</label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none"
                    required
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label htmlFor="vehicule" className="block mb-2 text-gold/80">Type de véhicule</label>
                  <select
                    id="vehicule"
                    name="vehicule"
                    value={formData.vehicule}
                    onChange={handleChange}
                    className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none"
                    required
                  >
                    <option value="">Sélectionnez</option>
                    <option value="classique">Véhicule Classique</option>
                    <option value="suv">SUV</option>
                    <option value="utilitaire">Utilitaire</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="service" className="block mb-2 text-gold/80">Service souhaité</label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none"
                    required
                  >
                    <option value="">Sélectionnez</option>
                    <option value="complet">Nettoyage Complet</option>
                    <option value="interieur">Nettoyage Intérieur</option>
                    <option value="exterieur">Nettoyage Extérieur</option>
                    <option value="abonnement">Abonnement Mensuel</option>
                    <option value="autre">Autre (précisez dans le message)</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block mb-2 text-gold/80">Date souhaitée</label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full bg-dark-light border border-gold/30 text-left p-2 font-normal",
                          !date && "text-gold/50"
                        )}
                      >
                        <Calendar className="mr-2 h-4 w-4 text-gold" />
                        {date ? format(date, "dd MMMM yyyy", { locale: fr }) : <span>Choisir une date</span>}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0 bg-dark border border-gold/30" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={handleDateSelect}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div>
                  <label className="block mb-2 text-gold/80">Heure souhaitée</label>
                  <Select
                    value={formData.heure}
                    onValueChange={handleHeureChange}
                  >
                    <SelectTrigger className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none">
                      <SelectValue placeholder="Sélectionner une heure" />
                    </SelectTrigger>
                    <SelectContent className="bg-dark border border-gold/30">
                      {generateHeures().map((heure) => (
                        <SelectItem key={heure} value={heure} className="text-gold hover:bg-gold/10">
                          {heure}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block mb-2 text-gold/80">Message (optionnel)</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !date || !formData.heure}
                className="w-full btn-gold flex justify-center items-center disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span className="inline-block w-5 h-5 border-2 border-dark border-t-transparent rounded-full animate-spin mr-2"></span>
                ) : null}
                {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
              </button>
              
              {submitMessage && (
                <div className={`mt-4 p-3 rounded ${submitMessage.type === "success" ? "bg-green-900/30 text-green-200 border border-green-800" : "bg-red-900/30 text-red-200 border border-red-800"}`}>
                  {submitMessage.text}
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-6">Contactez-nous</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-dark border border-gold/30">
                    <Phone className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Téléphone</h4>
                    <a href="tel:0649754342" className="text-gold/80 hover:text-gold transition-colors">06 49 75 43 42</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-dark border border-gold/30">
                    <Mail className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <a href="mailto:contact@premiumautoclean.com" className="text-gold/80 hover:text-gold transition-colors">contact@premiumautoclean.com</a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-dark border border-gold/30">
                    <Home className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Adresse</h4>
                    <address className="text-gold/80 not-italic">
                      19 chemin du haut du thuex<br />
                      08000 Charleville-Mézières
                    </address>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-dark border border-gold/30">
                    <Calendar className="h-5 w-5 text-gold" />
                  </div>
                  <div>
                    <h4 className="font-bold mb-1">Horaires d'ouverture</h4>
                    <p className="text-gold/80">
                      Lundi - Vendredi: 9h - 19h<br />
                      Samedi: 9h - 18h<br />
                      Dimanche: Sur rendez-vous
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-6 bg-dark rounded-lg border border-gold/30">
              <h4 className="font-bold mb-2">SIRET</h4>
              <p className="text-gold/80">98515908600018</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
