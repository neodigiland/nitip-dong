import { motion, useInView, useAnimation, type Variant } from "framer-motion";
import { useEffect, useRef } from "react";
import { cn } from "../../lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  once?: boolean;
}

export default function ScrollReveal({ 
  children, 
  width = "fit-content", 
  className,
  delay = 0,
  direction = "up",
  distance = 30,
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once });
  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else if (!once) {
        mainControls.start("hidden");
    }
  }, [isInView, mainControls, once]);

  const getHiddenVariant = (): Variant => {
      switch (direction) {
          case 'up': return { opacity: 0, y: distance };
          case 'down': return { opacity: 0, y: -distance };
          case 'left': return { opacity: 0, x: distance };
          case 'right': return { opacity: 0, x: -distance };
          case 'none': return { opacity: 0 };
          default: return { opacity: 0, y: distance };
      }
  };

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "visible" }} className={cn(className)}>
      <motion.div
        variants={{
          hidden: getHiddenVariant(),
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
