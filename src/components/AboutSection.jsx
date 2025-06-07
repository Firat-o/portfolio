import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Developer im Aufbau</h3>

            <p className="text-muted-foreground">
              Seit über zwei Jahren baue ich aktiv an meiner Entwicklerlaufbahn.
              Angefangen mit klassischen Frontendtechnologien, bis hin zu Fullstack-Projektklonen mit React, Next.js & Node.
              Learning-by-doing, komplett in Eigenregie.
            </p>

            <p className="text-muted-foreground">
              Ich hab unzählige Tools getestet, Projektideen umgesetzt, Konzepte verworfen, neu gedacht.
              Das Ziel: Performante, stilvolle und klare Webanwendungen, die nicht nur Code sind – sondern ein Erlebnis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                Nachricht senden
              </a>
              <a
                href="/Firato_CV.pdf"
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Lebenslauf
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Web Development</h4>
                  <p className="text-muted-foreground">
                    Fokus auf React, Next.js, Tailwind – modern, clean und wartbar.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Sense</h4>
                  <p className="text-muted-foreground">
                    Ich kombiniere Tech & Stil – klare Layouts, intuitive Abläufe & Design-Feingefühl.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">Projektfokus</h4>
                  <p className="text-muted-foreground">
                    Zielgerichtetes Arbeiten mit Blick für Deadlines, Qualität & ständige Verbesserung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
