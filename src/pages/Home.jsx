import { motion } from "framer-motion";
import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { DevSection } from "../components/DevSection";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";
import { ProjectsSection } from "../components/ProjectsSection";
import { SkillsSection } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

const pageVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
};

export const Home = () => {
  return (
    <motion.div
      variants={pageVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 0.6, ease: "easeInOut" }}
      className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30"
    >
      <ThemeToggle />
      <StarBackground />
      <Navbar />

      <main>
        <DevSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </motion.div>
  );
};
