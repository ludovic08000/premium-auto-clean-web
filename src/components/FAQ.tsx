
import { useState } from "react";
import { ArrowDown, ArrowUp, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
  index: number;
}

const FAQItem = ({ question, answer, isOpen, toggle, index }: FAQItemProps) => {
  const itemId = `faq-item-${index}`;
  
  return (
    <div className="border-b border-gold/20 py-4 last:border-b-0" itemScope itemType="https://schema.org/Question">
      <meta itemProp="name" content={question} />
      <button 
        onClick={toggle}
        className="flex justify-between items-center w-full text-left font-medium text-gold hover:text-gold/80"
        aria-expanded={isOpen}
        aria-controls={itemId}
      >
        <span>{question}</span>
        {isOpen ? <ArrowUp size={18} aria-hidden="true" /> : <ArrowDown size={18} aria-hidden="true" />}
      </button>
      <div 
        id={itemId}
        className={`mt-2 text-gold/70 overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
        aria-hidden={!isOpen}
        itemScope 
        itemType="https://schema.org/Answer"
        itemProp="acceptedAnswer"
      >
        <div itemProp="text" className="pb-2">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
};

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);
  
  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };
  
  const faqItems = [
    {
      question: "Qu'est-ce que le détailing automobile haut de gamme ?",
      answer: "Le détailing automobile haut de gamme est un processus méticuleux et approfondi qui va bien au-delà d'un simple lavage de voiture. Il s'agit d'un ensemble de techniques spécialisées visant à restaurer et préserver l'esthétique de votre véhicule dans ses moindres détails. Cela comprend le polissage professionnel, la correction des imperfections de la peinture, la protection par traitement céramique et le nettoyage intérieur minutieux qui restaure l'aspect neuf de votre habitacle."
    },
    {
      question: "Quels sont les avantages d'un traitement céramique pour ma voiture ?",
      answer: "Un traitement céramique offre une protection durable supérieure aux cires traditionnelles. Il crée une couche protectrice chimiquement liée à la peinture qui résiste aux UV, aux produits chimiques, et facilite le nettoyage grâce à ses propriétés hydrophobes. Ce revêtement maintient l'éclat de votre véhicule plus longtemps, protège contre l'oxydation et les micro-rayures tout en offrant une brillance exceptionnelle pouvant durer plusieurs années selon le traitement choisi."
    },
    {
      question: "En quoi consiste votre service de nettoyage écologique ?",
      answer: "Notre service de nettoyage écologique utilise des produits biodégradables et des techniques économes en eau. Nous privilégions des solutions naturelles et écologiques qui sont efficaces pour nettoyer votre véhicule tout en minimisant l'impact environnemental. Ce processus inclut l'utilisation de nettoyeurs vapeur qui éliminent les bactéries et les allergènes sans produits chimiques agressifs, préservant ainsi votre santé et l'environnement."
    },
    {
      question: "Combien de temps prend un service complet de détailing ?",
      answer: "Un service complet de détailing prend généralement entre 4 et 8 heures selon la taille du véhicule et l'état initial. Pour les traitements plus spécifiques comme la correction de peinture ou l'application d'un traitement céramique professionnel, le processus peut s'étendre sur une journée entière, voire deux jours pour garantir un résultat parfait et durable."
    },
    {
      question: "Proposez-vous des services à domicile dans toute la région ?",
      answer: "Oui, nous proposons des services à domicile à Charleville-Mézières, Reims et dans un rayon de 30 km autour de ces villes. Notre équipe mobile dispose de tout l'équipement nécessaire pour réaliser un travail de qualité professionnelle directement chez vous, que ce soit à votre domicile ou sur votre lieu de travail. Des frais supplémentaires peuvent s'appliquer selon la distance."
    },
    {
      question: "Comment la protection céramique diffère-t-elle d'une cire traditionnelle ?",
      answer: "Contrairement à une cire traditionnelle qui dure généralement 1-3 mois, la protection céramique forme une liaison chimique avec la peinture pour une durabilité de 1-5 ans selon la qualité du produit et l'entretien. Elle offre une résistance supérieure aux rayures légères, aux produits chimiques, aux UV et présente un effet hydrophobe beaucoup plus prononcé, facilitant grandement le nettoyage et maintenant l'aspect brillant du véhicule même dans des conditions difficiles."
    },
    {
      question: "Que comprend exactement la préparation esthétique d'un véhicule ?",
      answer: "La préparation esthétique d'un véhicule est un processus complet qui comprend : le lavage extérieur avec décontamination chimique et physique, la correction de peinture pour éliminer les défauts (micro-rayures, hologrammes, oxydation), le polissage pour restaurer la brillance, la protection de la carrosserie (cire, scellant ou céramique), le nettoyage intégral de l'habitacle incluant le traitement des cuirs et plastiques, et la finition des détails comme les jantes, pneus, vitres et garnitures extérieures."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="section-heading">Questions Fréquemment Posées</h2>
          <p className="text-gold/80 max-w-3xl mx-auto mt-4">
            Découvrez les réponses aux questions les plus courantes concernant nos services de détailing automobile haut de gamme, 
            la protection céramique et le nettoyage écologique de votre véhicule.
          </p>
        </header>
        
        <div className="max-w-3xl mx-auto bg-dark p-6 rounded-lg border border-gold/30" itemScope itemType="https://schema.org/FAQPage">
          {faqItems.map((item, index) => (
            <FAQItem 
              key={index}
              question={item.question} 
              answer={item.answer} 
              isOpen={openFAQ === index} 
              toggle={() => toggleFAQ(index)}
              index={index}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gold/80 max-w-2xl mx-auto">
            Vous avez d'autres questions concernant nos services de <strong>détailing automobile</strong>, 
            la <strong>protection céramique</strong> ou le <strong>nettoyage écologique</strong> ? 
            N'hésitez pas à nous contacter pour obtenir des réponses personnalisées.
          </p>
          <a href="#contact" className="btn-gold mt-6 inline-flex items-center">
            <HelpCircle size={18} className="mr-2" aria-hidden="true" />
            Poser une question
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
