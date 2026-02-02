import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Harga', path: '/pricing' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 border-b border-transparent",
        scrolled ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg border-forest/5 shadow-glass" : "bg-transparent"
      )}
    >
      <div className="flex justify-center w-full">
        <header className="flex w-full max-w-[1400px] items-center justify-between px-6 py-4 lg:px-12">
          <div className="flex items-center gap-3">
            {/* Mobile Burger Button */}
            <button 
              className="flex md:hidden items-center justify-center p-2 rounded-full text-forest hover:bg-forest/5 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-2xl">
                {isMobileMenuOpen ? 'close' : 'menu'}
              </span>
            </button>

            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-full font-bold">
                 <img src="/logo.png" alt="Nitip Dong Logo" className="h-10 w-10 object-cover transition-transform group-hover:scale-110" />
              </div>
              <h2 className="text-xl font-bold font-display tracking-tight text-forest">
                Nitip <span className="text-primary">Dong</span>
              </h2>
            </Link>
          </div>

          <div className="flex items-center gap-8">
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary relative group",
                    location.pathname === link.path ? "text-primary font-bold" : "text-forest/70"
                  )} 
                  to={link.path}
                >
                  {link.name}
                  <span className={cn(
                    "absolute -bottom-1 left-0 w-full h-0.5 bg-primary origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100",
                    location.pathname === link.path ? "scale-x-100" : ""
                  )} />
                </Link>
              ))}
            </div>
            
            <div className="flex gap-3">
              <Link to="/location" className="hidden sm:flex h-10 items-center justify-center rounded-xl bg-primary px-6 text-sm font-bold text-forest shadow-soft transition-all hover:shadow-glow hover:-translate-y-0.5 active:scale-95">
                <span className="truncate">Lokasi Kami</span>
              </Link>
            </div>
          </div>
        </header>

        {/* Mobile Menu Dropdown */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden absolute top-[72px] left-0 right-0 bg-white dark:bg-slate-900 border-b border-gray-100 dark:border-gray-800 shadow-xl overflow-hidden"
            >
              <div className="flex flex-col p-4 gap-2">
                {navLinks.map((link) => (
                   <Link 
                    key={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 p-4 rounded-xl transition-colors font-medium",
                      location.pathname === link.path ? "bg-primary/10 text-primary" : "text-text-secondary hover:bg-gray-50 dark:hover:bg-white/5"
                    )}
                    to={link.path}
                  >
                   {link.name}
                  </Link>
                ))}
                 <Link 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center justify-center gap-3 p-4 rounded-xl bg-primary text-white font-bold mt-2" 
                    to="/location"
                  >
                   Lokasi Kami
                  </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
