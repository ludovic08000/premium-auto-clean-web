
import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-sm' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-lg">N</span>
            </div>
            <span className="text-xl font-semibold text-foreground">Nevexo</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#services" className="text-foreground/70 hover:text-foreground transition-colors font-medium">Services</a>
            <a href="#about" className="text-foreground/70 hover:text-foreground transition-colors font-medium">À propos</a>
            <a href="#contact" className="text-foreground/70 hover:text-foreground transition-colors font-medium">Contact</a>
            <a href="tel:0649754342" className="btn-primary inline-flex items-center gap-2">
              <Phone size={16} />
              06 49 75 43 42
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-foreground" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-border">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground py-2 font-medium" onClick={toggleMobileMenu}>Services</a>
              <a href="#about" className="text-foreground py-2 font-medium" onClick={toggleMobileMenu}>À propos</a>
              <a href="#contact" className="text-foreground py-2 font-medium" onClick={toggleMobileMenu}>Contact</a>
              <a href="tel:0649754342" className="btn-primary inline-flex items-center justify-center gap-2">
                <Phone size={16} />
                06 49 75 43 42
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
