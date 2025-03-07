
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { 
  Code, 
  Database, 
  Layout, 
  Server, 
  Star, 
  User,
  Globe,
  Cpu,
  Cloud,
  BarChart,
  Layers,
  Pencil,
  Terminal,
  FileCode,
  PackageCheck,
  Smartphone
} from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);
  
  const skills = [
    { 
      name: 'Frontend', 
      icon: <Layout className="w-5 h-5" />, 
      items: [
        { name: 'React', icon: <Code className="w-4 h-4" /> },
        { name: 'Vue.js', icon: <Layers className="w-4 h-4" /> },
        { name: 'Next.js', icon: <Globe className="w-4 h-4" /> },
        { name: 'TypeScript', icon: <FileCode className="w-4 h-4" /> },
        { name: 'Tailwind CSS', icon: <Pencil className="w-4 h-4" /> }
      ] 
    },
    { 
      name: 'Backend', 
      icon: <Server className="w-5 h-5" />, 
      items: [
        { name: 'Node.js', icon: <Terminal className="w-4 h-4" /> },
        { name: 'Express', icon: <PackageCheck className="w-4 h-4" /> },
        { name: 'Django', icon: <Globe className="w-4 h-4" /> },
        { name: 'Laravel', icon: <Code className="w-4 h-4" /> },
        { name: 'Spring Boot', icon: <Layers className="w-4 h-4" /> }
      ] 
    },
    { 
      name: 'Database', 
      icon: <Database className="w-5 h-5" />, 
      items: [
        { name: 'MongoDB', icon: <Database className="w-4 h-4" /> },
        { name: 'PostgreSQL', icon: <Database className="w-4 h-4" /> },
        { name: 'MySQL', icon: <Database className="w-4 h-4" /> },
        { name: 'Redis', icon: <Database className="w-4 h-4" /> },
        { name: 'Firebase', icon: <Cloud className="w-4 h-4" /> }
      ] 
    },
    { 
      name: 'Other', 
      icon: <Code className="w-5 h-5" />, 
      items: [
        { name: 'Docker', icon: <PackageCheck className="w-4 h-4" /> },
        { name: 'AWS', icon: <Cloud className="w-4 h-4" /> },
        { name: 'Git', icon: <Code className="w-4 h-4" /> },
        { name: 'GraphQL', icon: <Cpu className="w-4 h-4" /> },
        { name: 'RESTful APIs', icon: <Globe className="w-4 h-4" /> }
      ] 
    },
  ];

  const stats = [
    { value: '5+', label: t('about.experience') },
    { value: '40+', label: t('about.completed') },
    { value: '15+', label: t('about.clients') },
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-24"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            <User className="w-4 h-4 mr-1.5" /> {t('about.subtitle')}
          </div>
          
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* About me text */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            <div className="tech-card p-6 h-full">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-500" />
                <span>{t('about.whoAmI')}</span>
              </h3>
              
              <p className="text-muted-foreground mb-6">
                {t('about.description')}
              </p>
              
              <div className="grid grid-cols-3 gap-4 mt-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 rounded-lg bg-purple-50 dark:bg-purple-900/10">
                    <div className="text-2xl font-bold text-purple-600 dark:text-purple-400 mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Skills */}
          <div className={`lg:col-span-3 transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            <div className="tech-card p-6">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Code className="w-5 h-5 text-purple-500" />
                <span>{t('about.skills')}</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="p-4 rounded-lg border border-border bg-background/50"
                  >
                    <div className="flex items-center gap-2 mb-3 text-purple-600 dark:text-purple-400">
                      {skill.icon}
                      <h4 className="font-medium">{skill.name}</h4>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {skill.items.map((item, idx) => (
                        <div 
                          key={idx} 
                          className="px-3 py-2 flex flex-col items-center justify-center rounded-lg bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300"
                          title={item.name}
                        >
                          <div className="p-2">
                            {item.icon}
                          </div>
                          <span className="text-xs mt-1">{item.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
