import { Briefcase, Code, User } from "lucide-react"


export const AboutSection = () => {

    return <section id="about" className="py-24 px-4 relative">

        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                About <span className="text-primary">Me</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                    <h3 className="text-2xl font-semibold">passionate web developer & tech creator</h3>

                    <p className="text-mute-foreground">
                    seit mehr als 2 jahren haeng ich im coding jungle bei dem ich mein frontendbootcamp absolvierte


                    </p>

                     <p>
                    verschiedene frameworks zu einem zweck getestet um webapps zu entwickeln


                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
                        <a href="contact" className="cosmic-button">Nachricht senden</a>
                         <a href="contact" className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">Download CV</a>
                    </div>

                </div>
    
                <div className="grid grid-cols-1 gap-6">
                    <div className="gradient-border p-6 card-hover">
                        <div className="flex item-start gap-4">
                            <div className="p-3 rounded-full bg-primary-100">
                                <Code className="h-6 w-6 text-primary"/>
                            </div>
                            <div className="text-left">
                                <h4 className="font-semibold text-lg"> Web Developement</h4>
                                <p className="text-muted-foreground">Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-6 card-hover"><div className="flex item-start gap-4">
                            <div className="p-3 rounded-full bg-primary-100">
                                <User className="h-6 w-6 text-primary"/>
                                <div className="text-left">
                                <h4 className="font-semibold text-lg"> UI/UX Design</h4>
                                <p className="text-muted-foreground">Lorem, ipsum dolor.</p>
                            </div>
                            </div>
                        </div></div>
                    <div className="gradient-border p-6 card-hover"><div className="flex item-start gap-4">
                            <div className="p-3 rounded-full bg-primary-100">
                                <Briefcase className="h-6 w-6 text-primary"/>
                                <div className="text-left">
                                <h4 className="font-semibold text-lg"> Project Management</h4>
                                <p className="text-muted-foreground">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed, maxime eum? Commodi ipsum excepturi eius cupiditate.</p>
                            </div>
                            </div>
                        </div></div>


                </div>
            </div>

        </div>

    </section>

}