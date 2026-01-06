
import { Monitor, HardDrive, Shield, Smartphone, Laptop, Wifi } from "lucide-react";

const ServiceCard = ({ title, icon: Icon, description }: { title: string; icon: React.ElementType; description: string }) => (
  <div className="p-6 border border-border rounded-xl hover:border-primary/30 transition-colors">
    <Icon className="text-primary mb-4" size={24} />
    <h3 className="font-medium mb-2">{title}</h3>
    <p className="text-muted-foreground text-sm">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl font-semibold mb-4">Services</h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
          <ServiceCard
            title="PC lent"
            icon={Monitor}
            description="Nettoyage, optimisation, remise en forme."
          />
          <ServiceCard
            title="Virus"
            icon={Shield}
            description="Suppression des virus et sécurisation."
          />
          <ServiceCard
            title="Écran cassé"
            icon={Smartphone}
            description="Remplacement écran iPhone, iPad, Mac."
          />
          <ServiceCard
            title="Données perdues"
            icon={HardDrive}
            description="Récupération de fichiers supprimés."
          />
          <ServiceCard
            title="Mise à niveau"
            icon={Laptop}
            description="Plus de RAM, SSD, meilleures performances."
          />
          <ServiceCard
            title="WiFi / Réseau"
            icon={Wifi}
            description="Configuration et dépannage réseau."
          />
        </div>
        
        <div className="text-center mt-10">
          <a href="#contact" className="btn-primary">
            Me contacter
          </a>
        </div>
      </div>
    </section>
  );
};

export default Services;
