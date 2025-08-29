import React, { useState, useEffect } from 'react'

const Hero = () => {
    const slides = [
        { src: 'https://images.pexels.com/photos/1314410/pexels-photo-1314410.jpeg' },
        { src: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg' },
        { src: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg',/* title: 'Venture Vault 3', /*description: 'Unlock Funding Opportunities for Your Startup Idea. Holistic Support for Budding Entrepreneurs and Startups.' */},
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <section className="relative h-screen w-full overflow-hidden">
            {slides.map((slide, index) => (
                <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                    <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/10"></div>
                </div>
            ))}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
                <div className="overflow-hidden">
                    <h1 className={`text-5xl md:text-7xl font-bold transition-transform duration-1000 ease-in-out ${'transform'}`} style={{ transform: `translateY(${currentIndex * -100}%)` }}>
                        {slides.map((slide, index) => <div key={index} className="py-2">{slide.title}</div>)}
                    </h1>
                </div>
                <div className="overflow-hidden mt-4 max-w-3xl">
                     <div className={`text-lg md:text-xl text-gray-200 transition-transform duration-1000 ease-in-out delay-200 ${'transform'}`} style={{ transform: `translateY(${currentIndex * -100}%)` }}>
                        {slides.map((slide, index) => <div key={index} className="py-2">{slide.description}</div>)}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero