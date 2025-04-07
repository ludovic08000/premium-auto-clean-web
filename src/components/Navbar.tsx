
import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, CarFront } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <CarFront className="h-8 w-8 text-gold" />
            <h1 className="text-xl sm:text-2xl font-serif font-bold gold-gradient-text">Premium Auto Clean</h1>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-gold/80 hover:text-gold transition-colors">Services</a>
            <a href="#tarifs" className="text-gold/80 hover:text-gold transition-colors">Tarifs</a>
            <a href="#abonnements" className="text-gold/80 hover:text-gold transition-colors">Abonnements</a>
            <a href="#contact" className="text-gold/80 hover:text-gold transition-colors">Contact</a>
            <a href="tel:0649754342" className="flex items-center gap-2 btn-gold">
              <PhoneCall className="h-4 w-4" />
              <span>06 49 75 43 42</span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-gold" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-dark-light border-t border-gold/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-gold py-2 px-4 hover:bg-dark-lighter rounded-md" onClick={toggleMobileMenu}>Services</a>
              <a href="#tarifs" className="text-gold py-2 px-4 hover:bg-dark-lighter rounded-md" onClick={toggleMobileMenu}>Tarifs</a>
              <a href="#abonnements" className="text-gold py-2 px-4 hover:bg-dark-lighter rounded-md" onClick={toggleMobileMenu}>Abonnements</a>
              <a href="#contact" className="text-gold py-2 px-4 hover:bg-dark-lighter rounded-md" onClick={toggleMobileMenu}>Contact</a>
              <a href="tel:0649754342" className="flex items-center gap-2 py-2 px-4 btn-gold">
                <PhoneCall className="h-4 w-4" />
                <span>06 49 75 43 42</span>
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
