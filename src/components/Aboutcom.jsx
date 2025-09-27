import { useEffect, useRef } from "react";
import gsap from "gsap";
import { HiCheckCircle } from "react-icons/hi"; // ✅ Better-looking checkbox icon
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

      // Floating effect
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
    <section ref={aboutRef} className="relative px-6 py-16 mx-auto max-w-7xl">
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
            <span className="font-semibold text-brandNavy dark:text-dark-text">
              Baahiye Advertising Agency
            </span>{" "}
            – where creativity meets technology! Since{" "}
            <span className="font-semibold">2021</span>, we have been empowering
            businesses in Somalia with complete digital and printing solutions.
            As the country’s first{" "}
            <span className="italic">one-stop digital creative agency</span>, we
            proudly offer:
          </p>

          <ul className="space-y-3">
            <li className="flex items-start">
              <HiCheckCircle className="w-5 h-5 mt-1 mr-2 text-brandOrange" />
              <span>Marketing & Social Media Management</span>
            </li>
            <li className="flex items-start">
              <HiCheckCircle className="w-5 h-5 mt-1 mr-2 text-brandOrange" />
              <span>Graphic Design & Branding</span>
            </li>
            <li className="flex items-start">
              <HiCheckCircle className="w-5 h-5 mt-1 mr-2 text-brandOrange" />
              <span>Web Development</span>
            </li>
            <li className="flex items-start">
              <HiCheckCircle className="w-5 h-5 mt-1 mr-2 text-brandOrange" />
              <span>Video Production & Motion Graphics</span>
            </li>
            <li className="flex items-start">
              <HiCheckCircle className="w-5 h-5 mt-1 mr-2 text-brandOrange" />
              <span>
               Printing Services – business cards,posters, books, menus, <br />
                 and all kinds of professional print materials
               </span>

            </li>
          </ul>

          <div className="p-4 border-l-4 rounded-xl bg-brandOrange/10 border-brandOrange">
            <p className="text-base leading-relaxed">
              Our mission is clear: to help Somali businesses{" "}
              <span className="font-semibold">grow</span>,{" "}
              <span className="font-semibold">stand out</span>, and achieve{" "}
              <span className="font-semibold">lasting success</span> through
              creativity, technology, and high-quality services. We work to
              exceed expectations and deliver solutions that align with our
              clients’ goals while embracing{" "}
              <span className="font-semibold text-brandNavy dark:text-dark-text">
                digital transformation
              </span>{" "}
              and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutcom;
