'use client'
import { useEffect, useRef, useState } from 'react';

// eslint-disable-next-line no-undef
export const useInView = (options?: IntersectionObserverInit) => {
  const [isInView, setIsInView] = useState(false);
  const [complete, setComplete] = useState(false)
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (complete) {return}
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
        if (entry.isIntersecting) {
          setComplete(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
        ...options,
      },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [complete, options]);

  return { ref, isInView };
};