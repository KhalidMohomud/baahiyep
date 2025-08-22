import React from 'react';
import SectionFooter from './SectionFooter';

const Services = () => {
  const services = [
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Graphic Design & Branding'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Digital Marketing'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
        </svg>
      ),
      title: 'Photo and Video Production'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
      ),
      title: 'Web design and Web hosting'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clipRule="evenodd" />
        </svg>
      ),
      title: 'Printing Services'
    }
  ];

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      {/* background and accents */}
      <div className="absolute inset-0 network-pattern opacity-20"></div>
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full translate-x-16 -translate-y-16"></div>
      {/* angled bottom-left creative block */}
      <div className="services-angled-block" aria-hidden="true">
        <div className="services-angled-inner">
          <div className="flex items-center gap-3 mb-2">
            <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
          <div className="text-white leading-tight font-extrabold text-3xl md:text-5xl">HOME OF</div>
          <div className="text-white leading-none font-extrabold text-4xl md:text-6xl">CREATIVITY</div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-10 md:mb-14">
            <div className="heading-bubble inline-block px-6 py-3 text-white text-2xl md:text-3xl font-extrabold">Our Services</div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Quote with vertical divider */}
            <div className="space-y-8">
              <div className="flex">
                <blockquote className="text-xl text-gray-700 leading-relaxed pr-6">
                  <span className="text-primary text-3xl font-bold">"</span>
                  We can help your business grow and reach more customers with the use of trending designs and creative production
                  <span className="text-primary text-3xl font-bold">"</span>
                </blockquote>
                <div className="w-px bg-gray-300" />
              </div>
            </div>

            {/* Services list */}
            <div className="space-y-6">
              {services.map((service, index) => (
                <div key={index} className="flex items-center space-x-5">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary text-white grid place-items-center shadow-3xl">
                    {service.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-semibold text-navy">{service.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <SectionFooter />
    </section>
  );
};

export default Services;