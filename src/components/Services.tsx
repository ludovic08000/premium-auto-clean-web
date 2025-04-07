
import { Droplet, SprayCan, Wrench, CarFront, Settings } from "lucide-react";

const ServiceCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => (
  <div className="card-premium group">
    <div className="flex items-center mb-4 text-gold">
      <div className="p-3 rounded-full bg-dark-lighter border border-gold/20 group-hover:border-gold/50 transition-all">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gold/70">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Nos Services</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Principaux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Nettoyage Complet"
              icon={<CarFront size={24} />}
              description="Traitement intérieur et extérieur pour une voiture comme neuve."
            />
            <ServiceCard
              title="Nettoyage Intérieur"
              icon={<Settings size={24} />}
              description="Aspirateur, shampoing des tissus, traitement des plastiques."
            />
            <ServiceCard
              title="Nettoyage Extérieur"
              icon={<Droplet size={24} />}
              description="Lavage à la main, décontamination, protection carrosserie."
            />
            <ServiceCard
              title="Service Personnalisé"
              icon={<Wrench size={24} />}
              description="Solutions adaptées selon votre type de véhicule et vos besoins."
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Additionnels</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage des jantes</h4>
              <p className="text-gold/70">Élimination des résidus de freins et protection.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Rénovation des phares</h4>
              <p className="text-gold/70">Restauration de la transparence et de la luminosité.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Traitement du cuir</h4>
              <p className="text-gold/70">Nettoyage, hydratation et protection des cuirs.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Traitement hydrophobe</h4>
              <p className="text-gold/70">Application sur les vitres pour améliorer la visibilité.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Désinfection à la vapeur</h4>
              <p className="text-gold/70">Élimination des bactéries et odeurs sans produits chimiques.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Service à domicile</h4>
              <p className="text-gold/70">Intervention sur site pour plus de confort.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Spéciaux</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage des taches</h4>
              <p className="text-gold/70">Traitement spécifique pour les taches tenaces.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage canapés et matelas</h4>
              <p className="text-gold/70">Extension de nos services pour votre intérieur.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
