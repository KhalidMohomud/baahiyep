import gsap from 'gsap';
import { useEffect, useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setAmount, setMeta } from '../store/paymentSlice';
import { useNavigate } from 'react-router-dom';
function WebHostingPackages() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

    const hostingPackages = [
    {
      name: 'Basic',
      monthlyPrice: 3.99,
      yearlyPrice: 39.99,
      features: ['Linux Hosting', 'WordPress', 'SSD Storage', 'Bandwidth', 'Databases', 'Email Accounts', 'SSL Certificate', 'Support & Server Monitoring'],
      save: 'Save 15%'
    },
    {
      name: 'Enterprise',
      monthlyPrice: 9.99,
      yearlyPrice: 99.99,
      features: ['Linux Hosting', 'WordPress', 'SSD Storage', 'Bandwidth', 'Databases', 'Email Accounts', 'SSL Certificate', 'Support & Server Monitoring'],
      save: 'Save 20%'
    },
    {
      name: 'Startup',
      monthlyPrice: 6.99,
      yearlyPrice: 69.99,
      features: ['Linux Hosting', 'WordPress', 'SSD Storage', 'Bandwidth', 'Databases', 'Email Accounts', 'SSL Certificate', 'Support & Server Monitoring'],
      save: 'Save 18%'
    }
  ];

      const hostingRef = useRef(null);
        const [isYearly, setIsYearly] = useState(false);

        useEffect(()=>{
             gsap.fromTo(".toggle-container", 
      { opacity: 0, scale: 0.8 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.6,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: hostingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

     gsap.fromTo(".hosting-card", 
      { opacity: 0, y: 100, scale: 0.9 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: hostingRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

        },[])

 
  return (
    <div>
           <section ref={hostingRef} className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center section-heading text-brandNavy">Web Hosting Packages</h2>
          
          {/* Toggle */}
          <div className="flex justify-center mb-12 toggle-container">
            <div className="flex p-1 bg-gray-200 rounded-full shadow-inner">
              <button
                onClick={() => setIsYearly(false)}
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  !isYearly ? 'bg-brandOrange text-white shadow-md' : 'text-brandNavy hover:text-brandOrange'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={`px-8 py-3 rounded-full font-semibold transition ${
                  isYearly ? 'bg-brandOrange text-white shadow-md' : 'text-brandNavy hover:text-brandOrange'
                }`}
              >
                Yearly
              </button>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {hostingPackages.map((pkg) => (
              <div key={pkg.name} className="relative p-8 transition-shadow bg-white border border-gray-200 shadow-lg hosting-card rounded-2xl hover:shadow-xl">
                <div className="absolute px-3 py-1 text-sm font-semibold text-white rounded-full top-4 right-4 bg-brandOrange">
                  {pkg.save}
                </div>
                
                <h3 className="mb-6 text-2xl font-bold text-brandNavy">{pkg.name}</h3>
                
                <div className="mb-8 text-center">
                  <span className="text-5xl font-bold text-brandNavy">
                    ${isYearly ? pkg.yearlyPrice : pkg.monthlyPrice}
                  </span>
                  <span className="ml-2 text-lg text-gray-600">
                    /{isYearly ? 'year' : 'month'}
                  </span>
                </div>

                <ul className="mb-8 space-y-4">
                  {pkg.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-brandNavy">
                      <span className="text-xl text-green-600">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    const selectedAmount = isYearly ? pkg.yearlyPrice : pkg.monthlyPrice;
                    dispatch(setAmount(selectedAmount));
                    dispatch(setMeta({ source: 'web_hosting', name: pkg.name, cadence: isYearly ? 'yearly' : 'monthly' }));
                    navigate('/payments');
                  }}
                  className="w-full py-4 text-lg font-semibold text-white transition-colors rounded-lg bg-brandOrange hover:bg-brandNavy"
                >
                  Choose Plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default WebHostingPackages