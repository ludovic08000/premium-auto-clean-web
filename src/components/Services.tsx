
import { Monitor, Cpu, HardDrive, Wifi, Shield, Smartphone, Laptop, Database } from "lucide-react";

const ServiceCard = ({ title, icon, description }: { title: string; icon: React.ReactNode; description: string }) => (
  <div className="card-premium group">
    <div className="flex items-center mb-4 text-primary">
      <div className="p-3 rounded-xl bg-secondary border border-primary/20 group-hover:border-primary/50 transition-all">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold mb-2 text-foreground">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Nos Services</h2>
        
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-foreground/70">
            Nevexo vous propose une gamme complète de services de réparation et maintenance informatique. 
            Que ce soit pour un problème matériel ou logiciel, notre équipe d'experts est là pour vous aider.
          </p>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Réparation PC & Mac</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ServiceCard
              title="Diagnostic Complet"
              icon={<Monitor size={24} />}
              description="Analyse approfondie de votre appareil pour identifier tous les problèmes matériels et logiciels. Rapport détaillé et devis gratuit."
            />
            <ServiceCard
              title="Réparation Matérielle"
              icon={<Cpu size={24} />}
              description="Remplacement de composants défectueux : écran, clavier, batterie, carte mère, RAM, processeur et plus encore."
            />
            <ServiceCard
              title="Récupération de Données"
              icon={<HardDrive size={24} />}
              description="Récupération de vos fichiers précieux sur disques durs endommagés, clés USB ou cartes mémoire corrompues."
            />
            <ServiceCard
              title="Suppression Virus"
              icon={<Shield size={24} />}
              description="Élimination de virus, malwares, ransomwares et logiciels espions. Installation d'antivirus professionnel."
            />
          </div>
        </div>
        
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Smartphones & Tablettes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-3">
                <Smartphone className="text-primary" size={24} />
                <h4 className="font-bold text-foreground">Réparation d'écran</h4>
              </div>
              <p className="text-foreground/70">Remplacement d'écran cassé ou fissuré pour iPhone, Samsung, Huawei et autres marques. Pièces de qualité garantie.</p>
            </div>
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-3">
                <Database className="text-primary" size={24} />
                <h4 className="font-bold text-foreground">Remplacement batterie</h4>
              </div>
              <p className="text-foreground/70">Votre téléphone ne tient plus la charge ? Nous remplaçons la batterie par une batterie neuve de haute qualité.</p>
            </div>
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-3">
                <Wifi className="text-primary" size={24} />
                <h4 className="font-bold text-foreground">Problèmes logiciels</h4>
              </div>
              <p className="text-foreground/70">Réinitialisation, mise à jour système, déblocage et récupération de données sur tous types d'appareils mobiles.</p>
            </div>
          </div>
        </div>
        
        <div>
          <h2 className="text-2xl font-bold text-primary mb-6 text-center">Services Additionnels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-3">
                <Laptop className="text-primary" size={24} />
                <h4 className="font-bold text-foreground">Optimisation PC</h4>
              </div>
              <p className="text-foreground/70">Nettoyage système, désinstallation de programmes inutiles, optimisation du démarrage et mise à jour des drivers pour un PC plus rapide.</p>
            </div>
            <div className="card-premium">
              <div className="flex items-center gap-3 mb-3">
                <Wifi className="text-primary" size={24} />
                <h4 className="font-bold text-foreground">Installation réseau</h4>
              </div>
              <p className="text-foreground/70">Configuration de votre box internet, installation de répéteurs WiFi, création de réseau sécurisé pour particuliers et professionnels.</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-foreground/70 max-w-3xl mx-auto mb-6">
            Tous nos services sont réalisés par des techniciens certifiés avec des pièces de qualité. 
            Nous garantissons nos réparations et offrons un suivi personnalisé pour chaque client.
          </p>
          <a href="#contact" className="btn-primary inline-flex">Demander un devis gratuit</a>
        </div>
      </div>
    </section>
  );
};

export default Services;
