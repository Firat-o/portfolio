import { useEffect, useState } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);

    useEffect(() => {
        const generateElements = () => {
            const starCount = Math.floor((window.innerWidth * window.innerHeight) / 12000);
            const newStars = Array.from({ length: starCount }, (_, i) => ({
                id: `star-${i}`,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 100,
                opacity: Math.random() * 0.7 + 0.3,
                duration: Math.random() * 3 + 2
            }));

            const meteorCount = 4;
            const newMeteors = Array.from({ length: meteorCount }, (_, i) => ({
                id: `meteor-${i}`,
                size: Math.random() * 2 + 1,
                x: Math.random() * 100,
                y: Math.random() * 30,
                delay: Math.random() * 20,
                duration: Math.random() * 5 + 5
            }));

            setStars(newStars);
            setMeteors(newMeteors);
        };

        generateElements();
        window.addEventListener('resize', generateElements);
        return () => window.removeEventListener("resize", generateElements);
    }, []);

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        opacity: star.opacity,
                        "--animate-pulse-subtle": `pulse-subtle ${star.duration}s ease-in-out infinite`
                    }}
                />
            ))}

            {meteors.map((meteor) => (
                <div
                    key={meteor.id}
                    className="meteor animate-meteor"
                    style={{
                        width: `${meteor.size * 2}px`,
                        height: `${meteor.size * 2}px`,
                        left: `${meteor.x}%`,
                        top: `${meteor.y}%`,
                        animationDelay: `${meteor.delay}s`,
                        animationDuration: `${meteor.duration}s`
                    }}
                />
            ))}
        </div>
    );
};
