import { useState } from "react";
import { Github, Linkedin, Mail, ArrowUpCircle, MapPin, Shield } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Footer = () => {
  const [showAddress, setShowAddress] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-24 pb-12 px-4 overflow-hidden border-t border-primary/10 bg-background">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-20">
          
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl font-black tracking-tighter italic uppercase">
              Firat<span className="text-primary text-4xl">.</span>
            </h2>
            <p className="text-muted-foreground max-w-sm leading-relaxed text-sm">
              Designgetriebene Entwicklung am Zenit der Zeit. Ich kombiniere moderne Architektur mit High-End-Ästhetik für digitale Erlebnisse in Hagen und darüber hinaus.
            </p>
            <div className="flex gap-4">
              {[
                { icon: <Github size={18} />, href: "https://github.com/Firat-o" },
                { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/firat-o-2a7667295/" },
                { icon: <Mail size={18} />, href: "mailto:f.olcay@outlook.de" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  target="_blank"
                  className="p-3 rounded-sm bg-secondary/30 border border-primary/10 text-muted-foreground hover:text-primary hover:border-primary/40 transition-all duration-300"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-3 space-y-6">
            <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-primary/60">Navigation</h4>
            <ul className="space-y-3 text-sm font-bold uppercase tracking-widest">
              <li><a href="#dev" className="hover:text-primary transition-colors">Start</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Über mich</a></li>
              <li><a href="#projects" className="hover:text-primary transition-colors">Projekte</a></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-6 flex flex-col items-start md:items-end">
             <h4 className="text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-primary/60">Kontakt_Protokoll</h4>
             
             <button
               onClick={() => setShowAddress(!showAddress)}
               className="text-xs font-mono font-bold py-2 px-4 border border-primary/20 bg-primary/5 hover:bg-primary/10 text-primary transition-all flex items-center gap-2"
             >
               <MapPin size={14} />
               {showAddress ? "DATEN_VERBERGEN" : "ADRESSE_OFFENLEGEN"}
             </button>

             <AnimatePresence>
               {showAddress && (
                 <motion.address
                   initial={{ opacity: 0, height: 0 }}
                   animate={{ opacity: 1, height: "auto" }}
                   exit={{ opacity: 0, height: 0 }}
                   className="not-italic text-sm text-muted-foreground md:text-right font-mono space-y-1 overflow-hidden"
                 >
                   Firat Olcay<br />
                   Hagen, NRW<br />
                   Deutschland<br />
                   <a href="mailto:f.olcay@outlook.de" className="text-primary hover:underline">f.olcay@outlook.de</a>
                 </motion.address>
               )}
             </AnimatePresence>

             <button 
                onClick={scrollToTop}
                className="group flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-all"
             >
                Back to core
                <ArrowUpCircle size={18} className="group-hover:-translate-y-1 transition-transform" />
             </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[9px] font-mono text-muted-foreground tracking-[0.3em] uppercase">
          <div className="flex items-center gap-2">
            <Shield size={10} className="text-primary" />
            © {new Date().getFullYear()} FIRAT-OLCAY // ALL RIGHTS RESERVED
          </div>
          <div className="flex gap-8">
             <a href="#" className="hover:text-foreground transition-colors">Impressum</a>
             <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
