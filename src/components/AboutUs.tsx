
import { Shield, Award, Clock, Users } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="p-3 rounded-full bg-dark-lighter border border-gold/20 mb-4">
      <Icon className="text-gold" size={24} />
    </div>
    <h3 className="font-bold text-lg mb-2">{title}</h3>
    <p className="text-gold/70">{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center text-3xl md:text-4xl font-serif font-bold mb-12 text-gold">Notre Expertise</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-gold/80 text-center mb-8">
            Bienvenue chez Premium Auto Clean, votre expert en nettoyage automobile à Charleville-Mézières et Reims. 
            Fondé en 2016 par des passionnés d'automobile, notre entreprise s'est rapidement imposée comme une référence 
            dans le domaine du nettoyage et du détailing haut de gamme.
          </p>
          
          <p className="text-gold/80 text-center">
            Notre mission est simple : redonner à votre véhicule son éclat d'origine grâce à des services de 
            nettoyage professionnel adaptés à chaque type de voiture. Nous utilisons exclusivement des produits 
            premium et des techniques innovantes pour garantir des résultats exceptionnels tout en respectant 
            l'environnement et vos équipements.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={Shield}
            title="Qualité Premium"
            description="Nous utilisons uniquement des produits haut de gamme et des équipements professionnels pour des résultats impeccables."
          />
          <FeatureCard 
            icon={Award}
            title="8+ Années d'Expérience"
            description="Notre équipe qualifiée possède une expertise approfondie dans tous les aspects du nettoyage automobile."
          />
          <FeatureCard 
            icon={Clock}
            title="Service Rapide"
            description="Nous respectons votre temps avec des interventions efficaces sans compromettre la qualité."
          />
          <FeatureCard 
            icon={Users}
            title="Satisfaction Client"
            description="Votre satisfaction est notre priorité absolue, c'est pourquoi nous garantissons la qualité de nos services."
          />
        </div>
        
        <div className="bg-dark-light p-8 rounded-lg max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-gold mb-4 text-center">Notre Engagement Qualité</h3>
          
          <p className="text-gold/80 mb-4">
            Chez Premium Auto Clean, nous nous engageons à offrir un service d'excellence à chaque client. 
            Notre approche méticuleuse et notre souci du détail nous permettent de traiter chaque véhicule 
            comme s'il s'agissait du nôtre.
          </p>
          
          <p className="text-gold/80 mb-4">
            Nous sommes fiers de compter parmi notre clientèle des particuliers exigeants mais aussi des 
            professionnels de l'automobile qui nous font confiance pour la préparation de leurs véhicules 
            neufs et d'occasion.
          </p>
          
          <p className="text-gold/80">
            Que vous souhaitiez redonner vie à une voiture ancienne, préparer votre véhicule pour la vente ou 
            simplement maintenir son état optimal, notre équipe est là pour répondre à vos besoins avec 
            professionnalisme et passion.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
