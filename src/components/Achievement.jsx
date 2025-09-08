import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaGlobe, FaProjectDiagram, FaTrophy, FaUsers } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export const Achievement = () => {
  const achievementsRef = useRef(null);

  const achievements = [
    { label: "Happy Clients", number: "500+", icon: <FaUsers /> },
    { label: "Awards Won", number: "25+", icon: <FaTrophy /> },
    { label: "Projects Completed", number: "300+", icon: <FaProjectDiagram /> },
    { label: "Countries Served", number: "15+", icon: <FaGlobe /> },
  ];

  useEffect(() => {
    // Animate cards (fade up with stagger)
    gsap.fromTo(
      ".achievement-card",
      { opacity: 0, y: 80, scale: 0.9 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: achievementsRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate counters
    achievements.forEach((_, i) => {
      const el = document.getElementById(`counter-${i}`);
      if (el) {
        const target = parseInt(el.dataset.target);
        const obj = { val: 0 };

        gsap.to(obj, {
          val: target,
          duration: 2,
          ease: "power1.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
          },
          onUpdate: () => {
            el.innerText = `${Math.floor(obj.val)}+`;
          },
        });
      }
    });
  }, []);

  return (
      <section ref={achievementsRef} className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center section-heading text-brandNavy">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center achievement-card">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-brandOrange">
                  <span className="text-3xl text-white">{achievement.icon}</span>
                </div>
                <div
                  id={`counter-${index}`}
                  data-target={achievement.number.replace(/\D/g, "")}
                  className="mb-2 text-3xl font-bold text-brandNavy"
                >
                  0+
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

  );
};
