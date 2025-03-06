
import { useState, useEffect } from 'react';
import { useTheme } from '@/context/ThemeContext';
import { useLanguage } from '@/context/LanguageContext';
import { Moon, Sun, Globe } from 'lucide-react';

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navLinks = [
    { key: 'nav.home', href: '#home' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.projects', href: '#projects' },
    { key: 'nav.contact', href: '#contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-4 neo-blur glass-dark' 
          : 'py-6 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">
            Sulthan
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <div className="flex gap-6">
              {navLinks.map(link => (
                <a 
                  key={link.key} 
                  href={link.href}
                  className="text-foreground hover:text-purple-500 transition-colors duration-300"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>

            <div className="flex items-center gap-3">
              {/* Language Toggle */}
              <button 
                onClick={() => setLanguage(language === 'en' ? 'id' : 'en')}
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Toggle Language"
              >
                <Globe className="w-5 h-5 text-foreground" />
              </button>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
                aria-label="Toggle Theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-yellow-300" />
                ) : (
                  <Moon className="w-5 h-5 text-slate-800" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-opacity duration-300 ${menuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-6 h-0.5 bg-foreground transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          menuOpen ? 'max-h-60 mt-4' : 'max-h-0 mt-0'
        }`}>
          <div className="flex flex-col gap-4 py-4">
            {navLinks.map(link => (
              <a 
                key={link.key} 
                href={link.href}
                className="text-foreground hover:text-purple-500 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {t(link.key)}
              </a>
            ))}
            
            <div className="flex items-center gap-4 pt-2">
              <button 
                onClick={() => {
                  setLanguage(language === 'en' ? 'id' : 'en');
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                <Globe className="w-4 h-4" />
                {language === 'en' ? 'EN' : 'ID'}
              </button>
              
              <button 
                onClick={() => {
                  toggleTheme();
                  setMenuOpen(false);
                }}
                className="flex items-center gap-2 text-sm text-foreground"
              >
                {theme === 'dark' ? (
                  <><Sun className="w-4 h-4 text-yellow-300" /> Light</>
                ) : (
                  <><Moon className="w-4 h-4" /> Dark</>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
