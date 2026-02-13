import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    // Standard auf false, aber wir checken gleich beim Laden
    const [isDarkMode, setIsDarkMode] = useState(false);

    // FIX 1: Das Dependency Array [] verhindert den Infinite Loop
    useEffect(() => {
        // Prüfen ob 'dark' im Storage ODER ob der User Systemeinstellung Dark hat
        const isDark = localStorage.getItem("theme") === "dark" || 
                       (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []); // <--- WICHTIG: Nur einmal beim Laden ausführen!

    const toggleTheme = () => {
        if (isDarkMode) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
            setIsDarkMode(false);
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
            setIsDarkMode(true);
        }
    };

    return (
        <button 
            onClick={toggleTheme} 
            // FIX 2: "max-sm:hidden" entfernt -> Jetzt sichtbar auf Handy
            // FIX 3: "fixed top-5..." entfernt -> Fügt sich jetzt in die Navbar ein
            className={cn(
                "p-2 rounded-full transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-800",
                "focus:outline-none" // Tippfehler korrigiert (focus:outlin-hidden -> outline-none)
            )} 
        >
            {isDarkMode ? (
                <Sun className="h-6 w-6 text-yellow-300 transition-transform hover:rotate-90" />
            ) : (
                <Moon className="h-6 w-6 text-blue-900 transition-transform hover:-rotate-12" />
            )}  
        </button>
    );
}
