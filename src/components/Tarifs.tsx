
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
  <div className={`card-premium ${isHighlighted ? 'border-primary ring-2 ring-primary/20' : ''}`}>
    <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
    <div className="mb-4">
      <span className="text-3xl font-bold tech-gradient-text">{price}</span>
    </div>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const ServiceItem = ({ name, price }: { name: string; price: string }) => (
  <div className="flex justify-between items-center py-3 border-b border-primary/20">
    <span className="text-foreground/80">{name}</span>
    <span className="font-bold text-primary">{price}</span>
  </div>
);

const Tarifs = () => {
  return (
    <section id="tarifs" className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Nos Tarifs</h2>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-foreground/70">
            Des tarifs transparents et compétitifs pour tous vos besoins en réparation informatique.
            Diagnostic gratuit pour toute réparation. Devis sans engagement.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-display font-bold text-primary mb-6 text-center">Forfaits Diagnostic</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <PriceCard
              title="Diagnostic Express"
              price="Gratuit"
              description="Diagnostic rapide de votre appareil en 15 minutes. Identification du problème et devis détaillé sans engagement."
            />
            <PriceCard
              title="Diagnostic Complet"
              price="29€"
              description="Analyse approfondie de votre PC ou Mac. Tests matériels complets, rapport détaillé et recommandations personnalisées."
              isHighlighted
            />
            <PriceCard
              title="Diagnostic à domicile"
              price="49€"
              description="Un technicien se déplace chez vous pour diagnostiquer votre appareil. Inclut le déplacement et le rapport complet."
            />
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-display font-bold text-primary mb-6 text-center">Tarifs Réparation</h2>
          <div className="max-w-4xl mx-auto bg-background p-6 rounded-xl border border-primary/30">
            <h3 className="text-lg font-bold text-foreground mb-4">PC & Mac</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 mb-8">
              <div>
                <ServiceItem name="Suppression virus / malware" price="49€" />
                <ServiceItem name="Réinstallation Windows / macOS" price="59€" />
                <ServiceItem name="Remplacement disque dur / SSD" price="à partir de 79€" />
                <ServiceItem name="Upgrade RAM" price="à partir de 49€" />
              </div>
              <div>
                <ServiceItem name="Remplacement écran laptop" price="à partir de 129€" />
                <ServiceItem name="Remplacement batterie laptop" price="à partir de 69€" />
                <ServiceItem name="Récupération de données" price="à partir de 89€" />
                <ServiceItem name="Nettoyage / changement pâte thermique" price="39€" />
              </div>
            </div>
            
            <h3 className="text-lg font-bold text-foreground mb-4">Smartphones & Tablettes</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10">
              <div>
                <ServiceItem name="Remplacement écran iPhone" price="à partir de 79€" />
                <ServiceItem name="Remplacement écran Samsung" price="à partir de 89€" />
                <ServiceItem name="Remplacement batterie smartphone" price="à partir de 39€" />
              </div>
              <div>
                <ServiceItem name="Remplacement écran tablette" price="à partir de 99€" />
                <ServiceItem name="Réparation connecteur de charge" price="à partir de 49€" />
                <ServiceItem name="Déblocage / réinitialisation" price="29€" />
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-foreground/60 text-sm">
                * Les prix incluent la main d'œuvre. Le prix des pièces peut varier selon le modèle de votre appareil.
                Garantie de 6 mois sur toutes nos réparations.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-foreground/70 max-w-3xl mx-auto mb-6">
              Vous ne trouvez pas le service dont vous avez besoin ? Contactez-nous pour un devis personnalisé.
              Nous intervenons sur tous types d'appareils et de problèmes.
            </p>
            <a href="#contact" className="btn-primary inline-flex">Demander un devis gratuit</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tarifs;
