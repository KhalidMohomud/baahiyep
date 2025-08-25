import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Homehero() {
  const heroRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    // Animate hero graphic
    gsap.fromTo(
      '.hero-graphic',
      { opacity: 0, scale: 0.5, rotation: -180 },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: 1.5,
        delay: 0.5,
        ease: 'back.out(1.7)',
      }
    );

    // ScrollTrigger to pause the video when scrolling starts
    ScrollTrigger.create({
      trigger: heroRef.current,
      start: 'top top',
      end: 'bottom top',
      onUpdate: (self) => {
        if (self.direction === 1 && videoRef.current && !videoRef.current.paused) {
          videoRef.current.pause();
        }
      },
    });

    // Optional: Clean up on unmount
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative py-20 overflow-hidden text-white bg-gradient-to-r from-brandOrange via-brandOrange to-brandNavy"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1 className="mb-6 text-5xl font-bold hero-title md:text-6xl">
              Event Branding
            </h1>
            <p className="mb-8 text-xl leading-relaxed hero-description text-white/90">
              We specialize in event branding, consulting, digital strategy,
              social media management, content writing, and comprehensive
              digital marketing solutions that drive results.
            </p>
            <button className="px-8 py-4 text-lg font-semibold transition-colors bg-white rounded-lg hero-button cta-button text-brandNavy hover:bg-white/90">
              See More
            </button>
          </div>

          <div className="flex justify-center">
            <div className="relative overflow-hidden bg-black shadow-2xl rounded-3xl ring-8 ring-white/20 hero-graphic">
              <video
                ref={videoRef}
                src="/video/vhome.mp4"
                autoPlay
                playsInline
                controls
                className="object-cover w-[350px] h-[350px] sm:w-[420px] sm:h-[420px] rounded-3xl transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute inset-0 rounded-3xl pointer-events-none animate-pulse border-[6px] border-white/10"></div>
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {[1, 2, 3, 4, 5].map((dot) => (
            <div key={dot} className="w-3 h-3 bg-white rounded-full nav-dot"></div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Homehero;
