import React, { useState, useEffect } from 'react';
import api from '/src/api/InjectionAPI.js';

const KeyNotes = () => {
    const [speakers, setSpeakers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchSpeakers = async () => {
            try {
                const data = await api.getKeynoteSpeakers();
                setSpeakers(data);
            } catch (err) {
                setError('Failed to load keynote speakers.');
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        fetchSpeakers();
    }, []);

    if (loading) {
        return (
            <section className="py-28 bg-rose-100 mt-15">
                <div className="text-center py-20">
                    <div className="spinner"></div>
                    <style>{`.spinner { border: 4px solid rgba(0,0,0,.1); width: 36px; height: 36px; border-radius: 50%; border-left-color: #000; animation: spin 1s ease infinite; margin: auto; } @keyframes spin { to { transform: rotate(360deg); } }`}</style>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="py-28 bg-rose-100 mt-15">
                <div className="text-center py-20 text-red-500">{error}</div>
            </section>
        );
    }
    
    return (
        <section className="py-28 bg-white ">
            <div className="container mx-auto px-6 text-center ">
                <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest">
            Words By Experts
          </h2>
              <div className='mt-7 flex text-center justify-center'>
                <h2 className="text-4xl font-bold text-slate-800 open-sans-hharryy">Keynote</h2>
                <h2 className="text-4xl font-bold text-rose-800  edu-nsw-act-cursive-hharryy">Speakers</h2></div>
                <p className="mt-5 max-w-2xl mx-auto text-xl mb-25 text-gray-500">
            Creative gatherings for inspired minds.
          </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-12 gap-y-24 mt-5">
                    {speakers.map((speaker) => (
                        <div key={speaker.id} className="relative bg-white rounded-xl shadow-lg ">
                            <div className="absolute -top-14 left-1/2 -translate-x-1/2">
                                <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="w-28 h-28 rounded-full object-cover border-4 border-white shadow-md"
                                />
                            </div>
                            <div className="pt-16 pb-6 px-4 text-center">
                                <h3 className="text-xl font-bold text-gray-900">{speaker.name}</h3>
                                <p className="text-rose-800 font-semibold mb-4 text-sm h-10">{speaker.note}</p>
                                <a
                                    href={speaker.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`${speaker.name}'s LinkedIn Profile`}
                                    className="inline-block text-gray-400 hover:text-rose-700 transition-colors"
                                >
                                    <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default KeyNotes;
