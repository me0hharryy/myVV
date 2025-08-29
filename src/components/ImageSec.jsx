import React, { useState } from 'react'

const ImageSec = () => {
    const images = [
        { src: 'https://placehold.co/1200x600/e2e8f0/334155?text=Scene+1', title: 'Scene1', description: 'random description 1' },
        { src: 'https://placehold.co/1200x600/cbd5e1/334155?text=Scene+2', title: 'scene2 ', description: 'random description 2' },
        { src: 'https://placehold.co/1200x600/94a3b8/e2e8f0?text=Scene+3', title: 'scene3', description: 'random description 3' },
        { src: 'https://placehold.co/1200x600/64748b/e2e8f0?text=Scene+4', title: 'scene4', description: 'random description 4' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    return (
        <section className="pt-24 bg-white"> {/* Added pt-24 to clear the fixed header */}
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12  ">
                    <div className="flex text-center justify-center">
                    <h2 className="text-4xl font-bold text-slate-800 ">Our </h2>
                    <h2 className="text-4xl font-bold text-rose-800 edu-nsw-act-cursive-hharryy"> Gallery</h2>
                    </div>
                    <p className="text-slate-600 mt-2">A collection of our finest work and inspiration.</p>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                    {/* Main Image Display */}
                    {images.map((image, index) => (
                        <div key={index} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            {/* Animated Text Overlay */}
                            <div className={`absolute bottom-0 left-0 p-8 text-white transition-transform duration-700 ease-in-out ${index === currentIndex ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h3 className="text-3xl font-bold">{image.title}</h3>
                                <p className="mt-2 text-slate-200">{image.description}</p>
                            </div>
                        </div>
                    ))}
                    {/* Navigation Arrows */}
                    <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300 z-10">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300 z-10">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                {/* Thumbnail Navigation */}
                <div className="flex justify-center space-x-4 mt-6">
                    {images.map((image, index) => (
                        <button key={index} onClick={() => setCurrentIndex(index)} className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${index === currentIndex ? 'ring-4 ring-rose-800 ring-offset-2' : 'opacity-60 hover:opacity-100'}`}>
                            <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSec