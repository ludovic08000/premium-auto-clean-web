
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
      "description": "Service professionnel de lavage et nettoyage automobile intérieur et extérieur. Détailing, polissage, traitement céramique, rénovation des phares.",
      "url": window.location.href,
      "image": "https://lovable.dev/opengraph-image-p98pqg.png",
      "telephone": "+33612345678",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "7 Rue des Laveurs",
        "addressLocality": "Charleville-Mézières",
        "postalCode": "08000",
        "addressCountry": "FR"
      },
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
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
          "opens": "09:00",
          "closes": "19:00"
        },
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Saturday"],
          "opens": "09:00",
          "closes": "17:00"
        }
      ],
      "sameAs": [
        "https://www.facebook.com/premiumautoclean",
        "https://www.instagram.com/premium_auto_clean"
      ],
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de nettoyage automobile",
        "itemListElement": [
          {
            "@type": "Offer",
            "name": "Nettoyage Complet",
            "description": "Nettoyage intérieur et extérieur approfondi"
          },
          {
            "@type": "Offer",
            "name": "Lavage Extérieur",
            "description": "Lavage à la main et protection de la carrosserie"
          },
          {
            "@type": "Offer",
            "name": "Détailing Automobile",
            "description": "Service premium de polissage et lustrage"
          }
        ]
      }
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
      <main className="animate-fade-in" itemScope itemType="https://schema.org/AutoRepair">
        <meta itemProp="name" content="Premium Auto Clean" />
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
