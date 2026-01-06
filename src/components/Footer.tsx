
import { Facebook, Instagram, Mail, Phone, Monitor, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card text-foreground pt-12 pb-6 border-t border-primary/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Monitor className="h-6 w-6 text-primary" />
              <h3 className="text-xl font-bold">Tech Repair Pro</h3>
            </div>
            <p className="mb-2 text-foreground/70">Réparation informatique professionnelle</p>
            <p className="text-foreground/60 text-sm">SIRET: 000 000 000 00000</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Contact</h3>
            <div className="flex items-center mb-3">
              <Phone size={18} className="mr-3 text-primary" />
              <a href="tel:0600000000" className="hover:text-primary transition-colors">06 00 00 00 00</a>
            </div>
            <div className="flex items-center mb-3">
              <Mail size={18} className="mr-3 text-primary" />
              <a href="mailto:ludovic43@msn.com" className="hover:text-primary transition-colors">
                ludovic43@msn.com
              </a>
            </div>
            <div className="flex items-center mb-3">
              <MapPin size={18} className="mr-3 text-primary" />
              <span className="text-foreground/70">Votre ville</span>
            </div>
            <div className="flex mt-4 gap-4">
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors" aria-label="Facebook">
                <Facebook size={20} className="text-primary" />
              </a>
              <a href="#" className="p-2 bg-secondary rounded-lg hover:bg-primary/20 transition-colors" aria-label="Instagram">
                <Instagram size={20} className="text-primary" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-primary">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <a href="#services" className="hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#tarifs" className="hover:text-primary transition-colors">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-primary transition-colors">
                  À propos
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10 mt-8 pt-6 text-center text-sm text-foreground/60">
          &copy; {new Date().getFullYear()} Tech Repair Pro - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
