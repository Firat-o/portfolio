import { motion } from "framer-motion";
import { AboutSection } from "../components/AboutSection"
import { ContactSection } from "../components/ContactSection"
import { DevSection } from "../components/DevSection"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { ProjectsSection } from "../components/ProjectsSection"
import { SkillSection } from "../components/SkillsSection"
import { StarBackground } from "../components/StarBackground"
import { ThemeToggle } from "../components/ThemeToggle"

export const Home = () => {
    return (
        <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30"
        >
            <ThemeToggle /> 
            <StarBackground />
            <Navbar /> 
            
            <main> 
                <DevSection /> 
                <AboutSection />
                <SkillSection />
                <ProjectsSection />
                <ContactSection />
            </main> 

            <Footer />
        </motion.div> 
    ) 
}
