import { useEffect, useRef, useState } from "react";

const ITEMS = [
  { title: "Listen", src: "/image/Approaches/listen-01.png" },
  { title: "Present", src: "/image/Approaches/present-01.png" },
  { title: "Develop", src: "/image/Approaches/develop-01.png" },
  { title: "Feedback", src: "/image/Approaches/present-01 (1).png" },
  { title: "Deliver", src: "/image/Approaches/Deliver-01.png" },
];

function Approaches() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div className="relative mt-3">
      <section
        ref={containerRef}
        className="py-20 bg-slate-100 dark:bg-dark-surface transition-colors duration-300"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        
          <h2 className="mb-16 text-4xl font-bold text-center text-brandNavy dark:text-dark-text">
            Our Approaches
          </h2>

   

          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
            {ITEMS.map((item, idx) => (
              <div
                key={item.title}
                className={`text-center transition-all duration-700 transform cursor-pointer group hover:scale-105 hover:-translate-y-1 ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="hover:bg-orange-100 hover:rounded-xl">
                  <img
                    src={item.src}
                    alt={item.title}
                    className="w-full h-auto mx-auto"
                  />
                  {/* Optional: title like Services */}
                  {/* 
                  <h3 className="mt-3 text-lg font-semibold tracking-wide transition-colors duration-300 text-brandNavy group-hover:text-brandOrange">
                    {item.title}
                  </h3> 
                  */}
                </div>

                {/* underline animation */}
                <div className="w-0 h-0.5 bg-gradient-to-r from-brandOrange to-brandNavy mx-auto mt-2 group-hover:w-10 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Approaches;
