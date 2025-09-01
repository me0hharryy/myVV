import React from 'react';


const aboutData = {
  description: 'Venture Vault is a premier initiative designed to bridge the gap between innovative startup ideas and potential investors. We provide a dynamic platform for budding entrepreneurs to present their vision, receive mentorship, and secure the funding needed to turn their dreams into reality.',
  imageUrl: 'https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  keyFeatures: [
    {
      title: 'Showcase Innovation',
      text: 'Present your unique ideas to a curated panel of investors and industry experts.'
    },
    {
      title: 'Expert Mentorship',
      text: 'Gain invaluable guidance from seasoned entrepreneurs and mentors.'
    },
    {
      title: 'Secure Funding',
      text: 'Connect with angel investors and venture capitalists ready to fund the next big thing.'
    }
  ]
};

function AboutVentureVault() {
  return (
    <section className="bg-white py-20 sm:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        
        <div className="text-center">
          <div className='flex text-center justify-center items-baseline'>
            <p className="text-4xl font-extrabold text-slate-900 sm:text-5xl tracking-tight">
              About
            </p>
            <p className="text-4xl font-extrabold text-rose-800 edu-nsw-act-cursive-hharryy sm:text-5xl ml-3">
              VentureVault
            </p>
          </div>
          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600 leading-relaxed">
            {aboutData.description}
          </p>
        </div>

        
        <div className="mt-16">
          <img 
            src={aboutData.imageUrl} 
            alt="A team collaborating in a modern office" 
            className="w-full h-auto object-cover shadow-2xl rounded-tl-[100px] rounded-br-[100px] sm:rounded-tl-[150px] sm:rounded-br-[150px]"
          />
        </div>
        
        
        <div className="mt-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {aboutData.keyFeatures.map((feature, index) => (
              <div key={index} className="relative p-8 bg-white rounded-2xl shadow-sm overflow-hidden group">
                <div className="absolute -top-5 -right-3 text-8xl font-extrabold text-gray-100/80 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110">
                  0{index + 1}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="mt-4 text-base text-gray-600">{feature.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default AboutVentureVault;

