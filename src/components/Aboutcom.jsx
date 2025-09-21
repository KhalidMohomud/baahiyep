import  { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Aboutcom = () => {
  const aboutRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate logo
      gsap.fromTo(
        ".about-logo",
        { scale: 0.5, opacity: 0, rotation: -30 },
        {
          scale: 1,
          opacity: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: aboutRef.current,
            start: "top 80%",
          },
        }
      );

      // Floating effect for logo
      gsap.to(".about-logo", {
        y: -15,
        repeat: -1,
        yoyo: true,
        duration: 3,
        ease: "sine.inOut",
      });

      // Animate text
      gsap.from(".about-text > *", {
        x: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".about-text",
          start: "top 85%",
        },
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={aboutRef}
      className="relative px-6 py-16 mx-auto max-w-7xl"
    >
      <div className="grid items-center gap-10 md:grid-cols-2">
        {/* Logo with animation */}
        <div className="flex items-center justify-center">
          <div className="relative flex items-center justify-center w-72 h-72 md:w-80 md:h-80">
            <img
              src="/image/Bahiye.png" 
              alt="Baahiye Advertising Logo"
              className="object-contain w-96 h-96 about-logo drop-shadow-lg"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-6 text-gray-600 dark:text-gray-300 about-text">
  <h2 className="text-3xl font-extrabold leading-snug text-brandNavy dark:text-dark-text">
    About <span className="text-brandOrange">Baahiye</span>
  </h2>

  <p className="text-lg leading-relaxed">
    <span className="font-semibold text-brandNavy">
      Baahiye Advertising Agency
    </span>{" "}
    is one of the most innovative digital service providers in Somalia.
    Founded in <span className="font-semibold">2022</span>, we deliver a wide
    range of creative solutions. As the first{" "}
    <span className="italic">one-stop digital creative agency</span> in Somalia,
    we provide marketing, design, web development, and video production services
    under one roof.
  </p>

  <div className="p-4 border-l-4 rounded-xl bg-brandOrange/10 border-brandOrange">
    <p className="text-base leading-relaxed">
      Our mission is to <span className="font-semibold">exceed expectations</span> 
      and craft solutions that align with our clients’ goals while elevating
      their brand presence. We help businesses embrace{" "}
      <span className="font-semibold text-brandNavy dark:text-dark-text">digital transformation</span> 
      and unlock new opportunities with creativity and efficiency.
    </p>
  </div>
</div>

      </div>
    </section>
  );
};

export default Aboutcom;
