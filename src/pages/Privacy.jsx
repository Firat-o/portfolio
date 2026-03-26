import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Privacy() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 container max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-12 transition-colors font-mono text-sm uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Zurück zur Basis
      </Link>

      <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
        Datenschutzerklärung
      </h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">1. Datenschutz auf einen Blick</h2>
          <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Als reines Portfolio-Projekt werden hier grundsätzlich keine Daten systematisch gesammelt, getrackt oder ausgewertet.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">2. Kontaktformular & E-Mail-Kontakt</h2>
          <p>
            Wenn Sie mich über die bereitgestellten Links oder das Kontaktformular kontaktieren, erfolgt die Weitergabe der Daten ausschließlich über das von Ihnen selbst gewählte E-Mail-Programm bzw. den von Ihnen genutzten E-Mail-Anbieter. Es findet keine Zwischenspeicherung Ihrer Daten in einer Datenbank auf dieser Website statt. Die übermittelten Daten werden von mir ausschließlich zur Bearbeitung Ihrer Anfrage genutzt und nicht an Dritte weitergegeben.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">3. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei Vercel. Anbieter ist die Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA. Wenn Sie unsere Website besuchen, erfasst Vercel technisch bedingte Logfiles inklusive Ihrer IP-Adresse, um die Website auszuliefern.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">4. Verantwortliche Stelle</h2>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2">
            Firat Olcay<br />
            58089 Hagen<br />
            E-Mail: f.olcay@outlook.de
          </p>
        </section>
      </div>
    </main>
  );
}
