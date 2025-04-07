
import { CarFront } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-black pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div className="flex items-center gap-2 mb-6 md:mb-0">
            <CarFront className="h-8 w-8 text-gold" />
            <h2 className="text-2xl font-serif font-bold gold-gradient-text">Premium Auto Clean</h2>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <a href="#services" className="text-gold/70 hover:text-gold transition-colors">Services</a>
            <a href="#tarifs" className="text-gold/70 hover:text-gold transition-colors">Tarifs</a>
            <a href="#abonnements" className="text-gold/70 hover:text-gold transition-colors">Abonnements</a>
            <a href="#contact" className="text-gold/70 hover:text-gold transition-colors">Contact</a>
          </nav>
        </div>
        
        <div className="border-t border-gold/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="text-gold/60 text-sm text-center md:text-left">
              <p>© {currentYear} Premium Auto Clean. Tous droits réservés.</p>
              <p>SIRET: 98515908600018</p>
            </div>
            <div className="text-gold/60 text-sm text-center md:text-right">
              <p>19 chemin du haut du thuex, 08000 Charleville-Mézières</p>
              <p>
                <a href="tel:0649754342" className="hover:text-gold transition-colors">06 49 75 43 42</a> | 
                <a href="mailto:contact@premiumautoclean.com" className="hover:text-gold transition-colors"> contact@premiumautoclean.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
