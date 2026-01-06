
import { Phone, Mail, MapPin, Cpu, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative bg-card/50 border-t border-neon-cyan/20 py-16 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-10 h-10 flex items-center justify-center">
                <div className="absolute inset-0 bg-neon-cyan/20 rotate-45" />
                <Cpu className="text-neon-cyan relative z-10" size={20} />
              </div>
              <span className="text-xl font-display font-bold tracking-wider neon-text-cyan">
                NEVEXO
              </span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm font-mono text-sm leading-relaxed">
              {">"} Expert en réparation informatique.<br />
              {">"} PC, Mac, smartphones et tablettes.<br />
              {">"} Service rapide et fiable.
            </p>
            <p className="text-muted-foreground/50 text-xs font-mono">
              SIRET: 985 159 086 00018
            </p>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider mb-6 text-sm">
              <span className="text-neon-magenta">//</span> Contact
            </h3>
            <div className="space-y-4">
              <a href="tel:0649754342" className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors group">
                <Phone size={16} className="text-neon-cyan/50 group-hover:text-neon-cyan" />
                <span className="font-mono text-sm">06 49 75 43 42</span>
              </a>
              <a href="mailto:ludovic43@msn.com" className="flex items-center gap-3 text-muted-foreground hover:text-neon-cyan transition-colors group">
                <Mail size={16} className="text-neon-cyan/50 group-hover:text-neon-cyan" />
                <span className="font-mono text-sm">ludovic43@msn.com</span>
              </a>
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin size={16} className="text-neon-cyan/50" />
                <span className="font-mono text-sm">Lun-Ven : 9h-18h</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-display font-bold uppercase tracking-wider mb-6 text-sm">
              <span className="text-neon-cyan">//</span> Navigation
            </h3>
            <ul className="space-y-3">
              {[
                { label: 'Accueil', href: '/' },
                { label: 'Services', href: '#services' },
                { label: 'À propos', href: '#about' },
                { label: 'Contact', href: '#contact' }
              ].map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('#') ? (
                    <a 
                      href={link.href} 
                      className="flex items-center gap-2 text-muted-foreground hover:text-neon-magenta transition-colors font-mono text-sm group"
                    >
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </a>
                  ) : (
                    <Link 
                      to={link.href} 
                      className="flex items-center gap-2 text-muted-foreground hover:text-neon-magenta transition-colors font-mono text-sm group"
                    >
                      <ExternalLink size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground/50 text-xs font-mono">
              © {new Date().getFullYear()} NEVEXO — Tous droits réservés
            </p>
            <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/30">
              <span className="inline-block w-2 h-2 bg-neon-green rounded-full animate-pulse" />
              SYSTEM ONLINE
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
