
import { CheckCircle, Clock, ThumbsUp, Wrench } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="section-heading text-center">Qui suis-je ?</h2>
          <p className="text-muted-foreground mb-8 leading-relaxed text-center">
            Je suis passionné d'informatique et je lance Nevexo pour aider les gens 
            avec leurs problèmes d'ordinateurs et d'appareils Apple. Mon approche est simple : 
            je vous parle comme à un ami, pas en jargon technique.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle className="text-green-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Devis gratuit</h4>
                <p className="text-muted-foreground text-sm">Je regarde votre appareil et je vous dis ce qui ne va pas, sans frais.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Clock className="text-blue-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Réparation rapide</h4>
                <p className="text-muted-foreground text-sm">La plupart des réparations sont faites sous 48h.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <ThumbsUp className="text-purple-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Garantie 6 mois</h4>
                <p className="text-muted-foreground text-sm">Si le problème revient, je m'en occupe gratuitement.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4 p-4 bg-card rounded-xl border border-border">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                <Wrench className="text-orange-600" size={20} />
              </div>
              <div>
                <h4 className="font-semibold mb-1">Pas de blabla</h4>
                <p className="text-muted-foreground text-sm">Prix annoncé = prix payé. Pas de mauvaise surprise.</p>
              </div>
            </div>
          </div>
          
          <div className="p-6 bg-primary/5 rounded-xl border border-primary/10 text-center">
            <p className="text-muted-foreground">
              <strong className="text-foreground">Ma promesse :</strong> Si je ne peux pas réparer, vous ne payez rien.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
