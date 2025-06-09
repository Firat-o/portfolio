

import { Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Fehler bei der Anfrage. Status: ' + response.status);
      }

      toast({
        title: "Nachricht erfolgreich verschickt",
        description: "Danke dir! Ich melde mich bald.",
      });
      e.target.reset();

    } catch (error) {
      console.error(error);
      toast({
        title: "Da ist was schiefgelaufen!",
        description: "Bitte versuche es später noch einmal.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    // ... der Rest deiner Komponente bleibt gleich ...
    // Hier ist der unveränderte JSX-Teil zur Sicherheit
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Sag <span className="text-primary">Hallo</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Ob Projektidee, Collab oder Feedback – einfach anschreiben. Ich bin offen für alles, was nach vorne geht.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">Direkt erreichbar</h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10"><Mail className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Mail</h4>
                  <a href="mailto:f.olcay@outlook.de" className="text-muted-foreground hover:text-primary transition-colors">f.olcay@outlook.de</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10"><Phone className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Telefon</h4>
                  <a href="tel:+491784596118" className="text-muted-foreground hover:text-primary transition-colors">+49 178 ***im-CV***</a>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10"><MapPin className="h-6 w-6 text-primary" /></div>
                <div>
                  <h4 className="font-medium">Standort</h4>
                  <span className="text-muted-foreground">Hagen, NRW</span>
                </div>
              </div>
            </div>
            <div className="pt-8">
              <h4 className="font-medium mb-4">Netzwerke</h4>
              <div className="flex space-x-4 justify-center">
                <a href="https://www.linkedin.com/in/firat-o-2a7667295/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors"><Linkedin /></a>
              </div>
            </div>
          </div>
          <div className="bg-card p-8 rounded-lg shadow-xs backdrop-blur-sm bg-background/80">
            <h3 className="text-2xl font-semibold mb-6">Schreib mir was</h3>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Dein Name</label>
                <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground transition-colors duration-300 focus:outline-none focus:border-primary" placeholder="z. B. Max Mustermann" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Deine Mail</label>
                <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground transition-colors duration-300 focus:outline-none focus:border-primary" placeholder="z. B. max@example.com" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Deine Nachricht</label>
                <textarea id="message" name="message" required rows={4} className="w-full px-4 py-3 rounded-md border border-input bg-background text-foreground transition-colors duration-300 focus:outline-none focus:border-primary resize-none" placeholder="Hey Firat, ich hab da was ..."></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className={cn("cosmic-button w-full flex items-center justify-center gap-2")}>
                {isSubmitting ? "Wird gesendet..." : "Sende Nachricht"}
                <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};