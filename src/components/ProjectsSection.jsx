import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    id: 6,
    title: "Beratung & Terminbuchung",
    description: "Moderne Landingpage für eine Sexualberaterin. Features: Responsives Aura-Design, Dark Mode, Framer Motion Animationen und DSGVO-konforme Terminbuchung via meetergo.",
    image: "/projects/project5.png",
    tags: ["Next.js 15", "TailwindCSS", "ShadCN UI", "TypeScript"],
    demoUrl: "https://landingpage-sw.vercel.app/", 
    githubUrl: "https://github.com/Firat-o/landingpage-sw",
    featured: true
  },
  {
    id: 5,
    title: "E-Commerce Online Store",
    description: "Design, Aufbau und Konfiguration eines voll funktionsfähigen E-Commerce-Shops für Merch und Dienstleistungen auf der Shopify-Plattform.",
    image: "/projects/izoki-shop.png", 
    tags: ["Shopify", "E-Commerce", "Design", "Marketing"],
    demoUrl: "https://izoki.io/", 
    githubUrl: "#", 
    featured: false
  },
  {
    id: 4,
    title: "Event Invite Tool",
    description: "Datenbankgestützte Gästeliste – Firebase powered",
    image: "/projects/project4.png",
    tags: ["Next.js", "Firebase", "TailwindCSS"],
    demoUrl: "https://invite-card-theta.vercel.app/",
    githubUrl: "https://github.com/Firat-o/invite-card",
    featured: false
  },
  {
    id: 2,
    title: "Zitat Generator",
    description: "Datenbankgestützte QuotesApp",
    image: "/projects/project2.png",
    tags: ["React", "Firebase", "CSS"],
    demoUrl: "https://quote-app-beta-delta.vercel.app/",
    githubUrl: "https://github.com/Firat-o/Quote-App-Beta",
    featured: false
  },
  {
    id: 1,
    title: "React Bookstore",
    description: "Einfaches, aber funktionales Buchshop-Frontend mit React",
    image: "/projects/project1.png",
    tags: ["React", "TailwindCSS", "JavaScript"],
    demoUrl: "https://library-w-react.vercel.app/",
    githubUrl: "https://github.com/Firat-o/Library-w-React",
    featured: false
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-32 px-4 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2/3 h-1/3 bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <div className="container mx-auto max-w-6xl">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            Meine <span className="text-primary italic">Arbeit</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Digitale Lösungen an der Schnittstelle von Design und Technologie.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              variants={itemVariants}
              className="group relative bg-card/40 backdrop-blur-md border border-white/5 rounded-2xl overflow-hidden hover:border-primary/50 transition-colors duration-500"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span key={i} className="text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center gap-6">
                  {project.demoUrl !== "#" && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-sm font-semibold flex items-center gap-2 hover:text-primary transition-colors"
                    >
                      View Project <ExternalLink size={14} />
                    </a>
                  )}
                  {project.githubUrl !== "#" && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      <Github size={20} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-20"
        >
          <a
            href="https://github.com/Firat-o"
            target="_blank"
            className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-foreground text-background font-bold hover:scale-105 transition-transform"
          >
            Alle Projekte sehen
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
