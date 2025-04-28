
import { Droplet, SprayCan, Wrench, CarFront, Settings, Shield, Link, ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";

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

// Composant FAQ
const FAQItem = ({ question, answer, isOpen, toggle, index }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  toggle: () => void;
  index: number;
}) => {
  const itemId = `faq-item-${index}`;
  
  return (
    <div className="border-b border-gold/20 py-4 last:border-b-0">
      <button 
        onClick={toggle}
        className="flex justify-between items-center w-full text-left font-medium text-gold hover:text-gold/80"
        aria-expanded={isOpen}
        aria-controls={itemId}
      >
        <span>{question}</span>
        {isOpen ? <ArrowUp size={18} /> : <ArrowDown size={18} />}
      </button>
      <div 
        id={itemId}
        className={`mt-2 text-gold/70 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
      >
        <p className="pb-2">{answer}</p>
      </div>
    </div>
  );
};

const Services = () => {
  // État pour gérer les questions/réponses
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "Qu'est-ce que le détailing automobile haut de gamme ?",
      answer: "Le détailing automobile haut de gamme est un processus méticuleux et approfondi qui va bien au-delà d'un simple lavage de voiture. Il s'agit d'un ensemble de techniques spécialisées visant à restaurer et préserver l'esthétique de votre véhicule dans ses moindres détails. Cela comprend le polissage professionnel, la correction des imperfections de la peinture, la protection par traitement céramique et le nettoyage intérieur minutieux qui restaure l'aspect neuf de votre habitacle."
    },
    {
      question: "Quels sont les avantages d'un traitement céramique pour ma voiture ?",
      answer: "Un traitement céramique offre une protection durable supérieure aux cires traditionnelles. Il crée une couche protectrice chimiquement liée à la peinture qui résiste aux UV, aux produits chimiques, et facilite le nettoyage grâce à ses propriétés hydrophobes. Ce revêtement maintient l'éclat de votre véhicule plus longtemps, protège contre l'oxydation et les micro-rayures tout en offrant une brillance exceptionnelle pouvant durer plusieurs années selon le traitement choisi."
    },
    {
      question: "En quoi consiste votre service de nettoyage écologique ?",
      answer: "Notre service de nettoyage écologique utilise des produits biodégradables et des techniques économes en eau. Nous privilégions des solutions naturelles et écologiques qui sont efficaces pour nettoyer votre véhicule tout en minimisant l'impact environnemental. Ce processus inclut l'utilisation de nettoyeurs vapeur qui éliminent les bactéries et les allergènes sans produits chimiques agressifs, préservant ainsi votre santé et l'environnement."
    },
    {
      question: "Combien de temps prend un service complet de détailing ?",
      answer: "Un service complet de détailing prend généralement entre 4 et 8 heures selon la taille du véhicule et l'état initial. Pour les traitements plus spécifiques comme la correction de peinture ou l'application d'un traitement céramique professionnel, le processus peut s'étendre sur une journée entière, voire deux jours pour garantir un résultat parfait et durable."
    },
    {
      question: "Proposez-vous des services à domicile dans toute la région ?",
      answer: "Oui, nous proposons des services à domicile à Charleville-Mézières, Reims et dans un rayon de 30 km autour de ces villes. Notre équipe mobile dispose de tout l'équipement nécessaire pour réaliser un travail de qualité professionnelle directement chez vous, que ce soit à votre domicile ou sur votre lieu de travail. Des frais supplémentaires peuvent s'appliquer selon la distance."
    }
  ];

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
          
        {/* Section FAQ */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Questions Fréquentes sur nos Services</h3>
          <div className="max-w-3xl mx-auto bg-dark-light p-6 rounded-lg border border-gold/30" itemScope itemType="https://schema.org/FAQPage">
            {faqItems.map((item, index) => (
              <div key={index} itemScope itemType="https://schema.org/Question">
                <meta itemProp="name" content={item.question} />
                <div itemScope itemType="https://schema.org/Answer" itemProp="acceptedAnswer">
                  <meta itemProp="text" content={item.answer} />
                  <FAQItem 
                    question={item.question} 
                    answer={item.answer} 
                    isOpen={openFAQ === index} 
                    toggle={() => toggleFAQ(index)}
                    index={index}
                  />
                </div>
              </div>
            ))}
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
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Services;
