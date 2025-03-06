import { useState, useEffect, useRef } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ChevronDown, Code, ExternalLink } from 'lucide-react';

const Hero = () => {
  const { t } = useLanguage();
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Simulating staggered loading
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Tech stack typing effect
  const [techStackIndex, setTechStackIndex] = useState(0);
  const techStacks = ['React', 'TypeScript', 'Node.js', 'Next.js', 'MongoDB'];
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTechStackIndex((prev) => (prev + 1) % techStacks.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Simplified text reveal animation
  const [typedText, setTypedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const fullText = t('hero.description');
  const typingSpeed = 30;
  const typingDelayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset typing when language changes
    setTypedText('');
    setIsTyping(true);
    
    if (typingDelayRef.current) {
      clearTimeout(typingDelayRef.current);
    }
    
    let charIndex = 0;
    
    const typeNextChar = () => {
      if (charIndex < fullText.length) {
        setTypedText(fullText.substring(0, charIndex + 1));
        charIndex++;
        
        // Vary the typing speed for natural effect
        const variance = Math.random() * 15;
        const currentSpeed = typingSpeed + variance;
        
        typingDelayRef.current = setTimeout(typeNextChar, currentSpeed);
      } else {
        setIsTyping(false);
        
        // Reset animation after a pause
        setTimeout(() => {
          setTypedText('');
          setIsTyping(true);
          setTimeout(typeNextChar, 1500);
        }, 4000);
      }
    };
    
    // Start typing after a short delay
    typingDelayRef.current = setTimeout(typeNextChar, 500);
    
    return () => {
      if (typingDelayRef.current) {
        clearTimeout(typingDelayRef.current);
      }
    };
  }, [fullText]);
  
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
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-md min-h-[60px]">
              {typedText}
            </p>
            
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
              <div className="h-6 overflow-hidden relative">
                {techStacks.map((tech, index) => (
                  <span 
                    key={tech}
                    className={`absolute left-0 transition-all duration-500 ${
                      index === techStackIndex ? 'opacity-100 transform-none' : 'opacity-0 -translate-y-6'
                    }`}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
          
          <div 
            className={`relative transform transition-all duration-1000 delay-300 ${
              isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Futuristic geometric shapes for visual interest */}
            <div className="absolute -z-10 inset-0">
              <div className="absolute top-10 right-10 w-20 h-20 border-4 border-purple-500/30 rounded-xl animate-spin-slow"></div>
              <div className="absolute bottom-10 left-20 w-16 h-16 border-4 border-purple-500/20 rounded-full animate-float"></div>
              <div className="absolute top-1/2 left-1/4 w-32 h-1 bg-gradient-to-r from-purple-500 to-transparent"></div>
              <div className="absolute top-1/4 right-1/3 w-1 h-32 bg-gradient-to-b from-purple-500 to-transparent"></div>
            </div>
            
            <div className="tech-card p-6 md:p-8 neon-border">
              <pre className="text-xs md:text-sm font-mono text-muted-foreground overflow-x-auto">
                <code>
                  <span className="text-purple-500">const</span> <span className="text-yellow-500">developer</span> = {`{`}<br/>
                  &nbsp;&nbsp;name: <span className="text-green-500">'Sulthan Taqi Rabbani'</span>,<br/>
                  &nbsp;&nbsp;title: <span className="text-green-500">'Full Stack Developer'</span>,<br/>
                  &nbsp;&nbsp;skills: [<span className="text-green-500">'React'</span>, <span className="text-green-500">'Node.js'</span>, <span className="text-green-500">'TypeScript'</span>, ...],<br/>
                  &nbsp;&nbsp;passion: <span className="text-green-500">'Building elegant solutions'</span>,<br/>
                  <br/>
                  &nbsp;&nbsp;<span className="text-purple-500">function</span> <span className="text-blue-500">createAmazingApps</span>() {`{`}<br/>
                  &nbsp;&nbsp;&nbsp;&nbsp;<span className="text-purple-500">return</span> <span className="text-green-500">'Innovative digital experiences'</span>;<br/>
                  &nbsp;&nbsp;{`}`}<br/>
                  {`}`};<br/>
                </code>
              </pre>
              
              <div className="mt-6 pt-6 border-t border-border flex justify-between items-center">
                <div className="flex space-x-2">
                  <span className="w-3 h-3 bg-red-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full"></span>
                </div>
                <div className="text-xs text-muted-foreground">sulthan.dev</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a 
          href="#about" 
          className="flex flex-col items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors"
        >
          <span className="mb-2">{t('hero.scrollDown')}</span>
          <ChevronDown className="w-6 h-6" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
