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
    <div className="ml-2 mr-2 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <section ref={containerRef} className="px-4 mx-auto py-14 max-w-7xl">
        <h3 className="mb-16 text-3xl font-bold text-center text-black">
          Our Approaches
        </h3>

        {/* ✅ base = 2 cols (mobile), md = 3, lg = 5 */}
        <div className="grid max-w-6xl grid-cols-2 gap-8 mx-auto md:grid-cols-3 lg:grid-cols-5">
          {ITEMS.map((item, idx) => (
            <div
              key={item.title}
              className={`transition-all duration-700 transform ${
                visible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-6"
              }`}
              style={{ transitionDelay: `${idx * 100}ms` }}
            >
              <div className="grid-cols-2 p-6 hover:shadow-xl group">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-auto mx-auto transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Approaches;
