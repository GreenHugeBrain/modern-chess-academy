import { ReactNode } from 'react';
import { useInView } from '../hooks/useInView';

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}

export default function Reveal({ children, delay = 0, className = '', y = 24 }: Props) {
  const { ref, isVisible } = useInView();
  return (
    <div
      ref={ref}
      style={{
        transitionDelay: `${delay}ms`,
        transform: isVisible ? 'translateY(0)' : `translateY(${y}px)`
      }}
      className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  );
}