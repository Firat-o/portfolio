import { Briefcase, Code, User, Terminal, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  return (
    <section id="about" className="py-32 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter uppercase">
            System <span className="hollow-text">Protokoll</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl font-bold tracking-tight">Entwickler im Aufbau</h3>
              <div className="h-1 w-20 bg-primary" />
            </div>

            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Seit über zwei Jahren baue ich aktiv an meiner Entwicklerlaufbahn. 
                Was mit klassischen Frontendtechnologien begann, hat sich zu einer Leidenschaft für 
                <span className="text-foreground font-semibold"> Fullstack-Systeme</span> mit React, Next.js und Node entwickelt. 
              </p>
              <p>
                Ohne Abkürzungen, komplett in Eigenregie. Ich habe unzählige Tools getestet, Konzepte verworfen 
                und neu gedacht. Mein Fokus liegt heute auf performanten, stilvollen Anwendungen, die technisch 
                und visuell am <span className="text-primary italic">Zenit</span> stehen.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 pt-6">
              <a href="#contact" className="cosmic-button group">
                Initialisiere Kontakt
              </a>
              <a
                href="/projects/Firato_CV.pdf"
                download="Firat_Resume.pdf"
                target="_blank"
                className="px-8 py-3 rounded-sm border border-primary/30 text-primary hover:bg-primary/10 transition-all font-mono text-sm tracking-widest uppercase"
              >
                Download_CV.exe
              </a>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-primary/5 blur-3xl rounded-full" />
            <div className="relative tech-card bg-black/40 border-primary/20 backdrop-blur-2xl p-0 overflow-hidden shadow-2xl">
              <div className="bg-muted/30 p-3 border-b border-primary/10 flex items-center justify-between">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-primary/60 tracking-widest uppercase">
                  <Terminal size={12} />
                  Developer_Profile.sh
                </div>
              </div>
              
              <div className="p-6 font-mono text-sm space-y-6">
                <div className="space-y-2">
                  <div className="flex gap-3 text-primary">
                    <span className="opacity-50">01</span>
                    <span className="flex items-center gap-2">
                      <ChevronRight size={14} /> 
                      cat core_values.json
                    </span>
                  </div>
                  <div className="pl-10 text-emerald-400/80">
                    {'{ "focus" : "Clean Code", "design" : "High-End" }'}
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-4">
                  {[
                    { icon: <Code size={16} />, label: "Web Dev", desc: "React, Next.js, Tailwind" },
                    { icon: <User size={16} />, label: "UI/UX", desc: "Design-Feingefühl & Flow" },
                    { icon: <Briefcase size={16} />, label: "Status", desc: "Bereit für Collabs" }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-3 rounded bg-primary/5 border border-primary/10 group hover:border-primary/30 transition-colors">
                      <div className="p-2 bg-primary/10 text-primary rounded">
                        {item.icon}
                      </div>
                      <div>
                        <div className="font-bold text-foreground">{item.label}</div>
                        <div className="text-xs text-muted-foreground">{item.desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-3 text-primary animate-pulse">
                  <span className="opacity-50">02</span>
                  <span className="typing-effect">System bereit für neue Projekte...</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
