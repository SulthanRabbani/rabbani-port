
import { useState, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { Code, ExternalLink } from 'lucide-react';
import TechStackTypingEffect from './hero/TechStackTypingEffect';
import TextTypingAnimation from './hero/TextTypingAnimation';
import HeroShapes from './hero/HeroShapes';
import CodeCard from './hero/CodeCard';
import ScrollIndicator from './hero/ScrollIndicator';

const Hero = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulating staggered loading
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const techStacks = ['React', 'TypeScript', 'Node.js', 'Next.js', 'MongoDB'];
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-20 pb-20"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div 
            className={`space-y-6 transform transition-all duration-1000 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium">
              <Code className="w-4 h-4 mr-1.5" /> {t('hero.greeting')}
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter">
              <span className="block">Sulthan Taqi Rabbani</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
                {t('hero.role')}
              </span>
            </h1>
            
            <TextTypingAnimation fullText={t('hero.description')} />
            
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-300 font-medium"
              >
                {t('hero.cta')}
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="#contact" 
                className="inline-flex items-center gap-2 px-6 py-3 bg-transparent hover:bg-purple-100 dark:hover:bg-purple-900/30 text-foreground border border-border rounded-lg transition-colors duration-300 font-medium"
              >
                {t('hero.contact')}
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-muted-foreground pt-4">
              <span className="font-medium">{t('hero.techStack')}:</span>
              <TechStackTypingEffect techStacks={techStacks} />
            </div>
          </div>
          
          <div 
            className={`relative transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <HeroShapes />
            <CodeCard />
          </div>
        </div>
      </div>
      
      <ScrollIndicator text={t('hero.scrollDown')} />
    </section>
  );
};

export default Hero;
