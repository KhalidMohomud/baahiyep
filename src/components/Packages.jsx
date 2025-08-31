import React from 'react';
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
  { name: 'Basic Package', stars: 1, checks: [0, 1], price: 49 },
  { name: 'Silver Package', stars: 2, checks: [0, 1, 2], price: 91 },
  { name: 'Gold Package', stars: 3, checks: [0, 1, 2, 3, 4, 5, 6], price: 199 },
];

const Packages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="relative py-20 overflow-visible bg-gradient-to-b from-white via-gray-50 to-white">
      {/* background pattern */}
      <div className="absolute inset-0 pointer-events-none network-pattern opacity-10"></div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-6 text-center md:mb-10">
          <h2 className="inline-block px-6 py-3 text-2xl font-extrabold text-white rounded-full shadow-lg bg-brandOrange md:text-4xl">
            Branding Packages
          </h2>
        </div>
        <p className="max-w-5xl mx-auto mb-10 text-base leading-relaxed text-center text-gray-600 md:mb-16 md:text-lg">
          A <span className="font-bold text-brandOrange">Branding Package</span> is a set of digital and physical resources developed to
          establish a brand's image.
        </p>

        {/* Packages */}
        <div className="grid w-full gap-10 md:grid-cols-3">
          {data.map((pkg) => (
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
                <div className="py-4 text-lg font-semibold text-center text-white bg-gradient-to-r from-brandOrange to-brandNavy">
                  {pkg.name}
                </div>

                {/* Pricing */}
                <div className="my-6 text-center">
                  <span className="text-4xl font-extrabold text-brandNavy">
                    ${pkg.price}
                  </span>
                </div>

                {/* Features */}
                <ul className="flex-1 px-6 space-y-4 text-base">
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
                      dispatch(setAmount(pkg.price));
                      dispatch(setMeta({ source: 'package', name: pkg.name }));
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

      <SectionFooter />
    </div>
  );
};

export default Packages;
