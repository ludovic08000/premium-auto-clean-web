
import { CheckCircle, Clock, ThumbsUp, Users } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-heading">Pourquoi nous faire confiance ?</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Chez Nevexo, on croit qu'un bon service passe par l'écoute et la transparence. 
              Pas de termes compliqués, pas de frais cachés. On vous explique le problème 
              simplement et on vous dit combien ça coûte avant de commencer.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="text-green-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Devis gratuit et sans engagement</h4>
                  <p className="text-muted-foreground text-sm">On regarde votre appareil et on vous dit ce qui ne va pas, gratuitement.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="text-blue-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Réparation rapide</h4>
                  <p className="text-muted-foreground text-sm">La plupart des réparations sont faites en 24 à 48h.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <ThumbsUp className="text-purple-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Garantie 6 mois</h4>
                  <p className="text-muted-foreground text-sm">Si le problème revient, on s'en occupe gratuitement.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-2xl p-8 shadow-sm border border-border">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-secondary/50 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">10+</div>
                <div className="text-sm text-muted-foreground">années d'expérience</div>
              </div>
              <div className="text-center p-6 bg-secondary/50 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">5000+</div>
                <div className="text-sm text-muted-foreground">clients satisfaits</div>
              </div>
              <div className="text-center p-6 bg-secondary/50 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">48h</div>
                <div className="text-sm text-muted-foreground">délai moyen</div>
              </div>
              <div className="text-center p-6 bg-secondary/50 rounded-xl">
                <div className="text-4xl font-bold text-primary mb-2">4.9★</div>
                <div className="text-sm text-muted-foreground">avis clients</div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10">
              <p className="text-sm text-center text-muted-foreground">
                <strong className="text-foreground">Notre promesse :</strong> Si on ne peut pas réparer, vous ne payez rien.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
