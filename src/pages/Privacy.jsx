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
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">2. Hosting</h2>
          <p>
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter: Vercel. Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer IP-Adressen.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">3. Verantwortliche Stelle</h2>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
          </p>
          <p className="mt-2">
            Firat Olcay<br />
            Schillerstraße 13<br />
            58089 Hagen<br />
            E-Mail: f.olcay@outlook.de
          </p>
        </section>
      </div>
    </main>
  );
}
