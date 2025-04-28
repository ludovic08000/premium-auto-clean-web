
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-dark text-gold pt-16">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -left-20 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-gold/5 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 gold-gradient-text">
            Premium Auto Clean - Lavage et Nettoyage Automobile Professionnel
          </h1>
          <h2 className="text-xl sm:text-2xl font-light text-gold/80 mb-4">
            Service premium de détailing, polissage et lustrage auto
          </h2>
          <p className="text-lg font-light text-gold/70 mb-6">
            À Charleville-Mézières et Reims - Intervention à domicile possible
          </p>
          <div className="max-w-3xl mx-auto mb-8">
            <p className="text-gold/80">
              Redonnez vie à votre véhicule avec nos services de lavage auto premium, nettoyage intérieur complet, 
              traitement céramique et rénovation des phares. Notre expertise en détailing automobile garantit un résultat impeccable.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-gold">
              Découvrir nos services
            </a>
            <a href="#contact" className="border border-gold/50 px-6 py-3 rounded-md hover:border-gold/90 transition-all">
              Prendre rendez-vous
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-gold/70 hover:text-gold">
          <span className="mb-2 text-sm">Découvrir</span>
          <ArrowDown size={20} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
