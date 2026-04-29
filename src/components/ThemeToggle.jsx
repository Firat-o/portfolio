import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils"

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const isDark = localStorage.getItem("theme") === "dark" || 
                       (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches);
        
        setIsDarkMode(isDark);
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, []); 

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
          
            className={cn(
                "p-2 rounded-full transition-colors duration-300 hover:bg-slate-200 dark:hover:bg-slate-800",
                "focus:outline-none" 
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
