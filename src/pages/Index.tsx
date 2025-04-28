
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tarifs from "@/components/Tarifs";
import Abonnements from "@/components/Abonnements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { setupSessionTimeout } from "@/services/CSRFService";

const Index = () => {
  console.log("Index component is rendering");
  
  useEffect(() => {
    // Configuration d'un délai d'expiration de session de 30 minutes
    setupSessionTimeout(30);
    
    // Ajout des données structurées pour le SEO local
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Premium Auto Clean",
      "description": "Service professionnel de nettoyage automobile et à domicile",
      "url": window.location.href,
      "areaServed": [
        {
          "@type": "City",
          "name": "Charleville-Mézières"
        },
        {
          "@type": "City",
          "name": "Reims"
        }
      ],
      "priceRange": "€€",
      "servesCuisine": "Nettoyage automobile"
    };
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(jsonLd);
    document.head.appendChild(script);
    
    return () => {
      document.head.removeChild(script);
    };
  }, []);
  
  return (
    <div className="min-h-screen bg-dark text-gold">
      <Navbar />
      <main className="animate-fade-in">
        <Hero />
        <Services />
        <Tarifs />
        <Abonnements />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
