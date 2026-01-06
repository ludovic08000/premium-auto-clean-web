
import { Shield, Award, Clock, Users } from "lucide-react";

const FeatureCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="flex flex-col items-center text-center p-6">
    <div className="p-4 rounded-2xl bg-secondary border border-primary/20 mb-4">
      <Icon className="text-primary" size={28} />
    </div>
    <h3 className="font-bold text-lg mb-2 text-foreground">{title}</h3>
    <p className="text-foreground/70">{description}</p>
  </div>
);

const AboutUs = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center">Pourquoi Nous Choisir ?</h2>
        
        <div className="max-w-4xl mx-auto mb-16">
          <p className="text-foreground/70 text-center mb-8">
            Bienvenue chez Tech Repair Pro, votre expert en réparation informatique de confiance. 
            Depuis plus de 10 ans, nous accompagnons particuliers et professionnels dans la résolution 
            de tous leurs problèmes informatiques.
          </p>
          
          <p className="text-foreground/70 text-center">
            Notre mission : vous offrir un service rapide, fiable et transparent. Nous utilisons 
            uniquement des pièces de qualité et garantissons toutes nos réparations. Votre satisfaction 
            est notre priorité absolue.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <FeatureCard 
            icon={Shield}
            title="Garantie 6 Mois"
            description="Toutes nos réparations sont garanties. En cas de problème, nous intervenons gratuitement."
          />
          <FeatureCard 
            icon={Award}
            title="Experts Certifiés"
            description="Notre équipe est formée et certifiée sur les dernières technologies Apple, Microsoft et Android."
          />
          <FeatureCard 
            icon={Clock}
            title="Réparation Rapide"
            description="La plupart des réparations sont effectuées en 24-48h. Service express disponible."
          />
          <FeatureCard 
            icon={Users}
            title="+ 5000 Clients"
            description="Des milliers de clients nous font confiance. Consultez nos avis 5 étoiles."
          />
        </div>
        
        <div className="bg-card p-8 rounded-xl max-w-4xl mx-auto border border-primary/30">
          <h3 className="text-xl font-bold text-primary mb-4 text-center">Notre Engagement</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold tech-gradient-text mb-2">Devis Gratuit</div>
              <p className="text-foreground/70 text-sm">Diagnostic et devis sans engagement pour toute réparation</p>
            </div>
            <div>
              <div className="text-3xl font-bold tech-gradient-text mb-2">Pas Réparé = Pas Payé</div>
              <p className="text-foreground/70 text-sm">Si nous ne pouvons pas réparer, vous ne payez rien</p>
            </div>
            <div>
              <div className="text-3xl font-bold tech-gradient-text mb-2">Prix Fixe</div>
              <p className="text-foreground/70 text-sm">Le prix annoncé est le prix final, sans mauvaise surprise</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
