
import { ChevronDown } from 'lucide-react';

const ScrollIndicator = () => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a 
        href="#about" 
        className="flex flex-col items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors"
      >
        <ChevronDown className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ScrollIndicator;
