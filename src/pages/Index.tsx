
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Tarifs from "@/components/Tarifs";
import Abonnements from "@/components/Abonnements";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-dark text-gold">
      <Navbar />
      <Hero />
      <Services />
      <Tarifs />
      <Abonnements />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Index;
