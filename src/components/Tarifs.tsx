
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
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-gold/80">
            Chez Premium Auto Clean, nous proposons des tarifs transparents adaptés à tous types de véhicules et à tous les budgets.
            Nos formules sont conçues pour répondre à vos besoins spécifiques, que vous recherchiez un nettoyage complet ou des services ciblés.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Forfaits Nettoyage Complet</h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-gold/80">
              Nos forfaits de nettoyage complet comprennent un traitement intérieur et extérieur approfondi. 
              Le tarif varie selon la taille et le type de votre véhicule.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard
              title="Véhicules Classiques"
              price="80€"
              description="Nettoyage complet intérieur et extérieur pour citadines et berlines compactes. Inclut le lavage carrosserie, l'aspiration complète, le traitement des surfaces intérieures et le nettoyage des vitres."
            />
            <PriceCard
              title="SUV"
              price="120€"
              description="Nettoyage complet intérieur et extérieur pour SUV, crossovers et berlines familiales. Comprend toutes les prestations du forfait classique adaptées aux véhicules plus spacieux."
              isHighlighted
            />
            <PriceCard
              title="Utilitaires"
              price="150€"
              description="Nettoyage complet intérieur et extérieur pour fourgons, camionnettes et grands monospaces. Un traitement adapté aux véhicules professionnels et aux espaces de chargement."
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Additionnels</h2>
          <div className="text-center max-w-3xl mx-auto mb-8">
            <p className="text-gold/80">
              Personnalisez votre expérience avec nos services additionnels. Ces prestations peuvent être 
              réservées individuellement ou ajoutées à l'un de nos forfaits de nettoyage complet.
            </p>
          </div>
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
            <div className="mt-8 text-center">
              <p className="text-gold/70 text-sm">
                Tous nos prix sont TTC. Des remises peuvent s'appliquer pour les clients fidèles et les formules d'abonnement.
                Les tarifs peuvent varier légèrement selon l'état du véhicule et les traitements spécifiques nécessaires.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gold/80 max-w-3xl mx-auto mb-6">
              Pour obtenir un devis personnalisé adapté à votre véhicule et à vos besoins spécifiques, 
              n'hésitez pas à nous contacter. Notre équipe sera ravie de vous conseiller sur la 
              meilleure solution pour votre voiture.
            </p>
            <a href="#contact" className="btn-gold inline-flex">Demander un devis gratuit</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
