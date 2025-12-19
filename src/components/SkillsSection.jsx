import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from '@/lib/utils';
import { Code2, Database, Wrench, Layout, Cpu, Globe } from "lucide-react";

const skills = [
    { name: "HTML/CSS", level: 75, category: "frontend", icon: <Layout size={18} /> },
    { name: "JS / TS", level: 65, category: "frontend", icon: <Code2 size={18} /> },
    { name: "Tailwind CSS", level: 55, category: "frontend", icon: <Globe size={18} /> },
    { name: "Next.js", level: 45, category: "frontend", icon: <Cpu size={18} /> },
    { name: "React", level: 45, category: "frontend", icon: <Code2 size={18} /> },
    { name: "Node.js", level: 35, category: "backend", icon: <Database size={18} /> },
    { name: "PostgreSQL", level: 5, category: "backend", icon: <Database size={18} /> },
    { name: "MongoDB", level: 5, category: "backend", icon: <Database size={18} /> },
    { name: "Python", level: 45, category: "backend", icon: <Code2 size={18} /> },
    { name: "Git/GitHub", level: 55, category: "tools", icon: <Wrench size={18} /> },
    { name: "Docker", level: 5, category: "tools", icon: <Wrench size={18} /> },
    { name: "VS Code", level: 75, category: "tools", icon: <Wrench size={18} /> },
];

const categories = ["all", "frontend", "backend", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => 
        activeCategory === "all" || skill.category === activeCategory
    );

    return (
        <section id="skills" className="py-32 px-4 relative overflow-hidden">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
            
            <div className="container mx-auto max-w-6xl">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4">
                        TECH <span className="hollow-text">STACK</span>
                    </h2>
                    <p className="text-muted-foreground max-w-xl mx-auto">
                        Infrastruktur und Werkzeuge, die ich nutze, um digitale Visionen zum Leben zu erwecken.
                    </p>
                </div>

                <div className="flex flex-wrap justify-center gap-3 mb-16">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-6 py-2 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border",
                                activeCategory === category 
                                    ? "bg-primary text-primary-foreground border-primary shadow-[0_0_15px_hsl(var(--primary)/0.4)]" 
                                    : "bg-card/50 text-muted-foreground border-border hover:border-primary/50 hover:text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <motion.div 
                    layout
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredSkills.map((skill) => (
                            <motion.div
                                key={skill.name}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                className="tech-card group"
                            >
                                <div className="flex flex-col h-full justify-between gap-4">
                                    <div className="flex items-center justify-between">
                                        <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-transform">
                                            {skill.icon}
                                        </div>
                                        <span className="text-[10px] font-mono text-primary opacity-70 group-hover:opacity-100">
                                            {skill.level}%
                                        </span>
                                    </div>
                                    
                                    <div>
                                        <h3 className="font-bold text-sm tracking-tight mb-3 group-hover:text-primary transition-colors">
                                            {skill.name}
                                        </h3>
                                        <div className="w-full bg-secondary/30 h-1 rounded-full overflow-hidden">
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${skill.level}%` }}
                                                transition={{ duration: 1, ease: "easeOut" }}
                                                className="bg-primary h-full shadow-[0_0_10px_hsl(var(--primary))]"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};
