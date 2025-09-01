import React, { useState, useEffect } from 'react';
import RegistrationForm from './RegistrationForm';

const Hero = () => {
    const slides = [
        {
            src: 'https://placehold.co/400x400/f3e8ff/0891b2?text=Portrait+of+YOU',
            //title: 'Venture Vault 1',
            //description: 'Unlock Funding Opportunities for Your Startup Idea.'
        },
        {
            src: 'https://placehold.co/400x400/e0f2fe/0891b2?text=Love+Gone',
            //title: 'Venture Vault 2',
            //description: 'Holistic Support for Budding Entrepreneurs and Startups.'
        },
        {
            src: 'https://placehold.co/400x400/f3e8ff/0891b2?text=Aphrodite',
            //title: 'Venture Vault 3',
            //description: 'Join a community of innovators and disruptors.'
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        
        <section className="relative h-screen w-full overflow-hidden flex items-center">
            
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}

            
            <div className="relative z-10 container mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-y-10 md:gap-x-12">
                


                <div className="relative text-white text-center md:text-left" style={{ minHeight: '200px' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}

                            className={`absolute inset-0 flex flex-col justify-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                        >
                            <h1 className="text-5xl md:text-7xl font-bold">{slide.title}</h1>
                            <p className="mt-4 max-w-lg mx-auto md:mx-0 text-lg md:text-xl text-gray-200">{slide.description}</p>
                        </div>
                    ))}
                </div>

                {/* Registration Form */}
                <div className="flex justify-center md:justify-end mt-5">
                    <RegistrationForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;