import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Vision = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header animation
      gsap.from(".vision-header", {
        y: -50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // Target circles pulse
      gsap.to(".circle-pulse", {
        scale: 1.05,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "power1.inOut",
      });

      // Arrows fly in
      gsap.from(".arrow", {
        opacity: 0,
        scale: 0,
        rotation: -90,
        duration: 1,
        stagger: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: { trigger: ".target-graphic", start: "top 75%" },
      });

      // Vision/Mission/Values cards
      gsap.from(".vision-item", {
        x: -100,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        ease: "power3.out",
        scrollTrigger: { trigger: ".vision-item", start: "top 85%" },
      });

      // Background floating effect
      gsap.to(".network-pattern", {
        y: 40,
        repeat: -1,
        yoyo: true,
        duration: 8,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-white"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 network-pattern opacity-20"></div>

      <div className="container relative z-10 px-6 py-16 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="mb-16 vision-header">
            <div className="inline-block px-8 py-4 text-white rounded-full shadow-lg bg-navy">
              <h2 className="text-3xl font-bold">
                Vision, Mission, Core Values
              </h2>
            </div>
          </div>

          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* 🎯 Target Graphic */}
            <div className="relative flex justify-center target-graphic">
              <div className="relative">
                {/* Target Circles */}
                <div className="relative flex items-center justify-center border-8 rounded-full w-80 h-80 border-navy circle-pulse">
                  <div className="flex items-center justify-center border-8 rounded-full w-60 h-60 border-primary circle-pulse">
                    <div className="flex items-center justify-center w-40 h-40 rounded-full bg-primary circle-pulse">
                      <div className="w-20 h-20 rounded-full bg-navy"></div>
                    </div>
                  </div>

                  {/* Arrows */}
                  <div className="absolute flex items-center justify-center w-16 h-16 transform -translate-x-1/2 rounded-full -top-8 left-1/2 bg-primary arrow">
                    <svg
                      className="w-8 h-8 text-white transform rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="absolute flex items-center justify-center w-16 h-16 transform -translate-y-1/2 rounded-full top-1/2 -right-8 bg-primary arrow">
                    <svg
                      className="w-8 h-8 text-white transform -rotate-90"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>

                  <div className="absolute flex items-center justify-center w-16 h-16 rounded-full -bottom-8 right-1/4 bg-primary arrow">
                    <svg
                      className="w-8 h-8 text-white transform rotate-45"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* 📌 Content */}
            <div className="space-y-12">
              {/* Vision */}
              <div className="flex items-start space-x-6 vision-item">
                <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 transition-transform duration-300 rounded-full bg-navy hover:scale-110">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 mx-auto mb-1 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-bold text-white">Vision</span>
                  </div>
                </div>
                <p className="relative mt-4 text-lg leading-relaxed text-gray-700">
                  Provide quality services with our innovation and creativity
                </p>
              </div>

              {/* Mission */}
              <div className="flex items-start space-x-6 vision-item">
                <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 transition-transform duration-300 rounded-full bg-navy hover:scale-110">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 mx-auto mb-1 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-bold text-white">
                      Mission
                    </span>
                  </div>
                </div>
                <p className="relative mt-4 text-lg leading-relaxed text-gray-700">
                  To Become The largest Content marketing hub in Somalia and
                  Horn of Africa
                </p>
              </div>

              {/* Values */}
              <div className="flex items-start space-x-6 vision-item">
                <div className="flex items-center justify-center flex-shrink-0 w-24 h-24 transition-transform duration-300 rounded-full bg-navy hover:scale-110">
                  <div className="text-center">
                    <svg
                      className="w-8 h-8 mx-auto mb-1 text-primary"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm font-bold text-white">Values</span>
                  </div>
                </div>
                <p className="relative mt-4 text-lg leading-relaxed text-gray-700 ">
                  Creativity, Customer Support, Reputation, Quality
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
