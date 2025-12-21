import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Code2, SunMoon } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "./ThemeToggle";

const navLinks = [
  { name: "Start", href: "#dev" },
  { name: "System", href: "#about" },
  { name: "Stack", href: "#skills" },
  { name: "Projekte", href: "#projects" },
  { name: "Kontakt", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4",
        isScrolled ? "py-4" : "py-8"
      )}
    >
      <div
        className={cn(
          "container mx-auto max-w-5xl rounded-full transition-all duration-700 border flex items-center justify-between px-6 py-3",
          isScrolled 
            ? "bg-background/60 backdrop-blur-2xl border-primary/20 shadow-[0_8px_32px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.4)]" 
            : "bg-transparent border-transparent"
        )}
      >
        <a href="#dev" className="flex items-center gap-2 group">
          <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0)] group-hover:shadow-[0_0_15px_rgba(0,242,255,0.4)]">
            <Code2 size={20} />
          </div>
          <span className="font-black tracking-tighter text-xl uppercase italic">
            Firat<span className="text-primary text-2xl">.</span>
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-all duration-300 relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="relative z-50">
            <ThemeToggle />
          </div>
          
          <button
            className="md:hidden p-2 text-foreground transition-transform active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-full left-4 right-4 mt-4 p-8 bg-background/95 backdrop-blur-3xl border border-primary/20 rounded-3xl md:hidden flex flex-col gap-8 text-center shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-xl font-black tracking-widest uppercase hover:text-primary transition-colors flex flex-col items-center gap-1 group"
                >
                  <span className="text-[10px] text-primary/40 font-mono tracking-tighter group-hover:text-primary">
                    // 0{navLinks.indexOf(link) + 1}
                  </span>
                  {link.name}
                </a>
              ))}
            </div>
            
            <div className="pt-6 border-t border-primary/10 flex flex-col items-center gap-4">
               <div className="flex items-center gap-2 text-[10px] font-mono text-muted-foreground uppercase tracking-widest">
                  <SunMoon size={14} className="text-primary" />
                  Interface Mode
               </div>
               <ThemeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
