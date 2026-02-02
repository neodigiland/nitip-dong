import ScrollReveal from './ui/ScrollReveal';

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string; // Add className prop back
  delay?: number; // delay in ms
}

export default function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  // Convert ms to seconds for Framer Motion
  const delayInSeconds = delay / 1000;

  return (
    <ScrollReveal className={className} delay={delayInSeconds} width="100%">
      {children}
    </ScrollReveal>
  );
}
