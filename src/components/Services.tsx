
import { Droplet, SprayCan, Wrench, CarFront, Settings, Shield } from "lucide-react";

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
        <h2 className="section-heading text-center text-3xl md:text-4xl font-serif font-bold mb-12 text-gold">Nos Services</h2>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold/80">
            Premium Auto Clean vous propose une gamme complète de services de nettoyage automobile professionnel. 
            Notre expertise et notre attention aux détails garantissent des résultats exceptionnels pour 
            tous types de véhicules, des citadines aux utilitaires en passant par les SUV et les véhicules de luxe.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Nettoyage Complet"
              icon={<CarFront size={24} />}
              description="Traitement intérieur et extérieur pour une voiture comme neuve. Inclut le lavage carrosserie, shampooing tissus, traitement des plastiques et des vitres pour une finition parfaite."
            />
            <ServiceCard
              title="Nettoyage Intérieur"
              icon={<Settings size={24} />}
              description="Aspirateur, shampooing des tissus, traitement des plastiques, nettoyage approfondi des surfaces de contact, suppression des taches tenaces et désodorisation complète."
            />
            <ServiceCard
              title="Nettoyage Extérieur"
              icon={<Droplet size={24} />}
              description="Lavage à la main, décontamination, protection carrosserie, traitement des jantes et des pneus, lustrage de la peinture et finition brillante durable."
            />
            <ServiceCard
              title="Service Personnalisé"
              icon={<Wrench size={24} />}
              description="Solutions adaptées selon votre type de véhicule et vos besoins spécifiques. Consultez-nous pour un devis sur mesure adapté à votre situation particulière."
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Additionnels</h2>
          <p className="text-gold/80 text-center max-w-3xl mx-auto mb-8">
            En complément de nos forfaits standards, nous proposons des services spécialisés pour répondre à tous vos besoins de nettoyage automobile. 
            Ces options peuvent être ajoutées à tout service principal ou réservées individuellement.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage des jantes</h4>
              <p className="text-gold/70">Élimination des résidus de freins et protection. Notre traitement spécifique pour jantes élimine les poussières de frein incrustées et applique une couche protectrice qui facilite les nettoyages ultérieurs.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Rénovation des phares</h4>
              <p className="text-gold/70">Restauration de la transparence et de la luminosité. Nous traitons vos phares ternis ou jaunis par les UV pour retrouver leur clarté d'origine et améliorer votre visibilité nocturne.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Traitement du cuir</h4>
              <p className="text-gold/70">Nettoyage, hydratation et protection des cuirs. Notre traitement professionnel nettoie en profondeur, hydrate et protège tous types de cuirs pour prolonger leur durée de vie.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Traitement hydrophobe</h4>
              <p className="text-gold/70">Application sur les vitres pour améliorer la visibilité. Ce traitement repousse l'eau et facilite l'évacuation des gouttes de pluie, améliorant considérablement la visibilité par temps de pluie.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Désinfection à la vapeur</h4>
              <p className="text-gold/70">Élimination des bactéries et odeurs sans produits chimiques. Notre méthode de désinfection à la vapeur sèche élimine 99% des bactéries, virus et allergènes tout en respectant l'environnement.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Service à domicile</h4>
              <p className="text-gold/70">Intervention sur site pour plus de confort. Nous nous déplaçons chez vous, à votre bureau ou à l'endroit de votre choix avec tout l'équipement nécessaire pour un service complet.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Spéciaux</h2>
          <p className="text-gold/80 text-center max-w-3xl mx-auto mb-8">
            Premium Auto Clean étend son expertise au-delà de l'automobile pour répondre à tous vos besoins de nettoyage professionnel.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage des taches</h4>
              <p className="text-gold/70">Traitement spécifique pour les taches tenaces. Notre équipe dispose de solutions adaptées à chaque type de tache (café, encre, graisse, etc.) pour un résultat impeccable sans endommager les tissus.</p>
            </div>
            <div className="card-premium">
              <h4 className="font-bold mb-2">Nettoyage canapés et matelas</h4>
              <p className="text-gold/70">Extension de nos services pour votre intérieur. Utilisez notre expertise en nettoyage professionnel pour rafraîchir vos meubles rembourrés, éliminer les acariens et neutraliser les odeurs désagréables.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gold/80 max-w-3xl mx-auto mb-6">
            Tous nos services utilisent des produits professionnels respectueux de l'environnement et sont réalisés 
            par une équipe formée aux dernières techniques de nettoyage automobile. La satisfaction de nos clients 
            est notre priorité absolue, c'est pourquoi nous garantissons un résultat à la hauteur de vos attentes.
          </p>
          <a href="#contact" className="btn-gold inline-flex">Demander un devis personnalisé</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
