import React from 'react';
import { useDispatch } from 'react-redux';
import { setAmount, setMeta } from '../store/paymentSlice';
import { useNavigate } from 'react-router-dom';

const data = [
  {
    name: 'Kaaliye',
    stars: 1,
    price: 120,
    features: [
      { label: 'Logo option 2', included: true },
      { label: 'Business Card & id', included: true },
      { label: 'Letter Head & Envelope', included: true },
      { label: 'Finance Document', included: true },
      { label: 'Profile Book', included: false },
      { label: 'Banners', included: false },
      { label: 'Brochure/flyer', included: false },
      { label: 'Social Media Setup', included: false },
      { label: 'Marketing Plan and Strategy', included: false },
      { label: 'Brand Consult 1h', included: false },
      { label: '5 poster design and cover', included: false },
      { label: '1 intro video', included: false },
    ],
  },
  {
    name: 'Kaabe',
    stars: 2,
    price: 200,
    features: [
      { label: 'Logo option 3', included: true },
      { label: 'Business Card & id', included: true },
      { label: 'Letter Head & Envelope', included: true },
      { label: 'Finance Document', included: true },
      { label: 'Profile Book', included: true },
      { label: 'Banners', included: true },
      { label: 'Brochure/flyer', included: true },
      { label: 'Social Media Setup', included: false },
      { label: 'Marketing Plan and Strategy', included: false },
      { label: 'Brand Consult 2h', included: false },
      { label: '5 poster design and cover', included: false },
      { label: '1 intro video', included: false },
    ],
  },
  {
    name: 'Kudhan',
    stars: 3,
    price: 350,
    features: [
      { label: 'Logo option 3', included: true },
      { label: 'Business Card & id', included: true },
      { label: 'Letter Head & Envelope', included: true },
      { label: 'Finance Document', included: true },
      { label: 'Profile Book', included: true },
      { label: 'Banners', included: true },
      { label: 'Brochure/flyer', included: true },
      { label: 'Social Media Setup', included: true },
      { label: 'Marketing Plan and Strategy', included: true },
      { label: 'Brand Consult 3h', included: true },
      { label: '5 poster design and cover', included: true },
      { label: '1 intro video', included: true },
    ],
  },
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
                  {pkg.features.map((f, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <span
                        className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold ${
                          f.included
                            ? 'bg-green-100 text-green-600'
                            : 'bg-red-100 text-red-500'
                        }`}
                      >
                        {f.included ? '✔' : '✖'}
                      </span>
                      <span>{f.label}</span>
                    </li>
                  ))}
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
    </div>
  );
};

export default Packages;
