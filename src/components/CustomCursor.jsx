import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false); 

  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  
  const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setIsVisible(true); 
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
  
      const isInteractive = 
        target.closest('a, button, input, textarea, select, label') || 
        target.closest('.group') ||
        target.closest('[role="button"]'); 
      
      setIsHovering(!!isInteractive);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);
    document.addEventListener("mouseleave", handleMouseLeave); 
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [mouseX, mouseY]);

  return (
    <>
  

     
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
            x: mouseX, 
            y: mouseY, 
            translateX: "-50%", 
            translateY: "-50%",
            opacity: isVisible ? 1 : 0 
        }}
      />

      {/* OUTER RING */}
      <motion.div
        className="hidden md:block fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isVisible ? (isHovering ? 0.5 : 0.3) : 0, 
          backgroundColor: isHovering ? "hsl(var(--primary) / 0.1)" : "transparent",
          borderWidth: isHovering ? "0px" : "1px",
        }}
        transition={{ duration: 0.15, ease: "easeOut" }} 
        style={{ 
            x: cursorX, 
            y: cursorY, 
            translateX: "-50%", 
            translateY: "-50%" 
        }}
      />
    </>
  );
};
