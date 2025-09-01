import logo1 from '../assets/Logoipsum323.svg'
import logo2 from '../assets/Logoipsum352.svg'
import logo3 from '../assets/Logoipsum378.svg'
import logo4 from '../assets/Logoipsum400.svg'
import logo5 from '../assets/hharryy.svg'

const partners = [
  { id: 1, name: 'Innovate Corp', logo: logo1 },
  { id: 2, name: 'Tech Solutions', logo: logo2 },
  { id: 3, name: 'Future Ventures', logo: logo3 },
  { id: 4, name: 'Startup Hub', logo: logo4 },
];

const associates = [
    { id: 1, name: 'Growth Nexus', logo: logo3 },
    { id: 2, name: 'Capital Link', logo: logo1 },
    { id: 3, name: 'Mentor Network', logo: logo4 },
    { id: 4, name: 'Idea Factory', logo: logo2 },
];



const collabs = [
    { id: 1, name: 'Global Tech', logo: logo2 },
    { id: 2, name: 'Creative Inc', logo: logo3 },
    { id: 3, name: 'E-Cell', logo: logo4 },
    { id: 4, name: 'Alpha Group', logo: logo1 },
];

const events = [
    {
      id: 1,
      title: 'Venture Vault 2.0',
      shortDescription: 'Unlock Funding Opportunities for Your Startup Idea. A holistic support system for budding entrepreneurs.',
      longDescription: 'Venture Vault 3.0 is the premier event for early-stage startups to connect with a curated panel of esteemed investors and industry pioneers. This full-day event is designed to provide a transformative platform for innovation, offering invaluable feedback, networking opportunities, and the potential for crucial seed funding. Join us to witness the future of entrepreneurship unfold.',
      date: '2025-10-26T09:00:00Z',
      location: 'CGC Landran, Mohali',
      imageUrl: 'https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      agenda: [
        { time: '9:00 AM', topic: 'Registration & Welcome Coffee' },
        { time: '10:00 AM', topic: 'Opening Keynote by Industry Leader' },
        { time: '11:00 AM', topic: 'Pitch Session 1: Tech & SaaS' },
        { time: '1:00 PM', topic: 'Networking Lunch' },
        { time: '2:00 PM', topic: 'Pitch Session 2: Health & Biotech' },
        { time: '4:00 PM', topic: 'Investor Panel & Q&A' },
        { time: '5:00 PM', topic: 'Closing Remarks & Awards' },
      ]
    },
    {
      id: 2,
      title: 'Innovation Summit 2025',
      shortDescription: 'Connecting the brightest minds in technology and business for a day of inspiring talks and networking.',
      longDescription: 'The Innovation Summit is a landmark event that brings together the brightest minds in technology and business. Featuring inspiring keynotes, interactive workshops, and unparalleled networking opportunities, the summit is the perfect place to discover the next wave of innovation.',
      date: '2025-11-15T09:00:00Z',
      location: 'Virtual Event',
      imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      agenda: [
        { time: '9:00 AM', topic: 'Virtual Check-in & Networking Lounge' },
        { time: '10:00 AM', topic: 'Keynote: The Future of AI' },
        { time: '11:30 AM', topic: 'Breakout Session: Sustainable Tech' },
        { time: '1:00 PM', topic: 'Virtual Lunch & Learn' },
        { time: '2:30 PM', topic: 'Panel: Scaling Your Business' },
      ]
    },
    {
      id: 3,
      title: 'Founder\'s Workshop',
      shortDescription: 'An intensive workshop designed to equip early-stage founders with the skills needed to build and scale.',
      longDescription: 'This intensive, hands-on workshop is designed for early-stage founders looking to build a strong foundation for their business. Our expert-led sessions will cover everything from product-market fit to fundraising strategies, providing you with the essential skills to navigate the challenges of entrepreneurship and accelerate your growth.',
      date: '2025-12-05T09:00:00Z',
      location: 'Online',
      imageUrl: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
      agenda: [
        { time: '10:00 AM', topic: 'Module 1: Defining Your MVP' },
        { time: '12:00 PM', topic: 'Module 2: Go-to-Market Strategy' },
        { time: '2:00 PM', topic: 'Module 3: Perfecting Your Pitch' },
      ]
    }
];

