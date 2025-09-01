import React, { useState, useEffect } from 'react';
import RegistrationForm from './RegistrationForm';

const Hero = () => {
    const slides = [
        {
            src: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Venture Vault 3.0',
            description: 'Unlock Funding Opportunities for Your Startup Idea.'
        },
        {
            src: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Innovate & Inspire',
            description: 'Holistic Support for Budding Entrepreneurs and Startups.'
        },
        {
            src: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
            title: 'Build The Future',
            description: 'Join a community of innovators and disruptors.'
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
        
        <section className="relative w-full min-h-screen flex items-center py-20 md:py-0">
            
            {slides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.src} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/60"></div>
                </div>
            ))}

            
            <div className="relative z-10 container mx-auto px-4 sm:px-6 w-full grid grid-cols-1 md:grid-cols-2 items-center gap-y-16 md:gap-x-12">
                
                <div className="relative text-white text-center md:text-left" style={{ minHeight: '200px' }}>
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 flex flex-col justify-center transition-all duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100 transform-none' : 'opacity-0 transform translate-y-4'}`}
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold">{slide.title}</h1>
                            <p className="mt-4 max-w-lg mx-auto md:mx-0 text-lg md:text-xl text-gray-200">{slide.description}</p>
                        </div>
                    ))}
                </div>

                <div className="flex justify-center md:justify-end">
                    <RegistrationForm />
                </div>
            </div>
        </section>
    );
};

export default Hero;
