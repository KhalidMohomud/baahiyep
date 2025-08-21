import React from 'react';

const About = () => {
  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 network-pattern opacity-20"></div>
      
      {/* Decorative orange element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full translate-x-16 -translate-y-16"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-12">
            <div className="bg-navy text-white px-8 py-4 rounded-full inline-block shadow-lg">
              <h2 className="text-3xl font-bold">About Us</h2>
            </div>
          </div>
          
          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                <span className="text-primary font-bold">Baahiye Digital Marketing</span> is a company that provides creative and digital services.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We merge your brand with new creative designs and provide web designing and hosting solutions. Our creative digital marketing hub is made up of a team of innovators who understand the influence of digital media on brand and business growth.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We pride ourselves on the ability to blend innovation and efficiency to produce first-rate services for our clients. Your business goals are the driving force behind ours.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed">
                We always aim to exceed and deliver results based on our clients' marketing objectives while enhancing their overall brands.
              </p>
            </div>
            
            <div className="relative">
              {/* Decorative icons */}
              <div className="absolute -top-8 -left-8 w-24 h-24 bg-primary rounded-full flex items-center justify-center opacity-90">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              
              <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-primary rounded-full flex items-center justify-center opacity-90">
                <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom orange section */}
      <div className="bg-primary h-32 relative">
        <div className="absolute inset-0 network-pattern opacity-20"></div>
        <div className="absolute top-0 left-0 w-full h-16 bg-navy rounded-b-full"></div>
      </div>
    </section>
  );
};

export default About;