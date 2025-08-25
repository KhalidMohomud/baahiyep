import { useEffect, useRef } from 'react';
import SectionFooter from './SectionFooter';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Aboutcomp = () => {
  const videoRef = useRef(null);
  const heroRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    const triggerElement = heroRef.current;

    if (!video || !triggerElement) return;

    ScrollTrigger.create({
      trigger: triggerElement,
      start: 'top 80%',   // when 80% of the trigger hits top of viewport
      end: 'bottom top',  // until it's scrolled out
      onEnter: () => {
        video.play().catch((e) => {
          console.warn('Autoplay failed:', e);
        });
      },
      onLeave: () => {
        video.pause();
      },
      onEnterBack: () => {
        video.play().catch((e) => {
          console.warn('Autoplay failed:', e);
        });
      },
      onLeaveBack: () => {
        video.pause();
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section className="relative py-16 overflow-visible bg-white">
      {/* subtle network background */}
      <div className="absolute inset-0 pointer-events-none network-pattern opacity-20"></div>

      {/* top-right orange icon bubble */}
      <div className="absolute hidden w-16 h-16 text-white rounded-full top-4 right-4 bg-brandOrange md:grid place-items-center shadow-3xl">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a5 5 0 015 5v1a5 5 0 11-10 0V7a5 5 0 015-5zm-7 18a7 7 0 0114 0v1H5v-1z" />
        </svg>
      </div>

      <div className="relative px-6 mx-auto max-w-7xl">
        {/* Heading bubble */}
        <div className="mb-6 text-center md:mb-10">
          <div className="inline-block px-6 py-3 text-2xl font-extrabold text-white heading-bubble md:text-4xl">
            About Us
          </div>
        </div>

        {/* Content */}
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <div className="space-y-6 text-base leading-relaxed text-gray-700 md:text-lg">
            <p>
              <span className="font-bold text-primary">Baahiye Digital Marketing</span> is a company that provides creative and digital services.
            </p>
            <p>
              We merge your brand with new creative designs and provide web designing and hosting solutions. Our creative digital marketing hub is made up of a team of innovators who understand the influence of digital media on brand and business growth.
            </p>
            <p>
              We pride ourselves on the ability to blend innovation and efficiency to produce first-rate services for our clients. Your business goals are the driving force behind ours.
            </p>
            <p>
              We always aim to exceed and deliver results based on our clients' marketing objectives while enhancing their overall brands.
            </p>
          </div>

          {/* Video Section */}
          <div className="relative h-64 md:h-80" ref={heroRef}>
            <div className="absolute w-24 h-24 rounded-full -top-6 -left-6 bg-brandOrange opacity-90 shadow-3xl"></div>
            <div className="absolute w-24 h-24 rounded-full -bottom-6 -right-6 bg-brandOrange opacity-90 shadow-3xl"></div>
            <div className="absolute inset-0 border-8 rounded-3xl border-brandNavy">
              <video
                ref={videoRef}
                src="/video/adv.mp4"
                playsInline
                controls
                className="object-cover w-full h-full rounded-3xl"
              />
            </div>
          </div>
        </div>
      </div>

      <SectionFooter />
    </section>
  );
};

export default Aboutcomp;
