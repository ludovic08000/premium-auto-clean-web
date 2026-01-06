
import { CheckCircle, Clock, Wrench, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const AboutUs = () => {
  const steps = [
    { 
      icon: CheckCircle, 
      title: "Diagnostic Gratuit", 
      description: "Analyse complète de votre appareil sans frais.",
      number: "01"
    },
    { 
      icon: Wrench, 
      title: "Devis Transparent", 
      description: "Prix fixe avant intervention, pas de surprise.",
      number: "02"
    },
    { 
      icon: Clock, 
      title: "Réparation Express", 
      description: "Intervention rapide, récupérez votre machine vite.",
      number: "03"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-1/2 h-px bg-gradient-to-r from-neon-cyan/30 to-transparent" />
        <div className="absolute top-1/2 right-0 w-1/2 h-px bg-gradient-to-l from-neon-magenta/30 to-transparent" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto text-center mb-16"
        >
          <span className="text-neon-cyan text-sm uppercase tracking-widest font-mono mb-4 block">
            // Processus
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold uppercase tracking-wider">
            Comment ça <span className="neon-text-magenta">marche</span>
          </h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <motion.div 
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative text-center group"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-1/2 w-full h-px">
                  <div className="h-full bg-gradient-to-r from-neon-cyan/30 to-neon-magenta/30" />
                  <ChevronRight className="absolute right-0 top-1/2 -translate-y-1/2 text-neon-magenta/50" size={16} />
                </div>
              )}

              {/* Number Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-6xl font-display font-bold text-muted/20 group-hover:text-neon-cyan/10 transition-colors">
                {step.number}
              </div>

              {/* Icon */}
              <div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <div className="absolute inset-0 border-2 border-neon-cyan/30 rotate-45 group-hover:rotate-[135deg] transition-transform duration-500" />
                <div className="absolute inset-2 bg-background" />
                <step.icon className="text-neon-cyan relative z-10" size={28} />
              </div>

              <h4 className="font-display font-bold text-lg uppercase tracking-wider mb-2 group-hover:neon-text-cyan transition-all">
                {step.title}
              </h4>
              <p className="text-muted-foreground text-sm font-mono">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
