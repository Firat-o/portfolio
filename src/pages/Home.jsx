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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
        

        {/* Theme Toggle*/}
        <ThemeToggle /> 

        {/* Background Effects*/}
        <StarBackground />
        {/* Navbar */}        
        <Navbar /> 
        {/* Main Content */} 
        <main> 
            <DevSection /> 
            <AboutSection />
            <SkillSection />
            <ProjectsSection />
            <ContactSection />
        </main> 


        {/* Footer */} 
        <Footer />
    </div> 
    ) 
} 