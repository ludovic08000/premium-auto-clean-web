
import { Monitor, Cpu, HardDrive, Shield, Smartphone, Laptop, Wifi } from "lucide-react";

const ServiceCard = ({ title, icon: Icon, description }: { title: string; icon: React.ElementType; description: string }) => (
  <div className="card-service group">
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
      <Icon className="text-primary" size={24} />
    </div>
    <h3 className="text-lg font-semibold mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="section-heading">Ce qu'on fait pour vous</h2>
          <p className="text-muted-foreground">
            Des solutions simples pour tous vos problèmes informatiques. 
            On parle français, pas en jargon technique.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <ServiceCard
            title="PC qui rame"
            icon={Monitor}
            description="Votre ordinateur met 10 minutes à démarrer ? On le remet en forme rapidement."
          />
          <ServiceCard
            title="Virus et arnaques"
            icon={Shield}
            description="Pop-ups bizarres, messages suspects ? On nettoie tout et on sécurise votre PC."
          />
          <ServiceCard
            title="Écran cassé"
            icon={Smartphone}
            description="iPhone, iPad ou Mac avec l'écran fissuré ? On le remplace avec des pièces de qualité."
          />
          <ServiceCard
            title="Données perdues"
            icon={HardDrive}
            description="Photos, documents importants disparus ? On fait tout pour les récupérer."
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Batterie morte"
            icon={Cpu}
            description="Votre appareil ne tient plus la charge ? On remplace la batterie."
          />
          <ServiceCard
            title="Mise à niveau"
            icon={Laptop}
            description="Besoin de plus de vitesse ou de stockage ? On améliore votre matériel."
          />
          <ServiceCard
            title="Problèmes WiFi"
            icon={Wifi}
            description="Internet qui coupe, signal faible ? On trouve la solution."
          />
        </div>
        
        <div className="text-center mt-12">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Décrire mon problème
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
