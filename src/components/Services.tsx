
import { Droplet, SprayCan, Wrench, CarFront, Settings, Shield } from "lucide-react";

const ServiceCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => (
  <div className="card-premium group" itemScope itemType="https://schema.org/Service">
    <div className="flex items-center mb-4 text-gold">
      <div className="p-3 rounded-full bg-dark-lighter border border-gold/20 group-hover:border-gold/50 transition-all">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2" itemProp="name">{title}</h3>
    <p className="text-gold/70" itemProp="description">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h2 className="section-heading text-center">Nos Services de Lavage et Nettoyage Auto</h2>
          <p className="text-gold/80 text-center max-w-3xl mx-auto mt-4">
            Découvrez notre gamme complète de services de détailing automobile pour redonner éclat et fraîcheur à votre véhicule.
            Nous utilisons des produits haut de gamme et des techniques professionnelles pour des résultats impeccables.
          </p>
        </header>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Principaux de Lavage et Nettoyage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Nettoyage Complet & Détailing"
              icon={<CarFront size={24} />}
              description="Traitement intérieur et extérieur minutieux pour une voiture comme neuve. Notre service de détailing complet inclut lavage, polissage et protection de la carrosserie."
            />
            <ServiceCard
              title="Nettoyage Intérieur Approfondi"
              icon={<Settings size={24} />}
              description="Aspirateur haute puissance, shampoing des tissus et moquettes, traitement des plastiques et cuirs, désinfection de l'habitacle et élimination des odeurs."
            />
            <ServiceCard
              title="Lavage Extérieur Premium"
              icon={<Droplet size={24} />}
              description="Lavage à la main, décontamination chimique et physique, lustrage, polissage et protection carrosserie avec cires et traitements céramiques haut de gamme."
            />
            <ServiceCard
              title="Service Personnalisé"
              icon={<Wrench size={24} />}
              description="Solutions adaptées selon votre type de véhicule et vos besoins spécifiques. Entretien régulier ou remise à neuf complète pour voitures, SUV, utilitaires et motos."
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Additionnels de Détailing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage et Protection des Jantes</h4>
              <p className="text-gold/70">Élimination des résidus de freins, poussières et saletés incrustées. Application d'un traitement protecteur pour faciliter les nettoyages futurs.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Rénovation des Phares Ternis</h4>
              <p className="text-gold/70">Restauration complète de la transparence et de la luminosité des phares jaunis ou opacifiés par les UV pour améliorer la sécurité et l'esthétique.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Traitement et Hydratation du Cuir</h4>
              <p className="text-gold/70">Nettoyage en profondeur, hydratation et protection des selleries en cuir pour préserver leur souplesse et leur aspect neuf plus longtemps.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Traitement Hydrophobe des Vitres</h4>
              <p className="text-gold/70">Application d'un revêtement spécial sur les vitres pour améliorer la visibilité sous la pluie et faciliter l'écoulement de l'eau et des saletés.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Désinfection à la Vapeur Sèche</h4>
              <p className="text-gold/70">Élimination complète des bactéries, virus et allergènes sans produits chimiques. Idéal pour les familles et les personnes sensibles aux produits chimiques.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Service de Lavage Auto à Domicile</h4>
              <p className="text-gold/70">Intervention sur site à votre domicile ou lieu de travail pour plus de confort. Disponible à Charleville-Mézières, Reims et environs.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Spéciaux de Nettoyage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-premium">
              <h4 className="font-bold mb-2">Traitement Anti-Taches Professionnel</h4>
              <p className="text-gold/70">Solutions spécifiques pour les taches tenaces sur tous types de surfaces : tissus, moquettes, cuir, plastiques. Traitement adapté à chaque type de tache.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage Textile Maison</h4>
              <p className="text-gold/70">Extension de notre expertise pour nettoyer vos canapés, fauteuils et matelas avec les mêmes standards de qualité que pour nos services automobiles.</p>
            </div>
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-gold/80 max-w-3xl mx-auto">
              <strong className="text-gold">Premium Auto Clean</strong> vous propose des services de lavage auto et de nettoyage automobile professionnels 
              à Charleville-Mézières, Reims et les environs. Notre équipe expérimentée utilise des produits et techniques de pointe pour un 
              résultat impeccable qui ravira les plus exigeants.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
