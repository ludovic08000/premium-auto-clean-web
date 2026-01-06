
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Tarifs from "@/components/Tarifs";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { setupSessionTimeout } from "@/services/CSRFService";

const Index = () => {
  useEffect(() => {
    setupSessionTimeout(30);
  }, []);
  
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Helmet>
        <title>Tech Repair Pro - Réparation Informatique Professionnelle</title>
        <meta name="description" content="Service professionnel de réparation informatique. PC, Mac, smartphones et tablettes. Diagnostic gratuit, devis transparent, garantie 6 mois sur toutes nos réparations." />
        <meta name="keywords" content="réparation informatique, réparation PC, réparation Mac, réparation smartphone, dépannage informatique, récupération données, suppression virus" />
        <link rel="canonical" href="https://techrepairpro.com/" />
        
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Tech Repair Pro",
            "url": "https://techrepairpro.com",
            "description": "Service professionnel de réparation informatique. PC, Mac, smartphones et tablettes.",
            "email": "ludovic43@msn.com",
            "priceRange": "€€",
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "09:00",
                "closes": "18:00"
              }
            ]
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      
      <main className="animate-fade-in">
        <Hero />
        <Services />
        <Tarifs />
        <AboutUs />
        <ContactForm />

        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Diagnostic PC/Mac",
                "description": "Analyse complète de votre appareil pour identifier tous les problèmes matériels et logiciels.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Tech Repair Pro"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "29.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Suppression Virus",
                "description": "Élimination de virus, malwares, ransomwares et logiciels espions.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Tech Repair Pro"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "49.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Récupération de données",
                "description": "Récupération de fichiers sur disques durs endommagés ou corrompus.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Tech Repair Pro"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "89.00",
                  "priceCurrency": "EUR"
                }
              }
            ]
          }
        `}</script>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
