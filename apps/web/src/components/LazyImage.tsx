import { useState, useRef, useEffect } from 'react';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function LazyImage({ src, alt, className = '', style }: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '100px' }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={imgRef} 
      className={`${className} overflow-hidden`}
      style={style}
    >
      {/* Placeholder blur */}
      {!isLoaded && (
        <div 
          className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 animate-pulse"
        />
      )}
      
      {/* Actual image - only load when in view */}
      {isInView && (
        <div
          className={`w-full h-full bg-cover bg-center transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url("${src}")` }}
          onLoad={() => setIsLoaded(true)}
          role="img"
          aria-label={alt}
        >
          <img 
            src={src} 
            alt={alt} 
            className="sr-only"
            onLoad={() => setIsLoaded(true)}
            loading="lazy"
            decoding="async"
          />
        </div>
      )}
    </div>
  );
}
