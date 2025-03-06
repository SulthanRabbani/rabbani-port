
import { useLanguage } from '@/context/LanguageContext';
import { Heart } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-10 border-t border-border relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-purple-600">
              Sulthan
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <a 
              href="#home" 
              className="text-foreground hover:text-purple-500 transition-colors"
            >
              {t('nav.home')}
            </a>
            <a 
              href="#about" 
              className="text-foreground hover:text-purple-500 transition-colors"
            >
              {t('nav.about')}
            </a>
            <a 
              href="#projects" 
              className="text-foreground hover:text-purple-500 transition-colors"
            >
              {t('nav.projects')}
            </a>
            <a 
              href="#contact" 
              className="text-foreground hover:text-purple-500 transition-colors"
            >
              {t('nav.contact')}
            </a>
          </div>

          <div className="pt-6 border-t border-border text-center text-muted-foreground text-sm w-full max-w-lg mx-auto">
            <div className="flex items-center justify-center gap-1 mb-2">
              <span>{t('footer.madeWith')}</span>
              <Heart className="w-4 h-4 text-red-500 fill-red-500" />
              <span>by Sulthan Taqi Rabbani</span>
            </div>
            <div>
              &copy; {currentYear} • {t('footer.rights')}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
