
import { useState, useEffect } from "react";
import { Menu, X, Phone, Cpu } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-background/90 backdrop-blur-md border-b border-neon-cyan/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 flex items-center justify-center">
              <div className="absolute inset-0 bg-neon-cyan/20 rotate-45 transition-transform group-hover:rotate-90 duration-500" />
              <Cpu className="text-neon-cyan relative z-10" size={20} />
            </div>
            <span className="text-xl font-display font-bold tracking-wider neon-text-cyan">
              NEVEXO
            </span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {['Services', 'À propos', 'Contact'].map((item, index) => (
              <a 
                key={item}
                href={`#${item === 'À propos' ? 'about' : item.toLowerCase()}`} 
                className="relative text-foreground/70 hover:text-neon-cyan transition-colors font-medium uppercase text-sm tracking-wider group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-cyan transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <a 
              href="tel:0649754342" 
              className="btn-primary inline-flex items-center gap-2 !py-2 !px-4 text-sm"
            >
              <Phone size={14} />
              <span className="relative z-10">06 49 75 43 42</span>
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-neon-cyan p-2 border border-neon-cyan/30 hover:bg-neon-cyan/10 transition-colors"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-md border-t border-neon-cyan/20"
          >
            <div className="container mx-auto px-4 py-6">
              <nav className="flex flex-col space-y-4">
                {['Services', 'À propos', 'Contact'].map((item) => (
                  <a 
                    key={item}
                    href={`#${item === 'À propos' ? 'about' : item.toLowerCase()}`} 
                    className="text-foreground py-3 font-medium uppercase tracking-wider border-b border-border/50 hover:text-neon-cyan hover:border-neon-cyan/50 transition-colors"
                    onClick={toggleMobileMenu}
                  >
                    {item}
                  </a>
                ))}
                <a 
                  href="tel:0649754342" 
                  className="btn-primary inline-flex items-center justify-center gap-2 mt-4"
                >
                  <Phone size={16} />
                  <span className="relative z-10">06 49 75 43 42</span>
                </a>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
