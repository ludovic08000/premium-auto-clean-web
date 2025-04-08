
import { Facebook, Instagram, Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-dark text-gold pt-12 pb-6 border-t border-gold/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Premium Auto Clean</h3>
            <p className="mb-2">Nettoyage automobile professionnel</p>
            <p>SIRET: 123 456 789 00012</p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <div className="flex items-center mb-2">
              <Phone size={18} className="mr-2" />
              <a href="tel:0606060606" className="hover:text-gold/80">06 06 06 06 06</a>
            </div>
            <div className="flex items-center mb-2">
              <Mail size={18} className="mr-2" />
              <a href="mailto:contact@premiumautoclean.com" className="hover:text-gold/80">
                contact@premiumautoclean.com
              </a>
            </div>
            <div className="flex mt-4">
              <a href="https://facebook.com" className="mr-4 hover:text-gold/80" aria-label="Facebook">
                <Facebook size={24} />
              </a>
              <a href="https://instagram.com" className="hover:text-gold/80" aria-label="Instagram">
                <Instagram size={24} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Informations</h3>
            <ul>
              <li className="mb-2">
                <Link to="/" className="hover:text-gold/80">
                  Accueil
                </Link>
              </li>
              <li className="mb-2">
                <a href="#services" className="hover:text-gold/80">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#tarifs" className="hover:text-gold/80">
                  Tarifs
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-gold/80">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gold/10 mt-8 pt-6 text-center text-sm">
          &copy; 2024 Premium Auto Clean - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
