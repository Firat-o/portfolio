import { ArrowDown } from "lucide-react"


export const DevSection = () => {

    return <section id="dev" className="relative min-h-screen flex flex-col items-center justify-center px-4">

    <div>


    <div className="container max-w-4xl mx-auto text-center z-10">

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hallo hier ist </span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">Firat </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-3">O.</span>


        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4">
            Ich gestalte nicht nur Code, sondern Erlebnisse – funktional, durchdacht und mit eigener Handschrift.
        </p>

    <div className="pt-4 opacity-0 animate-fade-in-delay-4">
        <a href="#projects" className="cosmic-button">
            Check ab
        </a>
    </div>

    </div>



    </div>

    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2"> Scroll </span>
        <ArrowDown className="h-5 w-5 text-primary" />
    </div>
    </section>

}