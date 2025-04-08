
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CheckCircle, Star, Award, Crown } from "lucide-react";

const SubscriptionCard = ({ 
  title,
  price,
  yearlyPrice,
  description,
  features,
  icon: Icon,
  isHighlighted = false 
}: { 
  title: string;
  price: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  icon: React.ElementType;
  isHighlighted?: boolean;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      viewport={{ once: true }}
      className={`
        card-premium relative overflow-hidden rounded-xl
        ${isHighlighted ? 'border-2 border-gold shadow-lg shadow-gold/20' : 'border border-gold/30'} 
        text-center p-6 transform transition-all duration-300
        ${isHovered ? 'translate-y-[-8px] shadow-xl shadow-gold/30' : ''}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {isHighlighted && (
        <div className="absolute top-0 right-0 bg-gold py-1 px-4 text-dark text-xs font-bold transform translate-x-[30%] translate-y-[30%] rotate-45">
          POPULAIRE
        </div>
      )}
      
      <div className="flex justify-center mb-4">
        <Icon className={`size-12 ${isHighlighted ? 'text-gold' : 'text-gold/70'}`} />
      </div>
      
      <h3 className="text-2xl font-bold mb-2 font-serif">{title}</h3>
      
      <div className="mb-6">
        <div className="flex items-center justify-center">
          <span className={`text-4xl font-bold ${isHighlighted ? 'gold-gradient-text' : 'text-gold'}`}>{price}</span>
          <span className="text-gold/60 ml-2">/mois</span>
        </div>
        <div className="mt-1 text-gold/60 text-sm">
          ou {yearlyPrice}/an <span className="bg-gold/20 text-gold px-2 py-0.5 rounded-full text-xs ml-1">-15%</span>
        </div>
      </div>
      
      <p className="text-gold/70 mb-6">{description}</p>
      
      <div className="mb-6">
        <ul className="text-left space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <CheckCircle className="text-gold mr-2 size-4 shrink-0" />
              <span className="text-gold/80 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <motion.a 
        href="#contact"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`
          w-full inline-block px-6 py-3 rounded-md transition-all font-medium
          ${isHighlighted 
            ? 'btn-gold animate-pulse' 
            : 'border border-gold/50 hover:border-gold hover:bg-gold/10'
          }
        `}
      >
        S'abonner
      </motion.a>
    </motion.div>
  );
};

const PricingToggle = ({
  yearly,
  setYearly
}: {
  yearly: boolean;
  setYearly: (value: boolean) => void;
}) => (
  <div className="flex items-center justify-center mb-10">
    <span className={`mr-3 ${!yearly ? 'text-gold' : 'text-gold/50'}`}>Mensuel</span>
    <div 
      className="relative w-14 h-7 bg-dark-light rounded-full cursor-pointer border border-gold/30"
      onClick={() => setYearly(!yearly)}
    >
      <div 
        className={`
          absolute w-5 h-5 bg-gold rounded-full top-1 transition-all duration-300
          ${yearly ? 'left-8' : 'left-1'}
        `}
      ></div>
    </div>
    <span className={`ml-3 ${yearly ? 'text-gold' : 'text-gold/50'}`}>
      Annuel <span className="bg-gold/20 text-gold px-2 py-0.5 rounded-full text-xs ml-1">-15%</span>
    </span>
  </div>
);

const Abonnements = () => {
  const [yearly, setYearly] = useState(false);
  const [animateHeading, setAnimateHeading] = useState(false);
  
  useEffect(() => {
    // Trigger heading animation after component mount
    setAnimateHeading(true);
  }, []);

  const subscriptionPlans = [
    {
      title: "Formule Classique",
      price: "25€",
      yearlyPrice: "255€",
      description: "Pour les véhicules classiques",
      icon: Star,
      features: [
        "Un nettoyage complet par mois",
        "Extérieur et intérieur",
        "Traitement des vitres",
        "Dépoussiérage complet"
      ]
    },
    {
      title: "Formule Premium",
      price: "35€",
      yearlyPrice: "357€",
      description: "Idéal pour les SUV et familiales",
      icon: Award,
      isHighlighted: true,
      features: [
        "Un nettoyage complet par mois",
        "Extérieur et intérieur",
        "Traitement vitres et plastiques",
        "Nettoyage sièges et moquettes",
        "Désodorisation de l'habitacle"
      ]
    },
    {
      title: "Formule VIP",
      price: "50€",
      yearlyPrice: "510€",
      description: "Pour les utilitaires et véhicules luxueux",
      icon: Crown,
      features: [
        "Un nettoyage complet par mois",
        "Extérieur et intérieur approfondi",
        "Traitement cuir et tissus",
        "Protection céramique légère",
        "Désinfection complète",
        "Service prioritaire"
      ]
    }
  ];

  return (
    <section id="abonnements" className="py-20 bg-dark relative overflow-hidden">
      {/* Particules décoratives */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-gold/5 rounded-full filter blur-[80px]"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-gold/5 rounded-full filter blur-[100px]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={animateHeading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="section-heading text-center"
        >
          Nos Formules d'Abonnement
        </motion.h2>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-gold/80 max-w-2xl mx-auto mb-12"
        >
          Profitez d'un nettoyage complet chaque mois pour maintenir votre véhicule en parfait état tout au long de l'année.
          Économisez avec nos formules annuelles.
        </motion.p>
        
        <PricingToggle yearly={yearly} setYearly={setYearly} />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {subscriptionPlans.map((plan, index) => (
            <SubscriptionCard
              key={index}
              title={plan.title}
              price={yearly ? plan.yearlyPrice : plan.price}
              yearlyPrice={plan.yearlyPrice}
              description={plan.description}
              features={plan.features}
              icon={plan.icon}
              isHighlighted={plan.isHighlighted}
            />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gold/70 mb-6">
            Tous nos abonnements incluent une priorité de réservation et une remise de 15% sur les services additionnels.
          </p>
          <motion.a 
            href="#contact" 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(212,175,55,0.5)" }}
            whileTap={{ scale: 0.95 }}
            className="btn-gold"
          >
            Demander plus d'informations
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Abonnements;
