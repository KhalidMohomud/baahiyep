
import { useDispatch } from 'react-redux';
import { setAmount, setMeta } from '../store/paymentSlice';
import { useNavigate } from 'react-router-dom';

const EventBrandingPackages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const packages = [
    {
      name: 'Kaahiye',
      price: 300,
      features: [
        { label: 'Event Symbol and Logo', included: true },
        { label: 'Event Materials', included: true },
        { label: 'Event Abstract/Concept Book', included: true },
        { label: 'SMM Kit (30 posters + 2 + cover design)', included: true },
        { label: 'Unlimited Event Photo Framing', included: true },
        { label: 'Digital Campaign/Event Plan', included: true },
        { label: '3+ Promo Videos', included: true },
        { label: 'Event Report Book', included: false },
        { label: 'Web Design', included: false },
      ],
    },
    {
      name: 'Kobciye',
      price: 760,
      features: [
        { label: 'Event Symbol and Logo', included: true },
        { label: 'Event Materials', included: true },
        { label: 'Event Abstract/Concept Book', included: true },
        { label: 'SMM Kit (60 posters + 4+ cover design)', included: true },
        { label: 'Unlimited Event Photo Framing', included: true },
        { label: 'Digital Campaign/Event Plan', included: true },
        { label: '5+ Promo Videos', included: true },
        { label: 'Event Report Book', included: true },
        { label: 'Web Design', included: false },
      ],
    },
    {
      name: 'Kulmiye',
      price: 1200,
      features: [
        { label: 'Event Symbol and Logo', included: true },
        { label: 'Event Materials', included: true },
        { label: 'Event Abstract/Concept Book', included: true },
        { label: 'Unlimited Posters and Covers', included: true },
        { label: 'Unlimited Event Photo Framing', included: true },
        { label: 'Digital Campaign/Event Plan', included: true },
        { label: '8+ Promo Videos', included: true },
        { label: 'Event Report Book', included: true },
        { label: 'Web Design', included: true },
      ],
    },
  ];

  return (
    <section className="relative py-20 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="absolute inset-0 pointer-events-none network-pattern opacity-10"></div>

      <div className="relative px-6 mx-auto max-w-7xl">
        <div className="mb-6 text-center md:mb-10">
          <h2 className="inline-block px-6 py-3 text-2xl font-extrabold text-white rounded-full shadow-lg bg-brandOrange md:text-4xl">
            Event Branding Packages
          </h2>
        </div>

        <p className="max-w-5xl mx-auto mb-10 text-base leading-relaxed text-center text-gray-600 md:mb-16 md:text-lg">
          Choose from our <span className="font-bold text-brandOrange">Event Branding Packages</span> to match your event’s goals and budget.
        </p>

        <div className="grid w-full gap-10 md:grid-cols-3">
          {packages.map((pkg) => (
            <div key={pkg.name} className="relative transition transform group hover:-translate-y-2">
              <div className="flex flex-col h-full overflow-hidden transition bg-white border border-gray-200 shadow-lg rounded-2xl hover:shadow-2xl">
                <div className="py-4 text-lg font-semibold text-center text-white bg-gradient-to-r from-brandOrange to-brandNavy">
                  {pkg.name}
                </div>

                <div className="my-6 text-center">
                  <span className="text-4xl font-extrabold text-brandNavy">${pkg.price}</span>
                </div>

                <ul className="flex-1 px-6 space-y-4 text-base">
                  {pkg.features.map((f, idx) => (
                    <li
                      key={idx}
                      className={`flex items-center gap-3 ${f.included ? 'text-gray-700' : 'text-gray-400 line-through'}`}
                    >
                      <span
                        className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold ${
                          f.included ? 'bg-green-100 text-green-600' : 'bg-red-100 text-red-500'
                        }`}
                      >
                        {f.included ? '✔' : '✖'}
                      </span>
                      <span>{f.label}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 mb-6 text-center">
                  <button
                    onClick={() => {
                      dispatch(setAmount(pkg.price));
                      dispatch(setMeta({ source: 'event_branding', name: pkg.name }));
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
    </section>
  );
};

export default EventBrandingPackages;
