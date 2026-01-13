import { motion } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight, Code2 } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    id: 6,
    title: "Aura-Landingpage",
    category: "Next.js 15 / Design",
    description: "High-End Landingpage mit Fokus auf Ästhetik und DSGVO-Konformität.",
    image: "/projects/project5.png",
    tags: ["React 19", "Tailwind 4", "Framer"],
    demoUrl: "https://landingpage-sw.vercel.app/",
    githubUrl: "https://github.com/Firat-o/landingpage-sw",
    size: "large" 
  },
  {
    id: 5,
    title: "Izoki Shop",
    category: "E-Commerce",
    description: "Shopify Architektur für Merchandising.",
    image: "/projects/izoki-shop.png",
    tags: ["Shopify", "Liquid"],
    demoUrl: "https://izoki.io/",
    githubUrl: "#",
    size: "medium"
  },
  {
    id: 4,
    title: "Event-Nexus",
    category: "Fullstack / Tool",
    description: "Firebase gesteuertes Gästemanagement.",
    image: "/projects/project4.png",
    tags: ["Next.js", "Firebase"],
    demoUrl: "https://invite-card-theta.vercel.app/",
    githubUrl: "https://github.com/Firat-o/invite-card",
    size: "small"
  },
  {
    id: 2,
    title: "Quote Engine",
    category: "Web App",
    description: "Dynamischer Zitat-Generator.",
    image: "/projects/project2.png",
    tags: ["React", "API"],
    demoUrl: "https://quote-app-beta-delta.vercel.app/",
    githubUrl: "https://github.com/Firat-o/Quote-App-Beta",
    size: "small"
  },
  {
    id: 1,
    title: "Bookstore Front",
    category: "Frontend Architecture",
    description: "Modernes Buchshop-Interface.",
    image: "/projects/project1.png",
    tags: ["Tailwind", "JS"],
    demoUrl: "https://library-w-react.vercel.app/",
    githubUrl: "https://github.com/Firat-o/Library-w-React",
    size: "medium"
  }
];

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.23, 1, 0.32, 1] }
  })
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-6">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-primary font-mono text-sm tracking-[0.3em] uppercase">
              <Code2 size={16} />
              <span>Deployment_Archive</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase">
              AUSGEWÄHLTE <br />
              <span className="hollow-text italic">PROJEKTE</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-xs text-sm font-mono leading-relaxed border-l-2 border-primary/20 pl-4 font-bold">
            Ein Auszug meiner Projekte, entwickelt mit Fokus auf Performance und technischer Ästhetik.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-6 md:grid-rows-2 gap-6 h-full">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariants}
              className={cn(
                "group relative overflow-hidden tech-card p-0 flex flex-col justify-end min-h-[400px]",
                project.size === "large" ? "md:col-span-4 md:row-span-1" : 
                project.size === "medium" ? "md:col-span-2 md:row-span-1" : "md:col-span-3"
              )}
            >
              <div className="absolute inset-0 z-0 bg-card">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/90 to-transparent z-10" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none" />
              </div>

              <div className="relative z-20 p-8 space-y-4">
                <div className="space-y-1">
                  <span className="text-[10px] font-mono text-primary font-black uppercase tracking-[0.3em]">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-black tracking-tight text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                </div>

                <p className="text-muted-foreground text-sm font-medium leading-relaxed max-w-md translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  {project.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-primary/10">
                  <div className="flex gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[9px] font-mono font-bold border border-primary/20 px-2 py-1 rounded-sm bg-primary/5 uppercase text-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.githubUrl !== "#" && (
                      <a href={project.githubUrl} target="_blank" className="text-foreground hover:text-primary transition-colors hover:scale-110">
                        <Github size={22} />
                      </a>
                    )}
                    <a href={project.demoUrl} target="_blank" className="p-2 bg-primary text-primary-foreground rounded-full hover:rotate-45 transition-transform shadow-lg shadow-primary/30">
                      <ArrowUpRight size={22} />
                    </a>
                  </div>
                </div>
              </div>

              <div className="absolute top-6 right-6 text-xl font-mono font-black text-foreground/10 group-hover:text-primary/20 transition-colors">
                #{project.id.toString().padStart(2, '0')}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
