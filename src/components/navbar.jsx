import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Scale, Menu, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: 'O mnie', path: '#about' },
    { name: 'Zakres Usług', path: '#services' },
    { name: 'Cennik', path: '#pricing' },
    { name: 'Do Pobrania', path: '#downloads' },
    { name: 'Kontakt', path: '#contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-navy-900/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="p-2 bg-gradient-to-br from-gold-400 to-gold-600 rounded-lg group-hover:shadow-[0_0_15px_rgba(212,175,55,0.5)] transition-all duration-300">
              <Scale className="h-6 w-6 text-navy-900" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-serif font-bold text-slate-100 tracking-wide">Krystian Kitliński</span>
              <span className="text-xs text-gold-400 uppercase tracking-widest">Radca Prawny</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.path}
                className="text-sm font-medium text-slate-300 hover:text-gold-400 transition-colors duration-300 uppercase tracking-wide"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="flex items-center gap-2 px-5 py-2.5 bg-gold-500 hover:bg-gold-400 text-navy-900 font-bold text-sm uppercase tracking-wide rounded transition-all transform hover:-translate-y-0.5"
            >
              <Phone size={16} />
              Darmowa Konsultacja
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-2 text-slate-300 hover:text-white transition-colors"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-20 left-0 w-full bg-navy-900 border-b border-white/10"
          >
            <div className="px-4 pt-2 pb-6 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-3 text-base font-medium text-slate-300 hover:text-gold-400 hover:bg-white/5 rounded-md transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="block mt-4 text-center px-3 py-3 bg-gold-500 text-navy-900 font-bold rounded-md"
              >
                Darmowa Konsultacja
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
