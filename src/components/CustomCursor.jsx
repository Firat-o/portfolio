import { useEffect, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);

  // 1. Raw Mouse Values (Für den inneren Punkt - SOFORTIGE Reaktion)
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // 2. Smooth Spring Values (Nur für den äußeren Ring - ELEGANTER Nachzieheffekt)
  // stiffness: höher = schnelleres Folgen
  // damping: höher = weniger Wackeln/Nachschwingen
  // mass: niedriger = fühlt sich leichter an
  const springConfig = { damping: 25, stiffness: 300, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      // Wir setzen nur die Raw Values, die Spring Values folgen automatisch
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleHover = (e) => {
      const target = e.target;
      // Erweiterte Check-Liste für Interaktivität
      const isInteractive = 
        target.closest('a') || 
        target.closest('button') || 
        target.closest('input') || 
        target.closest('.group') ||
        getComputedStyle(target).cursor === 'pointer'; // Checkt ob CSS cursor:pointer ist
      
      setIsHovering(!!isInteractive);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleHover);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleHover);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* INNER DOT: Nutzt mouseX/mouseY -> Keine Verzögerung, fühlt sich präzise an */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{ 
            x: mouseX, 
            y: mouseY, 
            translateX: "-50%", 
            translateY: "-50%" 
        }}
      />

      {/* OUTER RING: Nutzt cursorX/cursorY -> Zieht sanft nach */}
      <motion.div
        className="fixed top-0 left-0 w-10 h-10 border border-primary/50 rounded-full pointer-events-none z-[9998]"
        animate={{
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0.4 : 0.6, // Etwas sichtbarer gemacht
          backgroundColor: isHovering ? "hsl(var(--primary) / 0.1)" : "transparent",
          borderWidth: isHovering ? "0px" : "1px" // Optional: Rand weg bei Hover für modernen Look
        }}
        // WICHTIG: transition für die Hover-Animation (scale/opacity), damit die nicht springt
        transition={{ duration: 0.2 }} 
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
