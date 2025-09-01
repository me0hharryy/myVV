import React, { useState, useEffect } from 'react';
import api from '../api/InjectionAPI';

function Partners() {
  const [partners, setPartners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getPartners();
        setPartners(data);
      } catch (err) {
        setError('Failed to fetch partners.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 bg-slate-50">
        <div className="text-center">Loading Partners...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 bg-slate-50">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-rose-100/30 py-20 sm:py-24">
      <div aria-hidden="true" className="absolute inset-x-0 top-0 h-48 "></div>
      <div aria-hidden="true" className="absolute left-1/2 -top-24 -translate-x-1/2 transform-gpu w-[40rem] h-[40rem]  rounded-full blur-3xl"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest">
            Trusted By The Best
          </h2>
          <div className='flex text-center justify-center'>
            <p className="mt-6 text-2xl font-extrabold text-slate-800 sm:text-3xl md:text-4xl">
            Our 
          </p>
          <p className="mt-6 text-2xl font-extrabold text-rose-800 edu-nsw-act-cursive-hharryy sm:text-3xl md:text-4xl ">
            Partners
          </p>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We are proud to collaborate with these forward-thinking organizations to foster innovation and support the next generation of entrepreneurs.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            {partners.map(partner => (
              <div key={partner.id} className="group col-span-1 p-8 bg-white backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-sm  ">
                <div className="flex justify-center items-center">
                  <img 
                    className="max-h-10 filter  group-hover:grayscale-0 transition-all duration-300" 
                    src={partner.logo} 
                    alt={partner.name} 
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partners;


