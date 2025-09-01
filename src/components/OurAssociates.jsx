import React, { useState, useEffect } from 'react';
import api from '../api/InjectionAPI.js'; 

function OurAssociates() {
  const [associates, setAssociates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getAssociates();
        setAssociates(data);
      } catch (err) {
        setError('Failed to fetch associates.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 bg-rose-100/30">
        <div className="text-center">Loading Associates...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20 bg-rose-100/30">
        <div className="text-center text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <div className="relative overflow-hidden bg-white py-20 sm:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest">
            Our Valued Network
          </h2>
          <div className='flex text-center justify-center'>
            <p className="mt-6 text-2xl font-extrabold text-slate-800 sm:text-3xl md:text-4xl">
              Our
            </p>
            <p className="mt-6 text-2xl font-extrabold text-rose-800 edu-nsw-act-cursive-hharryy sm:text-3xl md:text-4xl ml-2">
              Associates
            </p>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Building strong connections with our associates to create a supportive and thriving entrepreneurial ecosystem.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            {associates.map(associate => (
              <div key={associate.id} className="group col-span-1 p-8 bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-sm">
                <div className="flex justify-center items-center">
                  <img
                    className="max-h-10 filter "
                    src={associate.logo}
                    alt={associate.name}
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

export default OurAssociates;

