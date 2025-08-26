
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAmount, setMeta } from '../store/paymentSlice';
import { useNavigate } from 'react-router-dom';
import SectionFooter from './SectionFooter';

const features = [
  'Logo Design',
  'Letter Head & Envelope',
  'Stamp & Business Card',
  'Profile Book',
  'Brochure & Roll Up',
  'Billboard & Flayer',
  'Social Media Setup',
];

const data = [
  { name: 'Basic Package', stars: 1, checks: [0, 1], monthlyPrice: 49, yearlyPrice: 490 },
  { name: 'Silver Package', stars: 2, checks: [0, 1, 2], monthlyPrice: 99, yearlyPrice: 990 },
  { name: 'Gold Package', stars: 3, checks: [0, 1, 2, 3, 4, 5, 6], monthlyPrice: 199, yearlyPrice: 1990 },
];

const Packages = () => {
  const [isYearly, setIsYearly] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <section className="relative overflow-visible bg-gradient-to-b from-white via-gray-50 to-white py-20">
      {/* background pattern */}
      <div className="absolute inset-0 network-pattern opacity-10 pointer-events-none"></div>

      {/* Toggle Button */}
    

      <div className="px-6 mx-auto max-w-7xl relative">
        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="inline-block px-6 py-3 rounded-full bg-brandOrange text-white text-2xl md:text-4xl font-extrabold shadow-lg">
            Branding Packages
          </h2>
        </div>
        <p className="text-center text-gray-600 leading-relaxed max-w-5xl mx-auto mb-10 md:mb-16 text-base md:text-lg">
          A <span className="text-brandOrange font-bold">Branding Package</span> is a set of digital and physical resources developed to
          establish a brand's image.
        </p>

        <div className="flex justify-center mb-10">
        <div className="bg-gray-200 rounded-full p-1 flex shadow-inner">
          <button
            onClick={() => setIsYearly(false)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              !isYearly ? 'bg-brandOrange text-white shadow-md' : 'text-gray-700 hover:text-brandOrange'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setIsYearly(true)}
            className={`px-6 py-2 rounded-full font-semibold transition ${
              isYearly ? 'bg-brandOrange text-white shadow-md' : 'text-gray-700 hover:text-brandOrange'
            }`}
          >
            Yearly
          </button>
        </div>
      </div>

        <div className="grid w-full gap-10 md:grid-cols-3">
          {data.map((pkg) => (
            <div
              key={pkg.name}
              className="relative group transition transform hover:-translate-y-2"
            >
              
              {/* Stars above card */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex gap-1">
                {Array.from({ length: pkg.stars }).map((_, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-brandNavy text-yellow-300 grid place-items-center text-sm shadow-lg"
                  >
                    ★
                  </div>
                ))}
              </div>

              {/* Card */}
              <div className="flex flex-col h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200 overflow-hidden transition">
                <div className="bg-gradient-to-r from-brandOrange to-brandNavy text-white py-4 text-center font-semibold text-lg">
                  {pkg.name}
                </div>

                {/* Pricing */}
                <div className="text-center my-6">
                  <span className="text-4xl font-extrabold text-brandNavy">
                    ${isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                  </span>
                  <span className="text-gray-500 ml-2 text-lg">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                {/* Features */}
                <ul className="space-y-4 text-base flex-1 px-6">
                  {features.map((label, idx) => {
                    const isChecked = pkg.checks.includes(idx);
                    return (
                      <li
                        key={label}
                        className="flex items-center gap-3 text-gray-700"
                      >
                        <span
                          className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold ${
                            isChecked
                              ? 'bg-green-100 text-green-600'
                              : 'bg-red-100 text-red-500'
                          }`}
                        >
                          {isChecked ? '✔' : '✖'}
                        </span>
                        <span>{label}</span>
                      </li>
                    );
                  })}
                </ul>

                {/* Choose Plan Button */}
                <div className="mt-8 mb-6 text-center">
                  <button
                    onClick={() => {
                      const selectedAmount = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
                      dispatch(setAmount(selectedAmount));
                      dispatch(setMeta({ source: 'package', name: pkg.name, cadence: isYearly ? 'yearly' : 'monthly' }));
                      navigate('/payments');
                    }}
                    className="px-6 py-3 rounded-full bg-brandOrange text-white font-semibold shadow-md hover:bg-brandNavy transition-all"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Major Clients Section */}
      <div className="mt-20 mb-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-brandNavy mb-4">Our Major Clients</h3>
          <div className="w-24 h-1 bg-brandOrange mx-auto"></div>
        </div>
        
        <div className="clients-scroll-container">
          <div className="clients-scroll-content">
            {/* Client logos - duplicated for infinite scroll effect */}
            {[
              { name: 'Client 1', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26-removebg-preview.png' },
              { name: 'Client 2', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png' },
              { name: 'Client 3', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.25-removebg-preview.png' },
              { name: 'Client 4', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.27-removebg-preview.png' },
              { name: 'Client 5', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26-removebg-preview.png' },
              { name: 'Client 6', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png' },
              { name: 'Client 7', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.25-removebg-preview.png' },
              { name: 'Client 8', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.27-removebg-preview.png' },
              // Duplicate for seamless loop
              { name: 'Client 1', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26-removebg-preview.png' },
              { name: 'Client 2', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png' },
              { name: 'Client 3', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.25-removebg-preview.png' },     
              { name: 'Client 4', logo: '/image/clbg.jpeg' },
              { name: 'Client 6', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png' },
              { name: 'Client 7', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.25-removebg-preview.png' },
              { name: 'Client 8', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.27-removebg-preview.png' },
            ].map((client, index) => (
              <div key={index} className="client-logo-item">
                <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <div className="w-20 h-20 flex items-center justify-center mb-3">
                    <img 
                      src={client.logo} 
                      alt={client.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-700 text-center">{client.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <SectionFooter />
    </section>
  );
};

export default Packages;
