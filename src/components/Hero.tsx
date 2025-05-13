
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
            Premium Auto Clean
          </h1>
          <p className="text-xl sm:text-2xl font-light text-gold/80 mb-6">
            Service professionnel de nettoyage automobile et à domicile
          </p>
          <p className="text-lg font-light text-gold/70 mb-10">
            À Charleville-Mézières et Reims
          </p>
          
          <div className="mx-auto max-w-3xl mb-10 text-gold/80">
            <p className="mb-4">
              Redonnez vie et éclat à votre véhicule grâce à nos services de nettoyage professionnel. 
              Spécialistes en détailing automobile depuis plus de 8 ans, nous proposons des prestations 
              sur mesure adaptées à tous types de véhicules.
            </p>
            <p>
              Notre équipe qualifiée utilise des produits haut de gamme et des techniques innovantes 
              pour offrir des résultats exceptionnels. Du nettoyage extérieur minutieux au traitement 
              complet de l'habitacle, nous garantissons une finition impeccable et une satisfaction totale.
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

      {/* Données structurées spécifiques à cette section (WebPage) */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": "Premium Auto Clean - Service de nettoyage automobile professionnel",
        "description": "Spécialistes en détailing automobile depuis plus de 8 ans à Charleville-Mézières et Reims. Nettoyage intérieur, extérieur et services personnalisés.",
        "url": "https://premiumautoclean.com/",
        "image": "/lovable-uploads/124fed26-b942-4f5e-a6fa-14377a0a18eb.png",
        "mainEntity": {
          "@type": "Service",
          "name": "Nettoyage Automobile Professionnel",
          "description": "Services de nettoyage automobile complet, intérieur et extérieur, avec des produits haut de gamme et des techniques innovantes.",
          "provider": {
            "@type": "LocalBusiness",
            "name": "Premium Auto Clean"
          }
        }
      })} } />
    </section>
  );
};

export default Hero;
