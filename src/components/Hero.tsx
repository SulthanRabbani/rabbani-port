
import { useTypewriter, useInView, getAnimationClass } from '@/lib/animations';
import { useLanguage } from '@/context/LanguageContext';
import { ArrowDownCircle } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const { ref: heroRef, isInView: heroInView } = useInView({ threshold: 0.1 });
  
  // Typewriter effect for title
  const typedText = useTypewriter(t('hero.role'), 100, 500);
  
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center py-20 overflow-hidden section-padding"
      ref={heroRef as React.RefObject<HTMLDivElement>}
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-dot-pattern bg-[length:24px_24px] opacity-30"></div>
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/20 rounded-full filter blur-3xl"></div>
      
      {/* Animated circle */}
      <div className="absolute w-80 h-80 border border-purple-500/20 rounded-full animate-pulse-glow"></div>
      <div className="absolute w-96 h-96 border border-purple-500/10 rounded-full animate-rotate-center"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Greeting */}
          <div className={`inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium ${
            getAnimationClass(heroInView, 'fade-in')
          }`}>
            {t('hero.greeting')}
          </div>
          
          {/* Name */}
          <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 ${
            getAnimationClass(heroInView, 'fade-up')
          }`}>
            Sulthan Taqi Rabbani
          </h1>
          
          {/* Role with typewriter effect */}
          <div className="h-12 mb-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium text-purple-600 dark:text-purple-400">
              {typedText}<span className="animate-pulse">|</span>
            </h2>
          </div>
          
          {/* Description */}
          <p className={`text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 ${
            getAnimationClass(heroInView, 'fade-up')
          }`}>
            {t('hero.description')}
          </p>
          
          {/* CTA Button */}
          <div className={getAnimationClass(heroInView, 'fade-up')}>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-700 to-purple-500 hover:from-purple-600 hover:to-purple-400 text-white rounded-lg shadow-lg hover:shadow-purple-500/20 transition-all duration-300"
            >
              {t('hero.cta')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to About section">
          <ArrowDownCircle className="w-10 h-10 text-purple-500 hover:text-purple-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
