import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 6,
    title: "Beratung & Terminbuchung",
    description: "Moderne Landingpage für eine Sexualberaterin. Features: Responsives Aura-Design, Dark Mode, Framer Motion Animationen und DSGVO-konforme Terminbuchung via meetergo.",
    image: "/projects/project6.png",
    tags: ["Next.js 15", "TailwindCSS", "ShadCN UI", "TypeScript"],
    demoUrl: "https://landingpage-sw.vercel.app/", 
    githubUrl: "https://github.com/Firat-o/landingpage-sw",
  },
  {
    id: 5,
    title: "E-Commerce Online Store",
    description: "Design, Aufbau und Konfiguration eines voll funktionsfähigen E-Commerce-Shops für Merch und Dienstleistungen auf der Shopify-Plattform.",
    image: "/projects/izoki-shop.png", 
    tags: ["Shopify", "E-Commerce", "Design", "Marketing"],
    demoUrl: "https://izoki.io/", 
    githubUrl: "#", 
  },
  {
    id: 4,
    title: "Event Invite Tool",
    description: "Datenbankgestützte Gästeliste – Firebase powered",
    image: "/projects/project4.png",
    tags: ["Next.js", "Firebase", "TailwindCSS"],
    demoUrl: "https://invite-card-theta.vercel.app/",
    githubUrl: "https://github.com/Firat-o/invite-card",
  },
  {
    id: 2,
    title: "Zitat Generator",
    description: "Datenbankgestützte QuotesApp",
    image: "/projects/project2.png",
    tags: ["React", "Firebase", "CSS"],
    demoUrl: "https://quote-app-beta-delta.vercel.app/",
    githubUrl: "https://github.com/Firat-o/Quote-App-Beta",
  },
  {
    id: 1,
    title: "React Bookstore",
    description: "Einfaches, aber funktionales Buchshop-Frontend mit React",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://library-w-react.vercel.app/",
    githubUrl: "https://github.com/Firat-o/Library-w-React",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          <span className="text-primary">Projekte</span> im Fokus
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Einige Beispiele, wie ich moderne Technologien für echte Kundenbedürfnisse einsetze.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover border border-border/50">
              <div className="h-48 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover blur-0 group-hover:scale-105 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/10 text-primary border-primary/20">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-6 line-clamp-3">{project.description}</p>

                <div className="flex justify-between items-center mt-auto">
                  <div className="flex space-x-3">
                    {project.demoUrl !== "#" && (
                        <a
                        href={project.demoUrl}
                        target="_blank"
                        className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-1 text-sm"
                        >
                        <ExternalLink size={18} /> Live Demo
                        </a>
                    )}
                    {project.githubUrl !== "#" && (
                        <a
                        href={project.githubUrl}
                        target="_blank"
                        className="text-foreground/70 hover:text-primary transition-colors duration-300 flex items-center gap-1 text-sm"
                        >
                        <Github size={18} /> Code
                        </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="https://github.com/Firat-o"
            target="_blank"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:opacity-90 transition-opacity"
          >
            Mehr auf GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
