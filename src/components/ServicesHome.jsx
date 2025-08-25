import gsap from 'gsap';
import React, { useRef } from 'react'

import { FaPaintBrush, FaBullhorn, FaGlobe, FaFilm, FaRegLightbulb } from "react-icons/fa";
import { MdEvent } from 'react-icons/md';


const ServicesHome = () => {

  const services = [
    { name: "Graphic Design", icon: <FaPaintBrush /> },
    { name: "Digital Marketing", icon: <FaBullhorn /> },
    { name: "Web Solutions", icon: <FaGlobe /> },
    { name: "Motion Graphics", icon: <FaFilm /> },
    { name: "Event Branding", icon: <MdEvent /> },
    { name: "Digital Consulting", icon: <FaRegLightbulb /> },
  ];

      const servicesRef = useRef(null);

        gsap.fromTo(".service-card", 
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );
  return (
     <section ref={servicesRef} className="py-20 bg-lightGray">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center section-heading text-brandNavy">Our Services</h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div key={service.name} className="text-center service-card">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-brandOrange">
                  <span className="text-3xl text-white">{service.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-brandNavy">{service.name}</h3>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            {/* <button className="px-8 py-4 text-lg font-semibold text-white transition-colors rounded-lg cta-button bg-brandOrange hover:bg-brandNavy">
              VIEW MORE
            </button> */}
          </div>
        </div>
      </section>
  )
}

export default ServicesHome