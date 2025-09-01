import React, { useState, useEffect } from 'react';
import api from '../api/InjectionAPI.js';

const ImageSec = () => {
    const [images, setImages] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const data = await api.getGalleryImages();
                setImages(data);
            } catch (err) {
                setError('Failed to load gallery images.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };

        fetchImages();
    }, []);

    const goToPrevious = () => {
        if (images.length === 0) return;
        const isFirstImage = currentIndex === 0;
        const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    };

    const goToNext = () => {
        if (images.length === 0) return;
        const isLastImage = currentIndex === images.length - 1;
        const newIndex = isLastImage ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    };

    if (loading) {
        return (
            <section className="pt-24 bg-rose-100/30">
                <div className="text-center py-20">
                    <div className="spinner"></div>
                    <style>{`.spinner { border: 4px solid rgba(0,0,0,.1); width: 36px; height: 36px; border-radius: 50%; border-left-color: #000; animation: spin 1s ease infinite; margin: auto; } @keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="pt-24 bg-rose-100/30">
                <div className="text-center py-20 text-red-500">{error}</div>
            </section>
        );
    }

    if (!images || images.length === 0) {
        return null;
    }

    return (
        <section className="pt-24 bg-rose-100 pb-10"> 
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12">
                    <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest mb-7">
            Lovely Moments
          </h2>
                    <div className="flex text-center justify-center">
                    <h2 className="text-4xl font-bold text-slate-800 ">Our </h2>
                    <h2 className="text-4xl font-bold text-rose-800 edu-nsw-act-cursive-hharryy"> Gallery</h2>
                    </div>
                    <p className="text-slate-600 mt-2">A collection of our finest work and inspiration.</p>
                </div>
                <div className="relative h-[500px] rounded-lg overflow-hidden shadow-2xl">
                    
                    {images.map((image, index) => (
                        <div key={image.id} className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                            <img src={image.src} alt={image.title} className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            
                            <div className={`absolute bottom-0 left-0 p-8 text-white transition-transform duration-700 ease-in-out ${index === currentIndex ? 'translate-y-0' : 'translate-y-10'}`}>
                                <h3 className="text-3xl font-bold">{image.title}</h3>
                                <p className="mt-2 text-slate-200">{image.description}</p>
                            </div>
                        </div>
                    ))}
                    
                    <button onClick={goToPrevious} className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300 z-10">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" /></svg>
                    </button>
                    <button onClick={goToNext} className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/20 text-white p-2 rounded-full hover:bg-white/30 transition-colors duration-300 z-10">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
                    </button>
                </div>
                
                <div className="flex justify-center space-x-4 mt-6">
                    {images.map((image, index) => (
                        <button key={image.id} onClick={() => setCurrentIndex(index)} className={`w-24 h-16 rounded-md overflow-hidden transition-all duration-300 ${index === currentIndex ? 'ring-4 ring-rose-800 ring-offset-2' : 'opacity-60 hover:opacity-100'}`}>
                            <img src={image.src} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImageSec;
