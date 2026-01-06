
import { Monitor, HardDrive, Shield, Smartphone, Laptop, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const ServiceCard = ({ title, icon: Icon, description, index }: { title: string; icon: React.ElementType; description: string; index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    viewport={{ once: true }}
    className="neon-card group cursor-pointer"
  >
    <div className="flex items-center gap-4 mb-4">
      <div className="w-12 h-12 flex items-center justify-center border border-neon-cyan/30 group-hover:border-neon-cyan transition-colors relative">
        <div className="absolute inset-0 bg-neon-cyan/5 group-hover:bg-neon-cyan/10 transition-colors" />
        <Icon className="text-neon-cyan relative z-10" size={24} />
      </div>
      <h3 className="font-display font-bold text-lg uppercase tracking-wider group-hover:neon-text-cyan transition-all">
        {title}
      </h3>
    </div>
    <p className="text-muted-foreground text-sm font-mono pl-16">{description}</p>
  </motion.div>
);

const Services = () => {
  const services = [
    { title: "PC Lent", icon: Monitor, description: "Nettoyage, optimisation, remise en forme complète." },
    { title: "Virus", icon: Shield, description: "Suppression des malwares et sécurisation système." },
    { title: "Écran Cassé", icon: Smartphone, description: "Remplacement écran iPhone, iPad, MacBook." },
    { title: "Données Perdues", icon: HardDrive, description: "Récupération de fichiers supprimés ou corrompus." },
    { title: "Upgrade", icon: Laptop, description: "Plus de RAM, SSD, performances maximales." },
    { title: "Réseau", icon: Wifi, description: "Configuration WiFi et dépannage réseau." }
  ];

  return (
    <section id="services" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 cyber-grid opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-cyan/50 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-magenta/50 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-xl mx-auto mb-16"
        >
          <span className="text-neon-magenta text-sm uppercase tracking-widest font-mono mb-4 block">
            // Nos Services
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wider glitch">
            Solutions Tech
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a href="#contact" className="btn-primary">
            <span className="relative z-10">Demander un devis</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
