
import { useState, useEffect } from 'react';

type TechStackTypingEffectProps = {
  techStacks: string[];
};

const TechStackTypingEffect = ({ techStacks }: TechStackTypingEffectProps) => {
  const [techStackIndex, setTechStackIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setTechStackIndex((prev) => (prev + 1) % techStacks.length);
    }, 2000);
    
    return () => clearInterval(interval);
  }, [techStacks]);

  return (
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
  );
};

export default TechStackTypingEffect;
