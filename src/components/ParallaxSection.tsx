import React, { useEffect, useState } from 'react';

interface ParallaxSectionProps {
  backgroundImage: string;
  children: React.ReactNode;
  className?: string;
}

export const ParallaxSection: React.FC<ParallaxSectionProps> = ({ 
  backgroundImage, 
  children, 
  className = '' 
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleScroll = () => {
      if (!mediaQuery.matches) {
        requestAnimationFrame(() => {
          setScrollPosition(window.pageYOffset);
        });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const parallaxStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundPositionY: prefersReducedMotion ? '50%' : `${50 + (scrollPosition * 0.2)}%`,
    transition: 'background-position-y 0.1s cubic-bezier(0.4, 0, 0.2, 1)',
  };

  return (
    <div 
      className={`relative bg-cover bg-center ${className}`}
      style={parallaxStyle}
    >
      {children}
    </div>
  );
};