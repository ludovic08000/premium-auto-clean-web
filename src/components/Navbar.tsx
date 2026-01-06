
import { useState, useEffect } from "react";
import { Menu, X, PhoneCall, Monitor } from "lucide-react";

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-background/95 backdrop-blur-md shadow-lg shadow-primary/5' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2">
            <Monitor className="h-8 w-8 text-primary" />
            <h1 className="text-xl sm:text-2xl font-bold tech-gradient-text">Nevexo</h1>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#services" className="text-foreground/80 hover:text-primary transition-colors">Services</a>
            <a href="#about" className="text-foreground/80 hover:text-primary transition-colors">À propos</a>
            <a href="#contact" className="text-foreground/80 hover:text-primary transition-colors">Contact</a>
            <a href="tel:0649754342" className="flex items-center gap-2 btn-primary">
              <PhoneCall className="h-4 w-4" />
              <span>06 49 75 43 42</span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden text-primary" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-primary/20 animate-fade-in">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="#services" className="text-foreground py-2 px-4 hover:bg-secondary rounded-md" onClick={toggleMobileMenu}>Services</a>
              <a href="#about" className="text-foreground py-2 px-4 hover:bg-secondary rounded-md" onClick={toggleMobileMenu}>À propos</a>
              <a href="#contact" className="text-foreground py-2 px-4 hover:bg-secondary rounded-md" onClick={toggleMobileMenu}>Contact</a>
              <a href="tel:0649754342" className="flex items-center gap-2 py-2 px-4 btn-primary">
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
