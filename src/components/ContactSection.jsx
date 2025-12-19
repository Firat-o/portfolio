import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error('Status: ' + response.status);

      toast({
        title: "Übertragung abgeschlossen",
        description: "Daten empfangen. Ich melde mich in Kürze.",
      });
      e.target.reset();
    } catch (error) {
      toast({
        title: "Übertragungsfehler!",
        description: "Verbindung unterbrochen. Bitte erneut versuchen.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-32 px-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-secondary/10 -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            Connect <span className="text-primary">Directly</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Offen für Visionäre, technologische Herausforderungen und professionellen Austausch.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            <div className="space-y-8">
              {[
                { icon: <Mail />, label: "Mail", val: "f.olcay@outlook.de", href: "mailto:f.olcay@outlook.de" },
                { icon: <Phone />, label: "Telefon", val: "+49 178 ...", href: "tel:+491784596118" },
                { icon: <MapPin />, label: "Standort", val: "Hagen, NRW", href: null }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="p-4 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shadow-[0_0_15px_rgba(0,242,255,0)] group-hover:shadow-[0_0_20px_rgba(0,242,255,0.4)]">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">{item.label}</h4>
                    {item.href ? (
                      <a href={item.href} className="text-lg font-semibold hover:text-primary transition-colors">
                        {item.val}
                      </a>
                    ) : (
                      <span className="text-lg font-semibold">{item.val}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-8 tech-card border-primary/10 bg-card/30">
              <h4 className="font-mono text-xs uppercase tracking-[0.3em] mb-6 text-primary">Cyber_Networks</h4>
              <div className="flex gap-4">
                <a 
                  href="https://www.linkedin.com/in/firat-o-2a7667295/" 
                  target="_blank" 
                  className="p-3 bg-foreground/5 hover:bg-primary/20 hover:text-primary rounded-lg transition-all border border-transparent hover:border-primary/40"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 blur-3xl rounded-full -z-10" />
            <form onSubmit={handleSubmit} className="tech-card border-primary/20 bg-background/40 backdrop-blur-xl p-8 space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Identität</label>
                <input 
                  type="text" name="name" required 
                  className="w-full bg-secondary/20 border-b border-white/10 p-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                  placeholder="DEIN NAME"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Kontaktkanal</label>
                <input 
                  type="email" name="email" required 
                  className="w-full bg-secondary/20 border-b border-white/10 p-3 focus:outline-none focus:border-primary transition-colors placeholder:text-muted-foreground/30"
                  placeholder="EMAIL_ADRESSE"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-primary opacity-70">Transmission_Content</label>
                <textarea 
                  name="message" required rows={4}
                  className="w-full bg-secondary/20 border-b border-white/10 p-3 focus:outline-none focus:border-primary transition-colors resize-none placeholder:text-muted-foreground/30"
                  placeholder="NACHRICHT EINGEBEN..."
                />
              </div>
              <button 
                type="submit" 
                disabled={isSubmitting} 
                className="cosmic-button w-full py-4 uppercase font-black tracking-widest flex items-center justify-center gap-3"
              >
                {isSubmitting ? "Sende Protokoll..." : "Sende Nachricht"}
                <Send size={18} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
