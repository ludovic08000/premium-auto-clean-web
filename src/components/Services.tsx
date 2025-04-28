
import { Droplet, SprayCan, Wrench, CarFront, Settings, Shield, Link } from "lucide-react";

const ServiceCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => (
  <article className="card-premium group" itemScope itemType="https://schema.org/Service">
    <div className="flex items-center mb-4 text-gold">
      <div className="p-3 rounded-full bg-dark-lighter border border-gold/20 group-hover:border-gold/50 transition-all" aria-hidden="true">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2" itemProp="name">{title}</h3>
    <p className="text-gold/70" itemProp="description">{description}</p>
  </article>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <header className="mb-12">
          <h2 className="section-heading text-center">Nos Services de Lavage et Nettoyage Auto</h2>
          <p className="text-gold/80 text-center max-w-3xl mx-auto mt-4">
            Découvrez notre gamme complète de services de <strong>détailing automobile haut de gamme</strong> pour redonner éclat et fraîcheur à votre véhicule.
            Nous utilisons des produits écologiques de qualité et des techniques professionnelles pour des résultats impeccables.
          </p>
        </header>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Principaux de Lavage et Nettoyage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Nettoyage Complet & Détailing"
              icon={<CarFront size={24} aria-hidden="true" />}
              description="Traitement intérieur et extérieur minutieux pour une voiture comme neuve. Notre service de détailing haut de gamme inclut lavage, polissage et protection céramique de la carrosserie."
            />
            <ServiceCard
              title="Nettoyage Intérieur Approfondi"
              icon={<Settings size={24} aria-hidden="true" />}
              description="Aspirateur haute puissance, shampoing des tissus et moquettes, traitement des plastiques et cuirs, désinfection écologique de l'habitacle et élimination des odeurs persistantes."
            />
            <ServiceCard
              title="Lavage Extérieur Premium"
              icon={<Droplet size={24} aria-hidden="true" />}
              description="Lavage à la main, décontamination chimique et physique, lustrage, polissage et protection carrosserie avec cires naturelles et traitements céramiques professionnels."
            />
            <ServiceCard
              title="Service Personnalisé"
              icon={<Wrench size={24} aria-hidden="true" />}
              description="Solutions adaptées selon votre type de véhicule et vos besoins spécifiques. Préparation esthétique complète pour voitures de collection, SUV, utilitaires et motos."
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Additionnels de Détailing</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <article className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage et Protection des Jantes</h4>
              <p className="text-gold/70">Élimination des résidus de freins, poussières et saletés incrustées. Application d'un traitement protecteur nano-céramique pour faciliter les nettoyages futurs et préserver l'éclat des jantes.</p>
            </article>
            <article className="card-premium">
              <h4 className="font-bold mb-2">Rénovation des Phares Ternis</h4>
              <p className="text-gold/70">Restauration complète de la transparence et de la luminosité des phares jaunis ou opacifiés par les UV pour améliorer la sécurité nocturne et l'esthétique générale du véhicule.</p>
            </article>
            <article className="card-premium">
              <h4 className="font-bold mb-2">Traitement et Hydratation du Cuir</h4>
              <p className="text-gold/70">Nettoyage en profondeur, hydratation et protection des selleries en cuir pour préserver leur souplesse et leur aspect neuf plus longtemps. Traitement anti-UV pour éviter le craquèlement.</p>
            </article>
            <article className="card-premium">
              <h4 className="font-bold mb-2">Traitement Hydrophobe des Vitres</h4>
              <p className="text-gold/70">Application d'un revêtement spécial nano-technologique sur les vitres pour améliorer la visibilité sous la pluie et faciliter l'écoulement de l'eau et des saletés même à basse vitesse.</p>
            </article>
            <article className="card-premium">
              <h4 className="font-bold mb-2">Désinfection à la Vapeur Sèche</h4>
              <p className="text-gold/70">Élimination complète des bactéries, virus et allergènes sans produits chimiques agressifs. Notre processus écologique est idéal pour les familles et les personnes sensibles aux produits chimiques traditionnels.</p>
            </article>
            <article className="card-premium">
              <h4 className="font-bold mb-2">Service de Lavage Auto à Domicile</h4>
              <p className="text-gold/70">Intervention sur site à votre domicile ou lieu de travail pour plus de confort. Notre équipe mobile est équipée de matériel professionnel et utilise des techniques économes en eau.</p>
            </article>
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Spéciaux de Nettoyage</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <article className="card-premium">
              <h4 className="font-bold mb-2">Protection Céramique Professionnelle</h4>
              <p className="text-gold/70">Application d'un revêtement céramique haute performance offrant une protection supérieure contre les rayures, les UV et les contaminants. Garantit un effet hydrophobe exceptionnel et une brillance intense pendant plusieurs années.</p>
            </article>
            <article className="card-premium">
              <h4 className="font-bold mb-2">Préparation Esthétique Véhicule</h4>
              <p className="text-gold/70">Service complet de remise en état esthétique pour vente ou exposition. Idéal pour les véhicules de collection, de luxe ou pour préparer votre voiture avant une vente pour maximiser sa valeur.</p>
            </article>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gold/80 max-w-3xl mx-auto">
            <strong className="text-gold">Premium Auto Clean</strong> vous propose des services de <em>lavage écologique</em> et <em>détailing haut de gamme</em> 
            à Charleville-Mézières, Reims et les environs. Notre équipe d'experts en <em>préparation esthétique automobile</em> utilise des produits et techniques de pointe pour un 
            résultat impeccable qui ravira les plus exigeants.
          </p>
          
          {/* Section de liens internes */}
          <nav className="mt-8 bg-dark-light p-4 rounded-lg max-w-3xl mx-auto" aria-label="Navigation des services">
            <h4 className="font-medium mb-3 flex items-center justify-center">
              <Link size={16} className="mr-2" aria-hidden="true" /> Nos services connexes
            </h4>
            <ul className="flex flex-wrap justify-center gap-4">
              <li><a href="#tarifs" className="link-gold text-sm">Tarifs détaillés</a></li>
              <li><a href="#abonnements" className="link-gold text-sm">Formules d'abonnement</a></li>
              <li><a href="#contact" className="link-gold text-sm">Demande de devis</a></li>
              <li><a href="#faq" className="link-gold text-sm">Questions fréquentes</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Services;
