
import { useEffect, useState, useRef } from 'react';

// Hook to check if an element is in the viewport
export function useInView(options = {}) {
  const ref = useRef<HTMLElement | null>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInView(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return { ref, isInView };
}

// Get animation classes based on visibility
export function getAnimationClass(isInView: boolean, animationType: string) {
  if (!isInView) return 'opacity-0';
  
  switch (animationType) {
    case 'fade-up':
      return 'animate-fade-up';
    case 'fade-in':
      return 'animate-fade-in';
    case 'slide-in-right':
      return 'animate-slide-in-right';
    case 'slide-in-left':
      return 'animate-slide-in-left';
    default:
      return 'animate-fade-in';
  }
}

// Custom hook for typing effect
export function useTypewriter(text: string, speed = 100, delay = 0) {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (delay > 0 && !started) {
      const delayTimer = setTimeout(() => {
        setStarted(true);
      }, delay);
      return () => clearTimeout(delayTimer);
    }

    if (!started && delay > 0) return;

    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, speed, text, delay, started]);

  return displayText;
}
