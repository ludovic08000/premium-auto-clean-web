
import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center">
                <span className="text-foreground font-bold text-lg">N</span>
              </div>
              <span className="text-xl font-semibold">Nevexo</span>
            </div>
            <p className="text-white/70 mb-4 max-w-sm">
              Réparation informatique de confiance. PC, Mac, smartphones et tablettes.
            </p>
            <p className="text-white/50 text-sm">SIRET : 985 159 086 00018</p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-3 text-white/70">
              <div className="flex items-center gap-3">
                <Phone size={16} />
                <a href="tel:0649754342" className="hover:text-white">06 49 75 43 42</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} />
                <a href="mailto:ludovic43@msn.com" className="hover:text-white">ludovic43@msn.com</a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin size={16} />
                <span>Lun-Ven : 9h-18h</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2 text-white/70">
              <li><Link to="/" className="hover:text-white">Accueil</Link></li>
              <li><a href="#services" className="hover:text-white">Services</a></li>
              <li><a href="#about" className="hover:text-white">À propos</a></li>
              <li><a href="#contact" className="hover:text-white">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-white/50 text-sm">
          © {new Date().getFullYear()} Nevexo - Tous droits réservés
        </div>
      </div>
    </footer>
  );
};

export default Footer;
