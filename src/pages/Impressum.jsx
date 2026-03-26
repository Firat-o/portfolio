import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export default function Impressum() {
  return (
    <main className="min-h-screen py-24 px-6 md:px-12 container max-w-4xl mx-auto">
      <Link 
        to="/" 
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 mb-12 transition-colors font-mono text-sm uppercase tracking-widest"
      >
        <ArrowLeft size={16} /> Zurück zur Basis
      </Link>

      <h1 className="text-4xl md:text-5xl font-black mb-8 tracking-tighter">
        Impressum
      </h1>

      <div className="space-y-8 text-muted-foreground leading-relaxed">
        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            Firat Olcay<br />
            58089 Hagen
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Kontakt</h2>
          <p>
            Telefon: +49 178 4596118<br />
            E-Mail: f.olcay@outlook.de
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-foreground mb-4">Haftung für Inhalte</h2>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG bin ich als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          </p>
        </section>
      </div>
    </main>
  );
}
