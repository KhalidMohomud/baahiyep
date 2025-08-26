import React, { useState } from 'react';
import SectionFooter from './SectionFooter';
import { useDispatch } from 'react-redux';
import { setAmount, setMeta } from '../store/paymentSlice';
import { useNavigate } from 'react-router-dom';

const WebDesign = () => {
  const [isYearly, setIsYearly] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const packages = [
    {
      name: 'NORMAL',
      monthlyPrice: 49,
      yearlyPrice: 499,
      features: [
        'Hosting &Domain 1 year',
        'Responsive Web',
        'Branding Design',
        'Contact Form',
        'Free SSL',
        'Unlimited Page',
        '10 poster Design',
      ],
      stars: 1,
    },
    {
      name: 'E-commerce',
      monthlyPrice: 99,
      yearlyPrice: 999,
      features: [
        'Hosting &Domain 1 year',
        'Responsive Web',
        'Payments Exc Pluse',
        'Contact Form & Free SSL',
        'Unlimited Page',
        'Unlimited Products',
        'Social media & Seo',
      ],
      stars: 2,
    },
  ];

  return (
    <section className="relative py-16 overflow-visible bg-white">
      {/* subtle network background */}
      <div className="absolute inset-0 pointer-events-none network-pattern opacity-20"></div>

      {/* top-right orange icon bubble */}
      <div className="absolute hidden w-16 h-16 text-white rounded-full top-4 right-4 bg-brandOrange md:grid place-items-center shadow-3xl">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd" />
          <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
        </svg>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Heading bubble */}
        <div className="mb-6 text-center md:mb-10">
          <div className="inline-block px-6 py-3 text-2xl font-extrabold text-white heading-bubble md:text-4xl">
            Web design & Web hosting
          </div>
        </div>
        <p className="max-w-4xl mx-auto mb-10 text-base leading-relaxed text-center text-gray-700 md:mb-16 md:text-lg">
          Web design and web hosting are important elements in your business. We specialize in creating
          stunning websites and that are tailored to meet your unique needs.
        </p>

        {/* Toggle buttons */}
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
        <div className="grid w-full max-w-5xl gap-10 mx-auto md:grid-cols-2">
          {packages.map((pkg) => (
            <div key={pkg.name} className="relative">
              {/* Decorative stars */}
              <div className="absolute flex gap-1 -translate-x-1/2 -top-7 left-1/2">
                {Array.from({ length: pkg.stars }).map((_, i) => (
                  <div key={i} className="grid text-sm text-yellow-300 rounded-full w-7 h-7 bg-brandNavy place-items-center shadow-3xl">★</div>
                ))}
              </div>

              <div className="package-card">
                <div className="ribbon">
                  {Array.from({ length: pkg.stars }).map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                  {pkg.name}
                </div>

                <div className="title-bar">Web Design Packages</div>

                {/* Pricing */}
                <div className="my-4 text-2xl font-bold text-center text-brandNavy">
                  ${isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                  <span className="text-sm text-gray-500"> /{isYearly ? 'year' : 'month'}</span>
                </div>

                <ul className="space-y-4 text-lg">
                  {pkg.features.map((feature) => (
                    <li key={feature}><span className="icon-circle check">✔</span> {feature}</li>
                  ))}
                </ul>

                {/* Choose Plan Button */}
                {/* <div className="mt-6 text-center">
                  <button className="px-6 py-2 font-semibold text-white transition rounded-full shadow-lg bg-brandOrange hover:bg-orange-600">
                    Choose Plan
                  </button>
                </div> */}

                {/* 🔥 Upgraded Choose Plan Button */}
    <div className="mt-6 text-center">
      <button
        onClick={() => {
          const selectedAmount = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
          dispatch(setAmount(selectedAmount));
          dispatch(setMeta({ source: 'web_design', name: pkg.name, cadence: isYearly ? 'yearly' : 'monthly' }));
          navigate('/payments');
        }}
        className="px-12 py-2 text-lg font-semibold text-white transition duration-300 rounded-full shadow-md w-80 bg-gradient-to-r from-brandOrange to-orange-500 hover:shadow-lg hover:scale-105"
      >
        Choose Plan
      </button>
    </div>

                <div className="circle"><div className="circle-inner"></div></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionFooter />
    </section>
  );
};

export default WebDesign;
