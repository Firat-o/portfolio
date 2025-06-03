import { useEffect, useState } from "react"

// FOR STARS id, size, x, y, opacity, animationDuration gon parse into the stars 


// FOR METEORS id, size, x, y, delay, animationDuration gon parse into the METEORS


export const StarBackground = () => {

    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([])


    useEffect(() => {
        generateStars();
        generateMeteors()
    }, [])




    //everytime when we start the page we gon generate depending on windows size some stars

    const generateStars = () => {
        const numberOfStars = Math.floor(window.innerWidth * window.innerHeight / 10000);


        const newStars = []

        for (let i = 0; i < numberOfStars; i++) {
            newStars.push({
                id: i,
                size: Math.random() * 3 + 1,
                // generates random sized stars from size 1 to 4
                x: Math.random() * 100,
                y: Math.random() * 100, // 100 is the percentage , we set the positions from 1-100
                opacity: Math.random() * 0.5 + 0.5,
                animationDuration: Math.random() * 4 + 2
            })
        }
        setStars(newStars);
    };

    const generateMeteors = () => {
        const numberOfMeteors = 3;


        const newMeteors = []

        for (let i = 0; i < numberOfMeteors; i++) {
            newMeteors.push({
                id: i,
                size: Math.random() * 2 + 1,
                // generates random sized stars from size 1 to 4
                x: Math.random() * 100,
                y: Math.random() * 20, // 100 is the percentage , we set the positions from 1-100
                delay: Math.random() * 15,
                animationDuration: Math.random() * 3 + 3
            })
        }
        setMeteors(newMeteors);
    };


        return ( <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star animate-pulse-subtle"
                    style={{
                        width: star.size + "px",
                        height: star.size + "px",
                        left: star.x + "%",
                        top: star.y + "%",
                        opacity: star.opacity,
                        animationDuration: star.animationDuration + "s",
                    }}
                />
            ))}

            {meteors.map((meteors) => (
                <div
                    key={meteors.id}
                    className="meteor animate-meteor"
                    style={{
                        width: meteors.size * 50 + "px",
                        height: meteors.size + "px",
                        left: meteors.x + "%",
                        top: meteors.y + "%",
                        animationDelay: meteors.opacity,
                        animationDuration: meteors.animationDuration + "s",
                    }}
                />
            ))}
        </div>
        );
    } 