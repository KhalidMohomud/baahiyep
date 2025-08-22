import React, { useState } from 'react';
import SectionFooter from './SectionFooter';

const SocialMediaPackages = () => {
  const [isYearly, setIsYearly] = useState(false);

  const packages = [
    {
      name: 'Basic Package',
      features: [
        'Ads management',
        'Business Page Creation',
        '15 Posters Design',
        'Consulting',
        'Content Creation',
        '1 footage video',
        'Video Animation',
      ],
      stars: 1,
      monthlyPrice: 59,
      yearlyPrice: 590,
    },
    {
      name: 'Silver Package',
      features: [
        'Ads management',
        'Business Page Creation',
        '30 Posters Design',
        'Consulting',
        'Content Creation',
        '1 footage video',
        '1 Video Animation',
      ],
      stars: 2,
      monthlyPrice: 129,
      yearlyPrice: 1290,
    },
    {
      name: 'Gold Package',
      features: [
        'Ads management',
        'Business Page Creation',
        '45 Posters Design',
        'Consulting',
        'Content Creation',
        '2 footage video',
        '1 Video Animation',
      ],
      stars: 3,
      monthlyPrice: 199,
      yearlyPrice: 1990,
    },
  ];

  return (
    <section className="relative overflow-visible bg-gradient-to-b from-white via-gray-50 to-white py-20">
      {/* background */}
      <div className="absolute inset-0 network-pattern opacity-10 pointer-events-none"></div>

      {/* Decorative icon bubble */}
      <div className="absolute top-4 right-4 w-16 h-16 rounded-full bg-brandOrange text-white hidden md:grid place-items-center shadow-lg">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 10l9-5v10L3 10zm10 6h4a4 4 0 004-4V8a1 1 0 10-2 0v4a2 2 0 01-2 2h-4v2z" />
        </svg>
      </div>

      <div className="px-6 mx-auto max-w-7xl relative">
        {/* Toggle Button */}
      

        {/* Heading */}
        <div className="text-center mb-6 md:mb-10">
          <h2 className="inline-block px-6 py-3 rounded-full bg-brandOrange text-white text-2xl md:text-4xl font-extrabold shadow-lg">
            Social Media Packages
          </h2>
        </div>
        <p className="text-center text-gray-600 leading-relaxed max-w-5xl mx-auto mb-10 md:mb-16 text-base md:text-lg">
          Get the very best <span className="text-brandOrange font-bold">Social Media Packages</span> specifically suited to your budget.
          Each package includes the perfect balance of strategy, creative design, management, advertising, and reporting.
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
        {/* Package cards */}
        <div className="grid w-full gap-10 md:grid-cols-3">
          {packages.map((pkg) => (
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
                {/* Card header */}
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
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                      <span className="w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold bg-green-100 text-green-600">
                        ✔
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Choose Plan Button */}
                <div className="mt-8 mb-6 text-center">
                  <button className="px-6 py-3 rounded-full bg-brandOrange text-white font-semibold shadow-md hover:bg-brandNavy transition-all">
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionFooter />
    </section>
  );
};

export default SocialMediaPackages;
