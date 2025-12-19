import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Terminal, Home as HomeIcon } from "lucide-react";

export const NotFound = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen flex items-center justify-center p-4 bg-background overflow-hidden relative"
    >
      <div className="absolute inset-0 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="max-w-md w-full tech-card bg-card/40 border-primary/20 backdrop-blur-xl p-8 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-4 rounded-full bg-primary/10 text-primary animate-pulse">
            <Terminal size={48} />
          </div>
        </div>

        <h1 className="text-8xl font-black tracking-tighter mb-2">404</h1>
        <h2 className="text-xl font-mono text-primary uppercase tracking-[0.3em] mb-6 italic">
          System_Error
        </h2>

        <p className="text-muted-foreground mb-8 leading-relaxed">
          Der angeforderte Pfad konnte nicht im Protokoll gefunden werden. Die Verbindung wurde unterbrochen.
        </p>

        <Link
          to="/"
          className="cosmic-button w-full flex items-center justify-center gap-2 group"
        >
          <HomeIcon size={18} className="group-hover:-translate-y-1 transition-transform" />
          Back to Core
        </Link>
      </div>

      <div className="absolute bottom-10 left-10 opacity-20 font-mono text-[10px] tracking-widest hidden md:block uppercase">
        Error_Code: 0xNF_77
      </div>
    </motion.div>
  );
};