const initiatives = [
    {
        id: 1,
        name: 'VentureNest TBI',
        logo: 'https://placehold.co/400x400/f3e8ff/4c1d95?text=VentureNest',
        description: 'A leading technology business incubator dedicated to fostering innovation and supporting early-stage startups on their journey to success.',
        linkedinUrl: 'https://linkedin.com',
        websiteUrl: 'https://example.com'
    },
    {
        id: 2,
        name: 'CGC University',
        logo: 'https://placehold.co/400x400/e0f2fe/0891b2?text=CGC+University',
        description: 'Chandigarh Group of Colleges, a premier educational institution known for its commitment to academic excellence and entrepreneurial development.',
        linkedinUrl: 'https://linkedin.com',
        websiteUrl: 'https://example.com'
    },
    {
        id: 3,
        name: 'The Rusted Monarchy',
        logo: 'https://placehold.co/400x400/f3e8ff/0891b2?text=The+Rusted+Monarchy',
        description: 'Beast Studio of Web Development',
        linkedinUrl: 'https://linkedin.com',
        websiteUrl: 'https://example.com'
    },
    {
        id: 4,
        name: 'Random Company',
        logo: 'https://placehold.co/400x400/f3e8ff/0891b2?text=Random+Company',
        description: 'Random company does random work with random philosophy',
        linkedinUrl: 'https://linkedin.com',
        websiteUrl: 'https://example.com'
    }
];
const galleryImages = [
    { id: 1, src: 'https://placehold.co/400x400/f3e8ff/0891b2?text=Ik+Tarfa', title: 'title 1', description: 'desc 1' },
    { id: 2, src: 'https://placehold.co/400x400/e0f2fe/0891b2?text=Changa+Ae', title: 'title 2', description: 'desc 2' },
    { id: 3, src: 'https://placehold.co/400x400/f3e8ff/0891b2?text=Ki+Kariye', title: 'title 3', description: 'desc 3' },
    { id: 4, src: 'https://placehold.co/400x400/e0f2fe/0891b2?text=Taj+Mahal', title: 'title 4', description: 'desc 4' },
];

const keynoteSpeakers = [
    { id: 1, name: 'Dr. Arjan Dhillon', note: 'A for Arjan 2 , Shikhar ', image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg', linkedin: '#' },
    { id: 2, name: 'Proff. Hustinder', note: 'Timeless', image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg', linkedin: '#' },
    { id: 3, name: 'Mr. Nirvair Pannu', note: 'NirvairNess', image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg', linkedin: '#' },
];


const api = {
  getPartners: () => new Promise(resolve => setTimeout(() => resolve(partners), 500)),
  getAssociates: () => new Promise(resolve => setTimeout(() => resolve(associates), 500)),
  getInitiatives: () => new Promise(resolve => setTimeout(() => resolve(initiatives), 500)),
  getCollabs: () => new Promise(resolve => setTimeout(() => resolve(collabs), 500)),
  getEvents: () => new Promise(resolve => setTimeout(() => resolve(events), 500)),
  getEventById: (id) => new Promise((resolve, reject) => {
    setTimeout(() => {
      const eventId = parseInt(id, 10);
      const event = events.find(e => e.id === eventId);
      if (event) {
        resolve(event);
      } else {
        reject(new Error('Event not found'));
      }
    }, 500);
  }),
  getGalleryImages: () => new Promise(resolve => setTimeout(() => resolve(galleryImages), 500)),
  getKeynoteSpeakers: () => new Promise(resolve => setTimeout(() => resolve(keynoteSpeakers), 500)),
};

export default api;

