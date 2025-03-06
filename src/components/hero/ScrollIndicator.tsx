
import { ChevronDown } from 'lucide-react';

type ScrollIndicatorProps = {
  text: string;
};

const ScrollIndicator = ({ text }: ScrollIndicatorProps) => {
  return (
    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <a 
        href="#about" 
        className="flex flex-col items-center text-sm text-muted-foreground hover:text-purple-500 transition-colors"
      >
        <span className="mb-2">{text}</span>
        <ChevronDown className="w-6 h-6" />
      </a>
    </div>
  );
};

export default ScrollIndicator;
