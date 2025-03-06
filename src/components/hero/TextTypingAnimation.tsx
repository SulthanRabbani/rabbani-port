
import { useState, useEffect, useRef } from 'react';

type TextTypingAnimationProps = {
  fullText: string;
};

const TextTypingAnimation = ({ fullText }: TextTypingAnimationProps) => {
  const [typedText, setTypedText] = useState('');
  const typingSpeed = 30;
  const typingDelayRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Reset typing when text changes
    setTypedText('');
    
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
      }
      // No else block to reset animation - it now stops after completion
    };
    
    // Start typing after a short delay
    typingDelayRef.current = setTimeout(typeNextChar, 500);
    
    return () => {
      if (typingDelayRef.current) {
        clearTimeout(typingDelayRef.current);
      }
    };
  }, [fullText]);

  return <p className="text-lg md:text-xl text-muted-foreground max-w-md min-h-[60px]">{typedText}</p>;
};

export default TextTypingAnimation;
