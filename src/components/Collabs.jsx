import React, { useState, useEffect } from 'react';
import api from '../api/InjectionAPI.js'; 

function Collabs() {
  const [collabs, setCollabs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await api.getCollabs();
        setCollabs(data);
      } catch (err) {
        setError('Failed to fetch collaborations.');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="py-20 bg-slate-50">
        <div className="text-center">Loading Collaborations...</div>
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
    <div className="relative overflow-hidden bg-slate-50 py-20 sm:py-24">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest">
            Working Together
          </h2>
          <div className='flex text-center justify-center'>
            <p className="mt-6 text-2xl font-extrabold text-slate-800 sm:text-3xl md:text-4xl">
              Our
            </p>
            <p className="mt-6 text-2xl font-extrabold text-rose-800 edu-nsw-act-cursive-hharryy sm:text-3xl md:text-4xl ml-2">
              Collaborations
            </p>
          </div>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            We believe in the power of synergy. Our collaborations with these esteemed organizations help us create a greater impact.
          </p>
        </div>
        <div className="mt-16">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 lg:gap-8">
            {collabs.map(collab => (
              <div key={collab.id} className="group col-span-1 p-8 bg-white/50 backdrop-blur-sm border border-slate-200/50 rounded-2xl shadow-sm">
                <div className="flex justify-center items-center">
                  <img
                    className="max-h-10 filter  group-hover:grayscale-0 transition-all duration-300"
                    src={collab.logo}
                    alt={collab.name}
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

export default Collabs;

