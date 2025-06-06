import React from "react"

const projects = [

    {

        id: 1,
        title: "SaaS Landing-Page",
        description: "funktionsvolle webapp mit React",
        image: "/projects/project1.png",
        tags: ["React", "TailwindCSS", "JavaScript"],
        demoUrl: '#',
        githubUrl: '#'

    },

    {

        id: 2,
        title: "SaaS Landing-Page",
        description: "funktionsvolle webapp mit React",
        image: "/projects/project2",
        tags: ["React", "TailwindCSS", "JavaScript"],
        demoUrl: '#',
        githubUrl: '#'

    },

    {

        id: 3,
        title: "SaaS Landing-Page",
        description: "funktionsvolle webapp mit React",
        image: "/projects/project3",
        tags: ["React", "TailwindCSS", "JavaScript"],
        demoUrl: '#',
        githubUrl: '#'

    }

]


export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w 2xl mx-auto">
                hier paar projekte
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div id={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover">

                        <div className="h-48 overflow-hidden">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover blur-sm group-hover:blur-none transition-all duration-500"
                            />                        
                            
                            
                            </div>

                            <div className="p-6">
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.tags.map((tag) => (
                                        <span className="px-2 py-1 text-xs font-medium border rounded-full bg-primary/5 text-secondary-foreground">
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>

                       <h3 className="text-xl font-semibold mb-1">{project.title}</h3>    
                       <p className="text-foreground text-sm mb-4">{project.description}</p>             


                    </div>


                ))}
            </div>

        </div>
    </section>
}