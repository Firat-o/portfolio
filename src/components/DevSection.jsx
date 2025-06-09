
import { ArrowDown } from "lucide-react";

export const DevSection = () => {
  return (
    <section
      id="dev"
      // ÄNDERUNG HIER: Wir ersetzen die Zentrierung durch ein großzügiges Padding.
      className="relative z-20 min-h-screen flex flex-col justify-center px-4 pt-24 pb-32 sm:pt-32 sm:pb-40"
    >
      {/* Der Rest des Codes bleibt absolut identisch */}
      <div className="container max-w-4xl mx-auto text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-3">
          <span className="opacity-0 animate-fade-in">Hey, ich bin </span>
          <span className="text-primary opacity-0 animate-fade-in-delay-1">
            Firat
          </span>
          <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">
             O.
          </span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto opacity-0 animate-fade-in-delay-4">
          Ich code und adaptiere Ideen
        </p>

        <div className="pt-4 opacity-0 animate-fade-in-delay-4">
          <a href="#projects" className="extra-button">
            Zeig mir die Projekte
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  );
};