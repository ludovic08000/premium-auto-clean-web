
import { ArrowDown, Monitor, Cpu, Wifi } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center bg-background text-foreground pt-16">
      {/* Background design elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/10 rounded-full filter blur-[100px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full filter blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Floating icons */}
          <div className="flex justify-center gap-8 mb-8">
            <div className="p-4 bg-card rounded-2xl border border-primary/30 animate-bounce" style={{ animationDelay: '0s' }}>
              <Monitor className="h-8 w-8 text-primary" />
            </div>
            <div className="p-4 bg-card rounded-2xl border border-primary/30 animate-bounce" style={{ animationDelay: '0.2s' }}>
              <Cpu className="h-8 w-8 text-primary" />
            </div>
            <div className="p-4 bg-card rounded-2xl border border-primary/30 animate-bounce" style={{ animationDelay: '0.4s' }}>
              <Wifi className="h-8 w-8 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6 tech-gradient-text">
            Tech Repair Pro
          </h1>
          <p className="text-xl sm:text-2xl font-light text-foreground/80 mb-6">
            Réparation informatique rapide et professionnelle
          </p>
          <p className="text-lg font-light text-foreground/60 mb-10">
            PC, Mac, Smartphones & Tablettes
          </p>
          
          <div className="mx-auto max-w-3xl mb-10 text-foreground/70">
            <p className="mb-4">
              Votre ordinateur est lent, votre écran est cassé ou vous avez un virus ? 
              Nous sommes là pour vous aider ! Nos experts diagnostiquent et réparent 
              tous types d'appareils informatiques.
            </p>
            <p>
              Avec plus de 10 ans d'expérience, nous offrons un service rapide, fiable 
              et transparent. Devis gratuit et garantie sur toutes nos réparations.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#services" className="btn-primary">
              Découvrir nos services
            </a>
            <a href="#contact" className="border border-primary/50 px-6 py-3 rounded-lg hover:border-primary hover:bg-primary/10 transition-all">
              Demander un devis
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-foreground/70 hover:text-primary">
          <span className="mb-2 text-sm">Découvrir</span>
          <ArrowDown size={20} />
        </a>
      </div>

      {/* Données structurées */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Tech Repair Pro - Réparation Informatique Professionnelle",
        "description": "Service professionnel de réparation informatique. PC, Mac, smartphones et tablettes. Devis gratuit.",
        "url": window.location.href,
        "mainEntity": {
          "@type": "Service",
          "name": "Réparation Informatique",
          "description": "Réparation de PC, Mac, smartphones et tablettes par des experts qualifiés.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Tech Repair Pro"
          }
        }
      })} } />
    </section>
  );
};

export default Hero;
