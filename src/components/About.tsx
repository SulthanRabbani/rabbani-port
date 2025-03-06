
import { useLanguage } from '@/context/LanguageContext';
import { useInView, getAnimationClass } from '@/lib/animations';
import { Code, Server, Database, Globe } from 'lucide-react';

const About = () => {
  const { t } = useLanguage();
  const { ref: aboutRef, isInView: aboutInView } = useInView({ threshold: 0.1 });
  
  const skills = [
    { name: 'Frontend', icon: <Code className="w-6 h-6" />, items: ['React', 'Vue.js', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { name: 'Backend', icon: <Server className="w-6 h-6" />, items: ['Node.js', 'Express', 'Django', 'Laravel', 'Spring Boot'] },
    { name: 'Database', icon: <Database className="w-6 h-6" />, items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Firebase'] },
    { name: 'Other', icon: <Globe className="w-6 h-6" />, items: ['Docker', 'AWS', 'Git', 'GraphQL', 'RESTful APIs'] },
  ];

  const stats = [
    { value: '5+', label: t('about.experience') },
    { value: '40+', label: t('about.completed') },
  ];

  return (
    <section id="about" className="py-20 section-padding">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center" ref={aboutRef as React.RefObject<HTMLDivElement>}>
          <div className={`inline-block mb-3 px-4 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-medium ${
            getAnimationClass(aboutInView, 'fade-in')
          }`}>
            {t('about.subtitle')}
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${
            getAnimationClass(aboutInView, 'fade-up')
          }`}>
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div 
            className={`space-y-6 ${getAnimationClass(aboutInView, 'slide-in-left')}`}
          >
            <p className="text-lg text-muted-foreground">
              {t('about.description')}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div key={index} className="p-6 rounded-xl bg-secondary/50 backdrop-blur-sm">
                  <div className="text-3xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className={getAnimationClass(aboutInView, 'slide-in-right')}>
            <h3 className="text-xl font-semibold mb-6">
              {t('about.skills')}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup, index) => (
                <div key={index} className="p-6 rounded-xl bg-secondary/50 backdrop-blur-sm border border-border">
                  <div className="flex items-center gap-3 mb-4 text-purple-600 dark:text-purple-400">
                    {skillGroup.icon}
                    <h4 className="font-medium">{skillGroup.name}</h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, idx) => (
                      <span 
                        key={idx} 
                        className="px-3 py-1 text-xs font-medium rounded-full bg-purple-100 dark:bg-purple-900/40 text-purple-700 dark:text-purple-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
