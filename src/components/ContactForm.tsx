
import { useState } from "react";
import { Phone, Mail, Home, Calendar } from "lucide-react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    telephone: "",
    vehicule: "",
    service: "",
    date: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{type: string; text: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simuler l'envoi du formulaire
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitMessage({
        type: "success",
        text: "Votre demande a été envoyée avec succès. Nous vous contacterons dans les plus brefs délais."
      });
      
      // Reset form after successful submission
      setFormData({
        nom: "",
        email: "",
        telephone: "",
        vehicule: "",
        service: "",
        date: "",
        message: "",
      });
      
      // Clear success message after 5 seconds
      setTimeout(() => setSubmitMessage(null), 5000);
    }, 1500);
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
              
              <div className="mb-4">
                <label htmlFor="date" className="block mb-2 text-gold/80">Date souhaitée</label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-dark-light border border-gold/30 rounded-md px-4 py-2 text-gold focus:border-gold focus:outline-none"
                />
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
                disabled={isSubmitting}
                className="w-full btn-gold flex justify-center items-center"
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
