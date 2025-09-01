import React, { useState, useEffect } from 'react';
import api from '/src/api/InjectionAPI.js';


const EventCard = ({ event }) => (
  <div className="group relative block bg-white rounded-lg shadow-md transition-all duration-300 transform hover:scale-105 hover:-rotate-2">
    
    <div className="p-3 pb-0">
       <img className="h-48 w-full object-cover rounded-t-sm shadow-inner" src={event.imageUrl} alt={event.title} />
    </div>
    
    <div className="p-5 pt-4">
      <h3 className="text-2xl text-gray-800 edu-nsw-act-cursive-hharryy">
        {event.title}
      </h3>
      <div className="mt-4 flex items-center text-sm font-semibold text-gray-500">
        <svg className="flex-shrink-0 mr-2 h-5 w-5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>
        <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
      </div>
      <div className="mt-6">
         <a href={`/events/${event.id}`} className="text-sm font-bold text-rose-800 group-hover:text-rose-600 transition-colors duration-300">
           Explore Event <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1.5">&rarr;</span>
         </a>
      </div>
    </div>
  </div>
);



function Events() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const data = await api.getEvents();
        setEvents(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchEvents();
  }, []);

  if (loading) {
    return <div className="text-center p-12 bg-rose-100">Loading events...</div>;
  }

  if (error) {
    return <div className="text-center p-12 bg-rose-100 text-red-600">Error: {error}</div>;
  }

  if (!events || events.length === 0) {
    return null; 
  }

  return (
    <div className="bg-rose-100 py-16 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold text-rose-800 uppercase tracking-widest">
            Mark Your Calenders
          </h2>
          <div className='flex text-center justify-center'>

            <h2 className="text-3xl font-extrabold text-slate-800 sm:text-4xl mt-7 ">
            Upcoming
          </h2>
          <h2 className="text-3xl font-extrabold text-rose-800 sm:text-4xl mt-7 edu-nsw-act-cursive-hharryy">
            Events
          </h2>
          </div>
          <p className="mt-5 max-w-2xl mx-auto text-xl text-gray-500">
            Creative gatherings for inspired minds.
          </p>
        </div>
        
        <div className="grid gap-10 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          {events.map(event => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Events;

