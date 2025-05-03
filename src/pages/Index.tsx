
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Tarifs from "@/components/Tarifs";
import Abonnements from "@/components/Abonnements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import BreadcrumbNav from "@/components/Breadcrumb";
import { setupSessionTimeout } from "@/services/CSRFService";

const Index = () => {
  console.log("Index component is rendering");
  
  useEffect(() => {
    // Configuration d'un délai d'expiration de session de 30 minutes
    setupSessionTimeout(30);
  }, []);
  
  return (
    <div className="min-h-screen bg-dark text-gold">
      <Helmet>
        <title>Premium Auto Clean - Service de nettoyage automobile professionnel à Charleville-Mézières et Reims</title>
        <meta name="description" content="Service professionnel de nettoyage automobile et à domicile à Charleville-Mézières et Reims. Nettoyage complet, intérieur et extérieur, traitement cuir, rénovation phares et services sur mesure." />
        <meta name="keywords" content="nettoyage automobile, lavage voiture, détailing, Charleville-Mézières, Reims, nettoyage intérieur, rénovation phares, traitement cuir, désinfection vapeur, service domicile" />
        <link rel="canonical" href="https://premiumautoclean.com/" />
        
        {/* Données structurées pour Organization */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Premium Auto Clean",
            "alternateName": "Premium Auto Nettoyage",
            "url": "https://premiumautoclean.com",
            "logo": "https://premiumautoclean.com/logo.jpg",
            "image": "https://premiumautoclean.com/storefront.jpg",
            "description": "Service professionnel de nettoyage automobile et à domicile à Charleville-Mézières et Reims. Spécialistes en détailing automobile depuis plus de 8 ans.",
            "telephone": "+33612345678",
            "email": "contact@premiumautoclean.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Rue du Commerce",
              "addressLocality": "Charleville-Mézières",
              "postalCode": "08000",
              "addressCountry": "FR"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 49.7623,
              "longitude": 4.7262
            },
            "priceRange": "€€",
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
            "openingHoursSpecification": [
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                "opens": "08:00",
                "closes": "18:00"
              },
              {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": "Saturday",
                "opens": "09:00",
                "closes": "17:00"
              }
            ],
            "sameAs": [
              "https://www.facebook.com/premiumautoclean",
              "https://www.instagram.com/premiumautoclean"
            ]
          }
        `}</script>
      </Helmet>
      
      <Navbar />
      <BreadcrumbNav items={[{ name: "Accueil", active: true }]} />
      
      <main className="animate-fade-in">
        <Hero />
        <AboutUs />
        <Services />
        <Tarifs />
        <Abonnements />
        <ContactForm />

        {/* Données structurées pour les services (CreativeWork) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": [
              {
                "@type": "Service",
                "position": 1,
                "name": "Nettoyage Complet",
                "description": "Traitement intérieur et extérieur pour une voiture comme neuve. Inclut le lavage carrosserie, shampooing tissus, traitement des plastiques et des vitres.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Premium Auto Clean"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "80.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "position": 2,
                "name": "Nettoyage Intérieur",
                "description": "Aspirateur, shampooing des tissus, traitement des plastiques, nettoyage approfondi des surfaces de contact, suppression des taches tenaces et désodorisation complète.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Premium Auto Clean"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "30.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "position": 3,
                "name": "Nettoyage Extérieur",
                "description": "Lavage à la main, décontamination, protection carrosserie, traitement des jantes et des pneus, lustrage de la peinture et finition brillante durable.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Premium Auto Clean"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "44.00",
                  "priceCurrency": "EUR"
                }
              },
              {
                "@type": "Service",
                "position": 4,
                "name": "Traitement du cuir",
                "description": "Nettoyage, hydratation et protection des cuirs. Notre traitement professionnel nettoie en profondeur, hydrate et protège tous types de cuirs pour prolonger leur durée de vie.",
                "provider": {
                  "@type": "LocalBusiness",
                  "name": "Premium Auto Clean"
                },
                "offers": {
                  "@type": "Offer",
                  "price": "25.00",
                  "priceCurrency": "EUR"
                }
              }
            ]
          }
        `}</script>

        {/* Données structurées pour les avis clients (Review) */}
        <script type="application/ld+json">{`
          {
            "@context": "https://schema.org",
            "@type": "AutoRepair",
            "name": "Premium Auto Clean",
            "aggregateRating": {
              "@type": "AggregateRating",
              "ratingValue": "4.8",
              "reviewCount": "127"
            },
            "review": [
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Jean Dupont"
                },
                "datePublished": "2023-05-12",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Service impeccable ! Ma voiture n'avait jamais été aussi propre. Je recommande vivement leurs services de nettoyage complet."
              },
              {
                "@type": "Review",
                "author": {
                  "@type": "Person",
                  "name": "Marie Lambert"
                },
                "datePublished": "2023-06-24",
                "reviewRating": {
                  "@type": "Rating",
                  "ratingValue": "5"
                },
                "reviewBody": "Équipe professionnelle et très attentive aux détails. Le traitement du cuir a redonné vie à mes sièges. Très satisfaite !"
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
