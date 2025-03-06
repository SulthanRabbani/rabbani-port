
import { useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { useInView, getAnimationClass } from '@/lib/animations';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

const Projects = () => {
  const { t } = useLanguage();
  const { ref: projectsRef, isInView: projectsInView } = useInView({ threshold: 0.1 });
  const [activeProject, setActiveProject] = useState<number | null>(null);
  
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
    <section id="projects" className="py-20 section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center" ref={projectsRef as React.RefObject<HTMLDivElement>}>
          <div className={`inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium ${
            getAnimationClass(projectsInView, 'fade-in')
          }`}>
            {t('projects.subtitle')}
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            getAnimationClass(projectsInView, 'fade-up')
          }`}>
            {t('projects.title')}
          </h2>
          
          <p className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
            getAnimationClass(projectsInView, 'fade-up')
          }`}>
            {t('projects.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative overflow-hidden rounded-xl transition-all duration-300 ${
                getAnimationClass(projectsInView, 'fade-up')
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
              onMouseEnter={() => setActiveProject(project.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <div className="relative h-full neo-blur bg-white/5 dark:bg-black/10 border border-border group-hover:border-purple-500/50 transition-all duration-300 rounded-xl overflow-hidden">
                {/* Project Image */}
                <div className="h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                
                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  
                  <div className="mb-6">
                    <div className="text-xs text-muted-foreground mb-2">
                      Tech Stack
                    </div>
                    <div className="text-sm">
                      {project.technologies}
                    </div>
                  </div>
                  
                  {/* Project Links */}
                  <div className="flex items-center justify-between">
                    <a 
                      href={project.demoUrl} 
                      className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-1" />
                      {t('projects.liveDemo')}
                    </a>
                    
                    <a 
                      href={project.codeUrl} 
                      className="inline-flex items-center text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="w-4 h-4 mr-1" />
                      {t('projects.viewCode')}
                    </a>
                  </div>
                  
                  {/* Animated hover effects */}
                  <div 
                    className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center transform transition-all duration-300 ${
                      activeProject === project.id 
                        ? 'opacity-100 scale-100' 
                        : 'opacity-0 scale-50'
                    }`}
                  >
                    <ArrowRight className="w-4 h-4" />
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
