
import { ArrowRight, Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-20">
      {/* Background */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Atelier de réparation Nevexo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🔧 Réparation informatique depuis 2014
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 text-foreground leading-tight">
            Votre informatique <br />
            <span className="text-primary">entre de bonnes mains</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            PC lent ? Écran cassé ? Virus ? On s'en occupe. 
            Diagnostic gratuit, réparation rapide et garantie sur toutes nos interventions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <a href="#contact" className="btn-primary inline-flex items-center justify-center gap-2">
              Demander un devis gratuit
              <ArrowRight size={18} />
            </a>
            <a href="tel:0649754342" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Phone size={18} />
              06 49 75 43 42
            </a>
          </div>
          
          <div className="flex items-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Devis gratuit
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Garantie 6 mois
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Sans rendez-vous
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
