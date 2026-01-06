
import { CheckCircle, Clock, Wrench } from "lucide-react";

const AboutUs = () => {
  return (
    <section id="about" className="py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-10">
          <h2 className="text-2xl font-semibold mb-4">Comment ça marche</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-primary" size={24} />
            </div>
            <h4 className="font-medium mb-2">Diagnostic gratuit</h4>
            <p className="text-muted-foreground text-sm">Je regarde ce qui ne va pas, sans frais.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Wrench className="text-primary" size={24} />
            </div>
            <h4 className="font-medium mb-2">Devis avant réparation</h4>
            <p className="text-muted-foreground text-sm">Vous savez le prix avant que je commence.</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="text-primary" size={24} />
            </div>
            <h4 className="font-medium mb-2">Réparation rapide</h4>
            <p className="text-muted-foreground text-sm">Dès que j'ai les pièces, c'est fait.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
