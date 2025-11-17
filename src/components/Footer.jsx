import { useState } from "react";
import { ArrowUp } from "lucide-react";

export const Footer = () => {
  const [showAddress, setShowAddress] = useState(false);

  return (
    <footer className="py-12 px-4 bg-card relative border-t border-border mt-12 pt-8 flex flex-wrap justify-between items-center gap-4">
      <p className="text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Firat O. All rights reserved.
      </p>

      <div className="flex items-center gap-6">
        <button
          type="button"
          onClick={() => setShowAddress((v) => !v)}
          aria-expanded={showAddress}
          aria-controls="kontakt-adresse"
          className="text-sm underline underline-offset-4 hover:no-underline"
        >
          {showAddress ? "Adresse ausblenden" : "Adresse anzeigen"}
        </button>

        <a
          href="#dev"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/30 text-primary transition-colors"
          aria-label="Nach oben"
        >
          <ArrowUp />
        </a>
      </div>

      {showAddress && (
        <address
          id="kontakt-adresse"
          className="w-full mt-4 text-sm not-italic text-muted-foreground"
        >
          Firat Olcay, Straße, Hausnummer, PLZ, Bundesland<br />
          <a href="mailto:f.olcay@outlook.de" className="hover:underline">
            f.olcay@outlook.de
          </a>
        </address>
      )}
    </footer>
  );
};
