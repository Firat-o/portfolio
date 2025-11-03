import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "React Bookstore",
    description: "Einfaches, aber funktionales Buchshop-Frontend mit React",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://library-w-react.vercel.app/",
    githubUrl: "https://github.com/Firat-o/Library-w-React",
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
    id: 4,
    title: "Event Invite Tool",
    description: "Datenbankgestützte Gästeliste – Firebase powered",
    image: "/projects/project4.png",
    tags: ["Next.js", "Firebase", "TailwindCSS"],
    demoUrl: "https://invite-card-theta.vercel.app/",
    githubUrl: "https://github.com/Firat-o/invite-card",
  },
  {
    id: 5,
    title: "E-Commerce Online Store (Shopify)",
    description: "Design, Aufbau und Konfiguration eines voll funktionsfähigen E-Commerce-Shops für Merch und Dienstleistungen auf der Shopify-Plattform.",
    image: "/projects/izoki-shop.png", 
    tags: ["Shopify", "E-Commerce", "Design", "Marketing"],
    demoUrl: "https://izoki.io/", 
    githubUrl: "#", 
  },
  {
    id: 3,
    title: "Was kommt als Nächstes ?",
    description: "Unser Projekt?",
    image: "/projects/project3.png",
    tags: ["Macht der Kollaboration"],
    demoUrl: "#",
    githubUrl: "#",
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
          Einige Beispiele, wie ich Dinge sinngemäß für den Zweck umsetze.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-500"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/5 text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-foreground text-sm mb-4">{project.description}</p>

                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Firat-o"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Mein GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
