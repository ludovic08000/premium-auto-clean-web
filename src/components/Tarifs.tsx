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
  <div className={`card-premium ${isHighlighted ? 'border-gold' : ''}`} itemScope itemType="https://schema.org/Offer">
    <h3 className="text-xl font-bold mb-2" itemProp="name">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold gold-gradient-text" itemProp="price">{price}</span>
      <meta itemProp="priceCurrency" content="EUR" />
    </div>
    <p className="text-gold/70" itemProp="description">{description}</p>
  </div>
);

const ServiceItem = ({ name, price }: { name: string; price: string }) => (
  <div className="flex justify-between items-center py-2 border-b border-gold/20" itemScope itemType="https://schema.org/Offer">
    <span className="text-gold/80" itemProp="name">{name}</span>
    <span className="font-bold" itemProp="price">{price}</span>
    <meta itemProp="priceCurrency" content="EUR" />
  </div>
);

const Tarifs = () => {
  return (
    <section id="tarifs" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Nos Tarifs Détailing Auto à Charleville-Mézières et Reims</h2>
        <p className="text-gold/80 text-center max-w-3xl mx-auto mb-8">
          Des formules adaptées à tous les types de véhicules et budgets, avec un service premium de qualité professionnelle.
          Prix transparents pour nos prestations de nettoyage, protection et rénovation automobile dans les Ardennes et la Marne.
        </p>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Forfaits Nettoyage Complet & Détailing</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard
              title="Véhicules Classiques & Citadines"
              price="À partir de 80€"
              description="Nettoyage complet intérieur et extérieur pour véhicules de petite taille jusqu'à 4m. Idéal pour les citadines et compactes urbaines dans les rues de Charleville et Reims."
            />
            <PriceCard
              title="SUV & Monospaces"
              price="À partir de 120€"
              description="Nettoyage complet intérieur et extérieur pour véhicules familiaux, SUV et monospaces. Parfait pour les familles de la région Champagne-Ardenne."
              isHighlighted
            />
            <PriceCard
              title="Utilitaires & Grand Format"
              price="À partir de 150€"
              description="Nettoyage complet intérieur et extérieur pour grands véhicules, utilitaires et professionnels. Solution adaptée aux commerçants et artisans des Ardennes et de la Marne."
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Protection Céramique Professionnelle</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <PriceCard
              title="Protection Céramique Classique"
              price="À partir de 250€"
              description="Traitement céramique professionnel offrant une protection jusqu'à 2 ans avec effet hydrophobe et brillance intense. Idéal pour véhicules quotidiens dans les conditions climatiques du Grand Est."
            />
            <PriceCard
              title="Protection Céramique Premium"
              price="À partir de 450€"
              description="Protection céramique ultra-performante avec garantie jusqu'à 5 ans. Résistance maximale aux intempéries, pollutions industrielles et sel de déneigement des routes ardennaises en hiver."
              isHighlighted
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-2xl font-serif font-bold text-gold mb-6 text-center">Services Additionnels de Détailing à la Carte</h3>
          <p className="text-gold/80 text-center max-w-3xl mx-auto mb-8">
            Complétez votre forfait avec des services spécialisés pour un résultat sur mesure. Tarifs pour Charleville-Mézières, Reims et les environs.
          </p>
          <div className="max-w-3xl mx-auto bg-dark p-6 rounded-lg border border-gold/30" itemScope itemType="https://schema.org/ItemList">
            <meta itemProp="name" content="Services de détailing automobile à la carte" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              <div>
                <ServiceItem name="Nettoyage intérieur complet" price="À partir de 30€" />
                <ServiceItem name="Nettoyage extérieur premium" price="À partir de 44€" />
                <ServiceItem name="Nettoyage et protection des jantes" price="À partir de 25€" />
                <ServiceItem name="Rénovation des phares ternis" price="À partir de 50€" />
                <ServiceItem name="Traitement et hydratation du cuir" price="À partir de 25€" />
              </div>
              <div>
                <ServiceItem name="Traitement hydrophobe des vitres" price="À partir de 20€" />
                <ServiceItem name="Nettoyage des taches tenaces" price="À partir de 20€" />
                <ServiceItem name="Désinfection à la vapeur sèche" price="À partir de 25€" />
                <ServiceItem name="Service de nettoyage à domicile" price="À partir de 15€" />
                <ServiceItem name="Polissage et correction de défauts" price="À partir de 90€" />
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gold/70 italic">
              * Tous nos tarifs comprennent les déplacements dans un rayon de 15km autour de Charleville-Mézières et Reims. <br/>
              * Des frais supplémentaires peuvent s'appliquer selon la distance et l'état du véhicule.
            </p>
          </div>
        </div>
      </div>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: `
        {
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          "name": "Premium Auto Clean",
          "description": "Service de détailing et nettoyage automobile haut de gamme à Charleville-Mézières et Reims",
          "areaServed": [
            {
              "@type": "City",
              "name": "Charleville-Mézières"
            },
            {
              "@type": "City",
              "name": "Reims"
            },
            {
              "@type": "State",
              "name": "Grand Est"
            }
          ],
          "priceRange": "€€",
          "makesOffer": [
            {
              "@type": "Offer",
              "name": "Nettoyage Complet Véhicules Classiques",
              "price": "80",
              "priceCurrency": "EUR"
            },
            {
              "@type": "Offer",
              "name": "Protection Céramique Premium",
              "price": "450",
              "priceCurrency": "EUR"
            }
          ]
        }
      `}} />
    </section>
  );
};

export default Tarifs;
