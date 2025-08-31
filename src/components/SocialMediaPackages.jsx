import React, { useState } from 'react';
import SectionFooter from './SectionFooter';
import { useDispatch } from 'react-redux';
import { setAmount, setMeta } from '../store/paymentSlice';
import { useNavigate } from 'react-router-dom';

const SocialMediaPackages = () => {
  const [isYearly, setIsYearly] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
    <section className="relative py-20 overflow-visible bg-gradient-to-b from-white via-gray-50 to-white">
      {/* background */}
      <div className="absolute inset-0 pointer-events-none network-pattern opacity-10"></div>

      {/* Decorative icon bubble */}
      <div className="absolute hidden w-16 h-16 text-white rounded-full shadow-lg top-4 right-4 bg-brandOrange md:grid place-items-center">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M3 10l9-5v10L3 10zm10 6h4a4 4 0 004-4V8a1 1 0 10-2 0v4a2 2 0 01-2 2h-4v2z" />
        </svg>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Toggle Button */}
      

        {/* Heading */}
        <div className="mb-6 text-center md:mb-10">
          <h2 className="inline-block px-6 py-3 text-2xl font-extrabold text-white rounded-full shadow-lg bg-brandOrange md:text-4xl">
            Social Media Packages
          </h2>
        </div>
        <p className="max-w-5xl mx-auto mb-10 text-base leading-relaxed text-center text-gray-600 md:mb-16 md:text-lg">
          Get the very best <span className="font-bold text-brandOrange">Social Media Packages</span> specifically suited to your budget.
          Each package includes the perfect balance of strategy, creative design, management, advertising, and reporting.
        </p>
        <div className="flex justify-center mb-10">
          <div className="flex p-1 bg-gray-200 rounded-full shadow-inner">
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
              className="relative transition transform group hover:-translate-y-2"
            >
              {/* Stars above card */}
              <div className="absolute flex gap-1 -translate-x-1/2 -top-7 left-1/2">
                {Array.from({ length: pkg.stars }).map((_, i) => (
                  <div
                    key={i}
                    className="grid text-sm text-yellow-300 rounded-full shadow-lg w-7 h-7 bg-brandNavy place-items-center"
                  >
                    ★
                  </div>
                ))}
              </div>

              {/* Card */}
              <div className="flex flex-col h-full overflow-hidden transition bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-2xl">
                {/* Card header */}
                <div className="py-4 text-lg font-semibold text-center text-white bg-gradient-to-r from-brandOrange to-brandNavy">
                  {pkg.name}
                </div>

                {/* Pricing */}
                <div className="my-6 text-center">
                  <span className="text-4xl font-extrabold text-brandNavy">
                    ${isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                  </span>
                  <span className="ml-2 text-lg text-gray-500">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex-1 px-6 space-y-4 text-base">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-gray-700">
                      <span className="flex items-center justify-center w-6 h-6 text-sm font-bold text-green-600 bg-green-100 rounded-full">
                        ✔
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Choose Plan Button */}
                <div className="mt-8 mb-6 text-center">
                  <button
                    onClick={() => {
                      const selectedAmount = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
                      dispatch(setAmount(selectedAmount));
                      dispatch(setMeta({ source: 'social_media', name: pkg.name, cadence: isYearly ? 'yearly' : 'monthly' }));
                      navigate('/payments');
                    }}
                    className="px-6 py-3 font-semibold text-white transition-all rounded-full shadow-md bg-brandOrange hover:bg-brandNavy"
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* <SectionFooter /> */}
    </section>
  );
};

export default SocialMediaPackages;
