
import { useRef, useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { ExternalLink, Github, Layers } from 'lucide-react';

const Projects = () => {
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
  
  const projects = [
    {
      id: 1,
      title: t('project1.title'),
      description: t('project1.description'),
      technologies: t('project1.tech'),
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 2,
      title: t('project2.title'),
      description: t('project2.description'),
      technologies: t('project2.tech'),
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
    },
    {
      id: 3,
      title: t('project3.title'),
      description: t('project3.description'),
      technologies: t('project3.tech'),
      image: '/placeholder.svg',
      demoUrl: '#',
      codeUrl: '#',
    },
  ];

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-24 relative"
    >
      {/* Angled background with overlay */}
      <div className="absolute inset-0 bg-secondary/50 dark:bg-secondary/30 -skew-y-2 transform origin-top-right h-[105%] -z-10"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className={`inline-flex items-center px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            <Layers className="w-4 h-4 mr-1.5" /> {t('projects.subtitle')}
          </div>
          
          <h2 className={`mt-4 text-3xl md:text-4xl font-bold transition-all duration-700 delay-100 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            {t('projects.title')}
          </h2>
          
          <p className={`mt-4 text-muted-foreground max-w-xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100' : 'opacity-0 translate-y-4'
          }`}>
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: `${300 + index * 100}ms` }}
            >
              <div className="tech-card h-full flex flex-col group-hover:translate-y-[-5px] transition-all duration-300">
                {/* Project Image */}
                <div className="h-48 overflow-hidden rounded-t-xl relative">
                  <div className="absolute inset-0 bg-gradient-to-b from-purple-500/20 to-purple-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-purple-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="mb-4">
                    <div className="text-xs text-muted-foreground mb-2 uppercase tracking-wider font-medium">
                      Tech Stack
                    </div>
                    <div className="text-sm">
                      {project.technologies}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <a 
                      href={project.demoUrl} 
                      className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1.5" />
                      {t('projects.liveDemo')}
                    </a>
                    
                    <a 
                      href={project.codeUrl} 
                      className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1.5" />
                      {t('projects.viewCode')}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
