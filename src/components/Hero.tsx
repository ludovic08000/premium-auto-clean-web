
import { Phone } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[85vh] flex items-center pt-20">
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Atelier de réparation Nevexo" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-white/90"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl font-semibold mb-6 text-foreground leading-tight">
            Réparation PC & Apple
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8">
            Ordinateurs, iPhone, iPad, Mac. Diagnostic gratuit.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#contact" className="btn-primary">
              Prendre rendez-vous
            </a>
            <a href="tel:0649754342" className="btn-secondary inline-flex items-center justify-center gap-2">
              <Phone size={18} />
              06 49 75 43 42
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
