
import { ArrowDown } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-foreground pt-16 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img 
          src={heroBg} 
          alt="Atelier de réparation informatique Nevexo" 
          className="w-full h-full object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/95"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tech-gradient-text">
            Nevexo
          </h1>
          <p className="text-xl sm:text-2xl font-light text-foreground/90 mb-4">
            Réparation informatique rapide et professionnelle
          </p>
          <p className="text-lg font-medium text-primary mb-10">
            PC • Mac • Smartphones • Tablettes
          </p>
          
          <div className="mx-auto max-w-3xl mb-10 text-foreground/80 bg-card/70 backdrop-blur-md p-6 rounded-2xl border border-primary/20">
            <p className="mb-4">
              Votre ordinateur est lent, votre écran est cassé ou vous avez un virus ? 
              Nous sommes là pour vous aider ! Nos experts diagnostiquent et réparent 
              tous types d'appareils informatiques.
            </p>
            <p>
              Avec plus de 10 ans d'expérience, nous offrons un service rapide, fiable 
              et transparent. <span className="text-primary font-semibold">Devis gratuit</span> et <span className="text-primary font-semibold">garantie</span> sur toutes nos réparations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary text-lg">
              Découvrir nos services
            </a>
            <a href="#contact" className="border-2 border-primary/50 px-6 py-3 rounded-lg hover:border-primary hover:bg-primary/10 transition-all font-semibold backdrop-blur-sm">
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <a href="#services" className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors">
          <span className="mb-2 text-sm font-medium">Découvrir</span>
          <ArrowDown size={24} />
        </a>
      </div>

      {/* Données structurées */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Nevexo - Réparation Informatique Professionnelle",
        "description": "Service professionnel de réparation informatique. PC, Mac, smartphones et tablettes. Devis gratuit.",
        "url": window.location.href,
        "mainEntity": {
          "@type": "Service",
          "name": "Réparation Informatique",
          "description": "Réparation de PC, Mac, smartphones et tablettes par des experts qualifiés.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Nevexo"
          }
        }
      })} } />
    </section>
  );
};

export default Hero;
