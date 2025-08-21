import React from 'react';

const Packages = () => {
  const packages = [
    {
      name: 'Basic Package',
      color: 'bg-purple-600',
      features: [
        'Logo Design',
        'Letter Head & Envelope',
        'Stamp & Business Card',
        'Profile Book',
        'Brochure & Roll Up',
        'Billboard & Flayer',
        'Social Media Setup'
      ]
    },
    {
      name: 'Silver Package',
      color: 'bg-blue-600',
      features: [
        'Logo Design',
        'Letter Head & Envelope',
        'Stamp & Business Card',
        'Profile Book',
        'Brochure & Roll Up',
        'Billboard & Banner',
        'Social Media Setup'
      ]
    },
    {
      name: 'Gold Package',
      color: 'bg-yellow-600',
      features: [
        'Logo Design',
        'Letter Head & Envelope',
        'Stamp & Business Card',
        'Profile Book',
        'Brochure & Roll Up',
        'Billboard & Flayer',
        'Social Media Setup'
      ]
    }
  ];

  return (
    <section className="min-h-screen bg-white relative overflow-hidden">
      <div className="absolute inset-0 network-pattern opacity-20"></div>
      
      {/* Orange decorative element */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary rounded-full translate-x-16 -translate-y-16"></div>
      
      <div className="container mx-auto px-6 py-16 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <div className="bg-navy text-white px-8 py-4 rounded-full inline-block shadow-lg">
              <h2 className="text-3xl font-bold">Branding Packages</h2>
            </div>
          </div>
          
          {/* Description */}
          <div className="mb-16 max-w-4xl">
            <p className="text-lg text-gray-700 leading-relaxed">
              A <span className="text-primary font-bold">Branding Package</span> is a set of digital and physical resources developed to establish a brand's image. Each item in the package allows you to have your own name and branding and will enable you to promote your business.
            </p>
          </div>
          
          {/* Packages Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div key={index} className="relative group">
                {/* Package Header */}
                <div className={`${pkg.color} text-white p-6 rounded-t-3xl relative overflow-hidden`}>
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="w-4 h-4 bg-white bg-opacity-30 rounded-full"></div>
                    <div className="w-4 h-4 bg-white bg-opacity-50 rounded-full"></div>
                    <div className="w-4 h-4 bg-white bg-opacity-70 rounded-full"></div>
                  </div>
                  <div className="text-center pt-8">
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                  </div>
                </div>
                
                {/* Package Body */}
                <div className="bg-primary text-white p-6 rounded-b-3xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300">
                  <div className="bg-primary text-center py-3 mb-6 rounded-lg">
                    <h4 className="font-bold text-lg">Branding Packages</h4>
                  </div>
                  
                  <div className="space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <svg className="w-5 h-5 text-white flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {/* Bottom Circle */}
                  <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-navy rounded-full shadow-lg"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Bottom section */}
      <div className="bg-primary py-6 mt-16">
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center space-x-6 text-white">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.404-5.965 1.404-5.965s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.118.112.22.083.34-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.763-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24.009 12.017 24.009c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
            <span className="font-semibold ml-4">Baahiye Digital Marketing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Packages;