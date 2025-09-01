import React, { useState, useEffect } from 'react';
import api from '../api/InjectionAPI.js'; 

function InitiativeBy() {
  const [initiatives, setInitiatives] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchInitiatives = async () => {
      try {
        const data = await api.getInitiatives();
        setInitiatives(data);
      } catch (err) {
        setError('Failed to fetch initiatives.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchInitiatives();
  }, []);

  if (loading) {
    return (
      <div className="text-center py-20">
        <div className="spinner"></div> 
        <style>{`.spinner { border: 4px solid rgba(0,0,0,.1); width: 36px; height: 36px; border-radius: 50%; border-left-color: #000; animation: spin 1s ease infinite; margin: auto; } @keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    );
  }

  if (error) {
    return <div className="text-center py-20 text-red-500">{error}</div>;
  }

  return (
    <div className="relative bg-white py-24  mt-5 sm:py-32">

      <div aria-hidden="true" className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 blur-3xl xl:-top-6">
          <div className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20" ></div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest mb-7">
            Lorem Ipsum
          </h2>
          <div className='flex justify-center text-center'>
            <h2 className="text-3xl font-bold tracking-tight text-slate-800 sm:text-4xl">Initiative</h2>
          <h2 className="text-3xl font-bold tracking-tight text-rose-800 edu-nsw-act-cursive-hharryy sm:text-4xl">By</h2>
          </div>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            A collaboration driven by a shared vision for innovation.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-8 items-stretch">
          {initiatives.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-8 p-8 bg-rose-100 backdrop-blur-xl rounded-2xl shadow-lg border border-gray-200/50 transition-all duration-300 ">
              <div className="flex-shrink-0">
                <img className="h-32 w-32 object-contain rounded-full bg-white p-4 shadow-md" src={item.logo} alt={`${item.name} logo`} />
              </div>
              <div className="text-center sm:text-left flex flex-col flex-grow">
                <h3 className="text-2xl font-bold tracking-tight text-rose-800">{item.name}</h3>
                <p className="mt-2 text-base leading-7 text-slate-600 flex-grow h-28">
                  {item.description}
                </p>
                <div className="mt-6 flex items-center justify-center sm:justify-start space-x-6">
                  <a href={item.linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-800 transition-colors">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  <a href={item.websiteUrl} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-rose-800 transition-colors">
                    <span className="sr-only">Website</span>
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 21 21" aria-hidden="true">
                      <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l-1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default InitiativeBy;

