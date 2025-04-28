
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
      question: "Qu'est-ce que le détailing automobile haut de gamme à Charleville-Mézières et Reims ?",
      answer: "Le détailing automobile haut de gamme dans les régions de Charleville-Mézières et Reims est un processus méticuleux et approfondi qui va bien au-delà d'un simple lavage de voiture. Il s'agit d'un ensemble de techniques spécialisées visant à restaurer et préserver l'esthétique de votre véhicule dans ses moindres détails. Cela comprend le polissage professionnel, la correction des imperfections de la peinture, la protection par traitement céramique et le nettoyage intérieur minutieux qui restaure l'aspect neuf de votre habitacle. Chez Premium Auto Clean, nous utilisons exclusivement des produits haut de gamme adaptés aux conditions climatiques des Ardennes et de la Marne."
    },
    {
      question: "Quels sont les avantages d'un traitement céramique professionnel pour ma voiture dans la région Grand Est ?",
      answer: "Un traitement céramique professionnel réalisé dans la région Grand Est offre une protection durable supérieure aux cires traditionnelles, particulièrement adaptée aux conditions climatiques locales. Il crée une couche protectrice chimiquement liée à la peinture qui résiste aux UV, au sel de déneigement hivernal, aux pollens printaniers et aux pollutions industrielles présentes dans les zones de Charleville-Mézières et Reims. Ce revêtement nano-céramique maintient l'éclat de votre véhicule plus longtemps, protège contre l'oxydation et les micro-rayures tout en offrant une brillance exceptionnelle pouvant durer 3 à 5 ans selon le traitement choisi. Il facilite également le nettoyage grâce à ses propriétés super-hydrophobes qui font perler l'eau et les saletés."
    },
    {
      question: "En quoi consiste votre service de nettoyage écologique automobile à domicile dans les Ardennes ?",
      answer: "Notre service de nettoyage écologique automobile à domicile dans les Ardennes utilise des produits biodégradables certifiés et des techniques économes en eau, spécialement adaptés au respect de l'environnement local. Nous intervenons directement chez vous à Charleville-Mézières, Sedan, Rethel et leurs environs avec tout l'équipement nécessaire. Notre processus inclut l'utilisation de nettoyeurs vapeur haute pression qui éliminent 99,9% des bactéries et allergènes sans produits chimiques agressifs, préservant ainsi votre santé et nos écosystèmes régionaux. Nous n'utilisons que 5 à 7 litres d'eau par véhicule contre 150 à 200 litres pour un lavage traditionnel, tout en garantissant un résultat impeccable même sur les véhicules très sales."
    },
    {
      question: "Combien de temps prend un service complet de détailing automobile professionnel à Reims ?",
      answer: "À Reims, un service complet de détailing automobile professionnel Premium Auto Clean prend généralement entre 4 et 8 heures selon la taille du véhicule (citadine, berline, SUV) et son état initial. Pour les traitements spécifiques comme la correction de peinture sur véhicules anciens ou l'application d'un traitement céramique professionnel, le processus peut s'étendre sur une journée entière, voire deux jours pour garantir un résultat parfait et durable. Nous proposons un service de véhicule de courtoisie pour les clients de la région rémoise pendant la durée de l'intervention. Pour les détailing ultra-premium destinés aux véhicules de prestige ou de collection, comptez jusqu'à 3 jours de travail minutieux dans notre atelier climatisé."
    },
    {
      question: "Quelles zones géographiques couvrez-vous pour vos services à domicile autour de Charleville-Mézières et Reims ?",
      answer: "Nous proposons des services à domicile dans un large périmètre autour de Charleville-Mézières et Reims. Dans les Ardennes, nous intervenons à Charleville-Mézières, Sedan, Rethel, Vouziers, Monthermé et jusqu'à la frontière belge. Dans la Marne, nous couvrons Reims, Châlons-en-Champagne, Épernay, Fismes et leurs environs. Notre équipe mobile dispose de tout l'équipement nécessaire pour réaliser un travail de qualité professionnelle directement chez vous, que ce soit à votre domicile ou sur votre lieu de travail. Pour les zones plus éloignées comme Troyes, Laon ou Verdun, des frais supplémentaires de déplacement peuvent s'appliquer. Sur demande, nous pouvons également intervenir dans toute la région Grand Est pour des prestations spécifiques sur flotte d'entreprise ou véhicules de prestige."
    },
    {
      question: "Comment la protection céramique automobile diffère-t-elle d'une cire traditionnelle pour les véhicules exposés au climat des Ardennes ?",
      answer: "Dans le climat variable des Ardennes, caractérisé par des hivers rigoureux et des étés parfois caniculaires, la protection céramique offre des avantages considérables par rapport aux cires traditionnelles. Contrairement à une cire qui dure généralement 1-3 mois dans nos conditions régionales, la protection nano-céramique forme une liaison chimique avec la peinture pour une durabilité de 1-5 ans selon la qualité du produit et l'entretien. Elle résiste remarquablement au sel de déneigement hivernal, aux pluies acides, aux résines d'arbres des forêts ardennaises et aux rayons UV intenses d'été. Sa résistance thermique (-40°C à +250°C) est parfaitement adaptée aux amplitudes thermiques locales. Elle offre également une protection supérieure contre les micro-rayures causées par les poussières industrielles présentes dans certaines zones de notre région, tout en présentant un effet hydrophobe exceptionnel qui facilite grandement le nettoyage pendant les saisons boueuses. Pour les véhicules stationnés en extérieur à l'année dans notre région, c'est un investissement particulièrement judicieux."
    },
    {
      question: "Que comprend exactement la préparation esthétique d'un véhicule avant vente à Charleville-Mézières ?",
      answer: "La préparation esthétique d'un véhicule avant vente à Charleville-Mézières chez Premium Auto Clean est un processus complet qui optimise l'apparence pour maximiser sa valeur sur le marché local. Elle comprend : le lavage extérieur avec décontamination chimique et physique adaptée aux pollutions industrielles de la région, l'élimination des traces de calcaire fréquentes dans notre eau, la correction de peinture professionnelle pour éliminer les défauts (micro-rayures, hologrammes, oxydation), le polissage multi-étapes pour restaurer une brillance showroom, la protection de la carrosserie (cire haute performance ou traitement céramique selon budget), le nettoyage intégral de l'habitacle incluant le traitement des cuirs et plastiques, la désinfection complète éliminant les odeurs tenaces, le traitement des moisissures fréquentes dans notre climat humide, et la finition méticuleuse des détails comme les jantes, pneus, vitres et garnitures extérieures. Notre rapport qualité-prix est optimal pour maximiser le retour sur investissement lors de la revente sur le marché automobile des Ardennes."
    },
    {
      question: "Comment protéger sa voiture des conditions hivernales spécifiques à la région de Reims ?",
      answer: "Pour protéger votre voiture des conditions hivernales spécifiques à la région de Reims, nous recommandons plusieurs mesures préventives. Premièrement, un traitement céramique appliqué à l'automne créera une barrière protectrice contre le sel de déneigement particulièrement corrosif utilisé dans la Marne. Deuxièmement, notre traitement spécial châssis et passages de roues avec une cire protectrice préservera les zones sensibles à la corrosion. Troisièmement, l'application d'un traitement hydrophobe sur toutes les vitres améliorera considérablement la visibilité lors des fréquentes pluies verglaçantes de la région. Quatrièmement, notre traitement imperméabilisant pour tissus et moquettes protégera l'habitacle des infiltrations de neige fondue et de boue. Enfin, nous proposons un forfait d'entretien hivernal incluant des lavages réguliers à l'eau chaude pour éliminer le sel accumulé sous le véhicule, particulièrement important pour les véhicules stationnés en extérieur dans les zones urbaines de Reims où l'épandage de sel est abondant."
    },
    {
      question: "Quels sont les meilleurs traitements pour les voitures exposées à la pollution urbaine de Reims et Charleville-Mézières ?",
      answer: "Pour les voitures régulièrement exposées à la pollution urbaine spécifique de Reims et Charleville-Mézières, nous recommandons une combinaison de traitements protecteurs. Notre protection nano-céramique SiO2 de grade professionnel forme une barrière imperméable contre les particules fines et les retombées industrielles présentes dans ces deux agglomérations. Pour les véhicules garés près des zones industrielles de Charleville ou du pôle agro-industriel rémois, notre formule décontaminante spéciale neutralise les résidus acides qui s'accumulent sur la carrosserie. Le traitement anti-pollution de l'habitacle avec purification par ozone élimine les particules nocives qui pénètrent dans l'intérieur du véhicule, particulièrement bénéfique pour les personnes allergiques ou asthmatiques. Notre forfait urbain inclut également un traitement des jantes anti-poussière de frein, très efficace contre les résidus métalliques qui s'accumulent dans la circulation dense du centre-ville de Reims. Pour une protection optimale, nous conseillons un programme d'entretien trimestriel adapté au niveau de pollution variable selon les saisons dans notre région."
    },
    {
      question: "Proposez-vous des services spécifiques pour les véhicules de collection si populaires dans les Ardennes ?",
      answer: "Absolument, nous proposons des services hautement spécialisés pour les véhicules de collection, particulièrement prisés dans la tradition automobile des Ardennes. Notre expertise inclut la restauration cosmétique des carrosseries anciennes avec des techniques adaptées aux peintures d'époque, souvent plus sensibles que les peintures modernes. Nous utilisons des produits spécifiquement formulés pour les métaux, chromes et matériaux vintage présents sur les modèles de collection. Pour les rallyes historiques des Ardennes, notre préparation esthétique complète comprend un traitement protecteur temporaire facilement retirable. Notre équipe a l'expérience des intérieurs en cuir ancien, boiseries et tissus d'époque nécessitant des soins particuliers. Nous travaillons régulièrement avec les clubs automobiles locaux comme 'Les Belles Ardennaises' et 'Reims Champagne Véhicules Historiques', et offrons des tarifs préférentiels pour leurs membres. Notre atelier dispose d'un espace dédié aux véhicules de collection avec équipements adaptés et assurance spécifique pour ces véhicules de valeur."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-dark-light">
      <div className="container mx-auto px-4">
        <header className="mb-12 text-center">
          <h2 className="section-heading">Questions Fréquemment Posées sur le Détailing Automobile dans les Ardennes et à Reims</h2>
          <p className="text-gold/80 max-w-3xl mx-auto mt-4">
            Découvrez les réponses aux questions les plus courantes concernant nos services de <strong>détailing automobile haut de gamme</strong>, 
            la <strong>protection céramique automobile</strong> et le <strong>nettoyage écologique de voiture</strong> à Charleville-Mézières, Reims et dans toute la région Champagne-Ardenne.
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
            Vous avez d'autres questions concernant nos services de <strong>détailing automobile professionnel</strong>, 
            la <strong>protection céramique pour voiture</strong> ou le <strong>nettoyage écologique d'automobile à domicile</strong> dans les Ardennes et la Marne ? 
            N'hésitez pas à nous contacter pour obtenir des réponses personnalisées adaptées à votre véhicule et votre situation.
          </p>
          <a href="#contact" className="btn-gold mt-6 inline-flex items-center">
            <HelpCircle size={18} className="mr-2" aria-hidden="true" />
            Poser une question sur nos services de nettoyage
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
