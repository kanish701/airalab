// src/components/ImageScroller.tsx

import { useState, useEffect } from 'react';
import Screenshot1 from '../assets/dashboarddesign (1).jpeg';
import Screenshot2 from '../assets/dashboarddesign (2).jpeg';
import Screenshot3 from '../assets/dashboarddesign (3).jpeg';

const ImageScroller = () => {
    const images = [Screenshot1, Screenshot2, Screenshot3];
    const [currentIndex, setCurrentIndex] = useState(0);

    // This controls how long each image is shown for (including its scroll animation)
    const DURATION_PER_IMAGE = 6000; // 6 seconds

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex(prevIndex => (prevIndex + 1) % images.length);
        }, DURATION_PER_IMAGE);

        // Clean up the interval when the component is removed
        return () => clearInterval(intervalId);
    }, [images.length]);

    return (
        // This is the container that creates the "window" effect. It MUST have overflow-hidden.
        <div className="h-[350px] w-[600px] bg-gray-950 rounded-b-3xl overflow-hidden relative">
            {images.map((image, index) => (
                <img
                    key={index}
                    src={image}
                    alt={`Website Screenshot ${index + 1}`}
                    className={`
                        w-full h-auto min-h-[150%] // Make image much taller than the container to allow scrolling
                        object-cover
                        absolute top-0 left-0
                        transition-opacity duration-1000 ease-in-out
                        // Apply the scroll animation ONLY to the active image
                        ${index === currentIndex ? 'animate-scroll-vertical opacity-100' : 'opacity-0'}
                    `}
                    style={{
                        // This links the animation duration to our JS constant
                        animationDuration: `${DURATION_PER_IMAGE}ms`,
                    }}
                />
            ))}
        </div>
    );
};

export default ImageScroller;