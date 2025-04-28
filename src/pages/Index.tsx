
import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tarifs from "@/components/Tarifs";
import Abonnements from "@/components/Abonnements";
import FAQ from "@/components/FAQ";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { setupSessionTimeout } from "@/services/CSRFService";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  console.log("Index component is rendering");
  const { toast } = useToast();
  
  useEffect(() => {
    // S'assurer que les éléments DOM sont complètement chargés
    if (document.readyState === 'complete') {
      console.log("Document is fully loaded");
    } else {
      window.addEventListener('load', () => {
        console.log("Window load event fired");
      });
    }
    
    // Configuration d'un délai d'expiration de session de 30 minutes
    try {
      setupSessionTimeout(30);
    } catch (error) {
      console.error("Erreur lors de la configuration du timeout de session:", error);
      toast({
        title: "Avertissement",
        description: "Certaines fonctionnalités de sécurité peuvent être limitées.",
        variant: "destructive",
      });
    }
    
    // Ajout des données structurées pour le SEO local avec les chemins d'images corrigés
    try {
      const jsonLd = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Premium Auto Clean",
        "description": "Service professionnel de lavage, nettoyage écologique et détailing automobile haut de gamme. Protection céramique, rénovation des phares, préparation esthétique complète.",
        "url": window.location.href,
        "image": "/assets/images/premium-auto-clean-og.png",
        "telephone": "+33612345678",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "7 Rue des Laveurs",
          "addressLocality": "Charleville-Mézières",
          "postalCode": "08000",
          "addressCountry": "FR"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "49.7620",
          "longitude": "4.7210"
        },
        "areaServed": [
          {
            "@type": "City",
            "name": "Charleville-Mézières"
          },
          {
            "@type": "City",
            "name": "Reims"
          },
          {
            "@type": "City",
            "name": "Sedan"
          },
          {
            "@type": "City",
            "name": "Rethel"
          },
          {
            "@type": "City",
            "name": "Vouziers"
          },
          {
            "@type": "City",
            "name": "Givet"
          },
          {
            "@type": "City",
            "name": "Fumay"
          },
          {
            "@type": "City",
            "name": "Nouzonville"
          },
          {
            "@type": "City",
            "name": "Bogny-sur-Meuse"
          },
          {
            "@type": "City",
            "name": "Carignan"
          },
          {
            "@type": "City",
            "name": "Mouzon"
          },
          {
            "@type": "City",
            "name": "Attigny"
          },
          {
            "@type": "City",
            "name": "Monthermé"
          },
          {
            "@type": "City",
            "name": "Vrigne-aux-Bois"
          },
          {
            "@type": "City",
            "name": "Donchery"
          },
          {
            "@type": "City",
            "name": "Bazeilles"
          },
          {
            "@type": "City",
            "name": "Rocroi"
          },
          {
            "@type": "City",
            "name": "Signy-l'Abbaye"
          },
          {
            "@type": "City",
            "name": "Château-Porcien"
          },
          {
            "@type": "City",
            "name": "Juniville"
          },
          {
            "@type": "City",
            "name": "Fismes"
          },
          {
            "@type": "City",
            "name": "Bazancourt"
          },
          {
            "@type": "City",
            "name": "Witry-lès-Reims"
          },
          {
            "@type": "City",
            "name": "Bétheny"
          },
          {
            "@type": "City",
            "name": "Cormontreuil"
          },
          {
            "@type": "City",
            "name": "Tinqueux"
          },
          {
            "@type": "State",
            "name": "Ardennes"
          },
          {
            "@type": "State",
            "name": "Marne"
          },
          {
            "@type": "State",
            "name": "Grand Est"
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
          "name": "Services de nettoyage et détailing automobile",
          "itemListElement": [
            {
              "@type": "Offer",
              "name": "Nettoyage Complet & Détailing",
              "description": "Nettoyage intérieur et extérieur approfondi avec protection céramique"
            },
            {
              "@type": "Offer",
              "name": "Lavage Écologique",
              "description": "Nettoyage respectueux de l'environnement avec produits biodégradables"
            },
            {
              "@type": "Offer",
              "name": "Préparation Esthétique",
              "description": "Service premium de polissage, lustrage et protection"
            },
            {
              "@type": "Offer",
              "name": "Protection Céramique Automobile",
              "description": "Traitement durable pour une protection optimale de la carrosserie"
            }
          ]
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "127"
        }
      };
      
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.text = JSON.stringify(jsonLd);
      document.head.appendChild(script);
      
      return () => {
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    } catch (error) {
      console.error("Erreur lors de l'ajout des données structurées:", error);
    }
  }, [toast]);
  
  return (
    <div className="min-h-screen bg-dark text-gold">
      <Navbar />
      <main className="animate-fade-in" itemScope itemType="https://schema.org/AutoRepair">
        <meta itemProp="name" content="Premium Auto Clean - Détailing Auto Haut de Gamme" />
        <meta itemProp="description" content="Service professionnel de nettoyage, protection céramique et préparation esthétique automobile." />
        <Hero />
        <Services />
        <Tarifs />
        <Abonnements />
        <FAQ />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
