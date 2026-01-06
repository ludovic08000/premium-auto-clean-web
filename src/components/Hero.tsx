
import { ArrowDown, Monitor, Cpu, Wifi, Smartphone, Laptop, HardDrive } from "lucide-react";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center text-foreground pt-16 overflow-hidden">
      {/* Professional background with floating devices */}
      <div className="absolute inset-0">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/10"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
        
        {/* Floating device icons */}
        <div className="absolute top-20 left-10 opacity-20 animate-pulse">
          <Monitor className="h-24 w-24 text-primary" />
        </div>
        <div className="absolute top-40 right-20 opacity-15 animate-pulse" style={{ animationDelay: '1s' }}>
          <Laptop className="h-32 w-32 text-primary" />
        </div>
        <div className="absolute bottom-40 left-20 opacity-15 animate-pulse" style={{ animationDelay: '0.5s' }}>
          <Smartphone className="h-20 w-20 text-primary" />
        </div>
        <div className="absolute bottom-20 right-10 opacity-20 animate-pulse" style={{ animationDelay: '1.5s' }}>
          <HardDrive className="h-16 w-16 text-primary" />
        </div>
        <div className="absolute top-1/2 left-5 opacity-10 animate-pulse" style={{ animationDelay: '2s' }}>
          <Cpu className="h-28 w-28 text-primary" />
        </div>
        <div className="absolute top-1/3 right-5 opacity-10 animate-pulse" style={{ animationDelay: '0.8s' }}>
          <Wifi className="h-20 w-20 text-primary" />
        </div>
        
        {/* Glowing orbs */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/20 rounded-full filter blur-[120px]"></div>
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-primary/15 rounded-full filter blur-[120px]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-primary/5 rounded-full filter blur-[150px]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Device showcase */}
          <div className="flex justify-center gap-6 mb-10">
            <div className="p-5 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/40 shadow-lg shadow-primary/20 animate-bounce" style={{ animationDuration: '3s' }}>
              <Monitor className="h-10 w-10 text-primary" />
            </div>
            <div className="p-5 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/40 shadow-lg shadow-primary/20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.3s' }}>
              <Laptop className="h-10 w-10 text-primary" />
            </div>
            <div className="p-5 bg-card/80 backdrop-blur-sm rounded-2xl border border-primary/40 shadow-lg shadow-primary/20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.6s' }}>
              <Smartphone className="h-10 w-10 text-primary" />
            </div>
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 tech-gradient-text">
            Tech Repair Pro
          </h1>
          <p className="text-xl sm:text-2xl font-light text-foreground/90 mb-4">
            Réparation informatique rapide et professionnelle
          </p>
          <p className="text-lg font-medium text-primary mb-10">
            PC • Mac • Smartphones • Tablettes
          </p>
          
          <div className="mx-auto max-w-3xl mb-10 text-foreground/70 bg-card/50 backdrop-blur-sm p-6 rounded-2xl border border-primary/20">
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
            <a href="#contact" className="border-2 border-primary/50 px-6 py-3 rounded-lg hover:border-primary hover:bg-primary/10 transition-all font-semibold">
              Demander un devis gratuit
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#services" className="flex flex-col items-center text-foreground/70 hover:text-primary transition-colors">
          <span className="mb-2 text-sm font-medium">Découvrir</span>
          <ArrowDown size={24} />
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
