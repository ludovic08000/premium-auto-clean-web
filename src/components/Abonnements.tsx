
const SubscriptionCard = ({ 
  vehicleType, 
  price, 
  description, 
  isHighlighted = false 
}: { 
  vehicleType: string; 
  price: string; 
  description: string; 
  isHighlighted?: boolean;
}) => (
  <div className={`card-premium ${isHighlighted ? 'border-gold' : ''} text-center`}>
    <h3 className="text-xl font-bold mb-2">{vehicleType}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold gold-gradient-text">{price}</span>
      <span className="text-gold/60">/mois</span>
    </div>
    <p className="text-gold/70">{description}</p>
    <a 
      href="#contact" 
      className={`mt-6 inline-block px-6 py-3 rounded-md transition-all ${
        isHighlighted ? 'btn-gold' : 'border border-gold/50 hover:border-gold/90'
      }`}
    >
      S'abonner
    </a>
  </div>
);

const Abonnements = () => {
  return (
    <section id="abonnements" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Nos Abonnements Mensuels</h2>
        <p className="text-center text-gold/80 max-w-2xl mx-auto mb-12">
          Profitez d'un nettoyage complet chaque mois pour maintenir votre véhicule en parfait état tout au long de l'année.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <SubscriptionCard
            vehicleType="Véhicules Classiques"
            price="25€"
            description="Un nettoyage complet par mois"
          />
          <SubscriptionCard
            vehicleType="SUV"
            price="35€"
            description="Un nettoyage complet par mois"
            isHighlighted
          />
          <SubscriptionCard
            vehicleType="Utilitaires"
            price="50€"
            description="Un nettoyage complet par mois"
          />
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-gold/70 mb-6">
            Tous nos abonnements incluent une priorité de réservation et une remise de 15% sur les services additionnels.
          </p>
          <a href="#contact" className="btn-gold">Demander plus d'informations</a>
        </div>
      </div>
    </section>
  );
};

export default Abonnements;
