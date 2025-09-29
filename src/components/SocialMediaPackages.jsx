import { useDispatch } from 'react-redux';
import { setAmount, setMeta } from '../store/paymentSlice';
import { useNavigate } from 'react-router-dom';

const SocialMediaPackages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const packages = [
    {
      name: 'Kaabe',
      price: 130,
      features: [
        { label: 'Ads management', included: true },
        { label: 'Management Platforms', included: true },
        { label: 'Contact creation', included: true },
        { label: '15 Posters Design', included: true },
        { label: '2 footage video', included: true },
        { label: '2 products video', included: true },
        { label: 'Monthly Report', included: true },
        { label: 'Promotions Pay as you go', included: true },
        { label: 'Marketing Plan and Strategy', included: false },
      ],
    },
    {
      name: 'Tabsan',
      price: 210,
      features: [
        { label: 'Ads management', included: true },
        { label: 'Management Platforms', included: true },
        { label: 'Contact creation', included: true },
        { label: '30 Posters Design', included: true },
        { label: '4 footage video', included: true },
        { label: '5 products video', included: true },
        { label: 'Monthly Report', included: true },
        { label: 'Promotions Pay as you go', included: true },
        { label: 'Marketing Plan and Strategy', included: true },
      ],
    },
    {
      name: 'Kudhan',
      price: 300,
      features: [
        { label: 'Ads management', included: true },
        { label: 'Management Platforms', included: true },
        { label: 'Contact creation', included: true },
        { label: '50 Posters Design', included: true },
        { label: '6 footage video', included: true },
        { label: '10 products video', included: true },
        { label: 'Monthly Report', included: true },
        { label: 'Promotions Pay as you go', included: true },
        { label: 'Marketing Plan and Strategy', included: true },
      ],
    },
  ];

  return (
    <section className="relative py-20 overflow-visible transition-colors duration-300 bg-gradient-to-b from-white via-gray-50 to-white dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg">
      <div className="absolute inset-0 pointer-events-none network-pattern opacity-10"></div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Heading */}
        <div className="mb-6 text-center md:mb-10">
          <h2 className="inline-block px-6 py-3 text-2xl font-extrabold text-white rounded-full shadow-lg bg-brandOrange md:text-4xl">
            Social Media Packages
          </h2>
        </div>
        <p className="max-w-5xl mx-auto mb-10 text-base leading-relaxed text-center text-gray-600 dark:text-gray-300 md:mb-16 md:text-lg">
          Get the very best <span className="font-bold text-brandOrange">Social Media Packages</span> specifically suited to your budget.
          Each package includes the perfect balance of strategy, creative design, management, advertising, and reporting.
        </p>

        {/* Packages */}
        <div className="grid w-full gap-10 md:grid-cols-3">
          {packages.map((pkg) => {
            return (
              <div
                key={pkg.name}
                className="relative transition transform group hover:-translate-y-2"
              >
                {/* Card */}
                <div className="flex flex-col h-full overflow-hidden transition bg-white border border-gray-200 shadow-lg dark:bg-dark-card dark:border-gray-600 rounded-2xl hover:shadow-2xl hover:bg-mini-kit-gradient">
                  {/* Header */}
                  <div className="py-4 text-lg font-semibold text-center text-white bg-gradient-to-r from-brandOrange to-brandNavy">
                    {pkg.name}
                  </div>

                  {/* Pricing */}
                  <div className="my-6 text-center">
                    <span className="text-4xl font-extrabold text-brandNavy dark:text-dark-text">
                      ${pkg.price}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="flex-1 px-6 space-y-4 text-base">
                    {pkg.features.map((f, idx) => (
                      <li
                        key={idx}
                        className={`flex items-center gap-3 ${
                          f.included ? 'text-gray-700 dark:text-gray-300' : 'text-gray-400 dark:text-gray-500 line-through'
                        }`}
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

                  {/* Button */}
                  <div className="mt-8 mb-6 text-center">
                    <button
                      onClick={() => {
                        dispatch(setAmount(pkg.price));
                        dispatch(setMeta({ source: 'social_media', name: pkg.name, basePrice: pkg.price }));
                        navigate('/payments');
                      }}
                      className="px-6 py-3 font-semibold text-white transition-all rounded-full shadow-md bg-brandOrange hover:bg-brandNavy"
                    >
                      Choose Plan
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialMediaPackages;
