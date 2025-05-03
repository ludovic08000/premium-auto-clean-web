
const PriceCard = ({ 
  title, 
  price, 
  description, 
  isHighlighted = false 
}: { 
  title: string; 
  price: string; 
  description: string; 
  isHighlighted?: boolean;
}) => (
  <div className={`card-premium ${isHighlighted ? 'border-gold' : ''}`}>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold gold-gradient-text">{price}</span>
    </div>
    <p className="text-gold/70">{description}</p>
  </div>
);

const ServiceItem = ({ name, price }: { name: string; price: string }) => (
  <div className="flex justify-between items-center py-2 border-b border-gold/20">
    <span className="text-gold/80">{name}</span>
    <span className="font-bold">{price}</span>
  </div>
);

const Tarifs = () => {
  return (
    <section id="tarifs" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-3xl md:text-4xl font-serif font-bold mb-12 text-gold">Nos Tarifs</h2>
        
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Forfaits Nettoyage Complet</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard
              title="Véhicules Classiques"
              price="80€"
              description="Nettoyage complet intérieur et extérieur"
            />
            <PriceCard
              title="SUV"
              price="120€"
              description="Nettoyage complet intérieur et extérieur"
              isHighlighted
            />
            <PriceCard
              title="Utilitaires"
              price="150€"
              description="Nettoyage complet intérieur et extérieur"
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Additionnels</h2>
          <div className="max-w-3xl mx-auto bg-dark p-6 rounded-lg border border-gold/30">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              <div>
                <ServiceItem name="Nettoyage intérieur" price="30€" />
                <ServiceItem name="Nettoyage extérieur" price="44€" />
                <ServiceItem name="Nettoyage des jantes" price="25€" />
                <ServiceItem name="Rénovation des phares" price="50€" />
                <ServiceItem name="Traitement du cuir" price="25€" />
              </div>
              <div>
                <ServiceItem name="Traitement hydrophobe des vitres" price="20€" />
                <ServiceItem name="Nettoyage des taches" price="20€" />
                <ServiceItem name="Désinfection à la vapeur" price="25€" />
                <ServiceItem name="Service à domicile" price="à partir de 15€" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
