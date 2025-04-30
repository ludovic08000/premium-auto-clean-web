
import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
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
  }, []);
  
  return (
    <div className="min-h-screen bg-dark text-gold">
      <Helmet>
        <title>Premium Auto Clean - Service de nettoyage automobile professionnel</title>
        <meta name="description" content="Service professionnel de nettoyage automobile et à domicile à Charleville-Mézières et Reims. Nettoyage complet, intérieur et extérieur." />
        <link rel="canonical" href="https://premiumautoclean.com/" />
      </Helmet>
      
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
