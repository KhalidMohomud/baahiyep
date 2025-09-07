import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { 
  FaLightbulb, FaChartLine, FaCode, FaPalette, FaGlobe, FaShieldAlt,
 FaStar,  FaGem, FaCrown, 
 FaPrint,
 FaCalendarAlt,
 FaVideo
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

function Homehero() {
  const heroRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const navigate = useNavigate();

  const heroSlides = [
    {
      title: "Graphic Design",
      subtitle: "Creative Excellence",
      description:
        "Our graphic design services cover logo design, UI/UX, brand identity, and more. We create visually stunning and memorable designs that elevate your brand.",
      icon: <FaPalette className="text-pink-400 text-7xl" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      graphic: "Graphic Design & Branding",
      graphicIcon: <FaPalette className="text-5xl" />,
      features: ["Logo Design", "UI/UX", "Brand Identity", "Print & Digital"],
      accentColor: "from-pink-400 to-purple-600",
      serviceId: "graphic-design",
    },
    {
      title: "Digital Marketing",
      subtitle: "Strategic Growth",
      description:
        "We provide comprehensive digital marketing services including social media strategy, SEO, content marketing, and analytics to drive measurable growth.",
      icon: <FaChartLine className="text-blue-400 text-7xl" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      graphic: "Digital Marketing",
      graphicIcon: <FaChartLine className="text-5xl" />,
      features: ["Social Media", "SEO", "Content Strategy", "Analytics"],
      accentColor: "from-blue-400 to-cyan-500",
      serviceId: "digital-marketing",
    },
    {
      title: "Web Design",
      subtitle: "Digital Excellence",
      description:
        "We design and develop responsive, user-friendly websites that look great on any device and help convert visitors into customers.",
      icon: <FaGlobe className="text-7xl text-emerald-400" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      graphic: "Web Design",
      graphicIcon: <FaGlobe className="text-5xl" />,
      features: ["Responsive Design", "E-commerce", "SEO Optimized", "CMS Integration"],
      accentColor: "from-green-400 to-emerald-500",
      serviceId: "web-design",
    },
    {
      title: "Video Production",
      subtitle: "Visual Storytelling",
      description:
        "From concept to final cut, we produce high-quality videos that engage your audience and tell your brand’s story effectively.",
      icon: <FaVideo className="text-red-500 text-7xl" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      graphic: "Video Production",
      graphicIcon: <FaVideo className="text-5xl" />,
      features: ["Scriptwriting", "Filming", "Editing", "Motion Graphics"],
      accentColor: "from-red-400 to-yellow-500",
      serviceId: "video-production",
    },
    {
      title: "Event Branding",
      subtitle: "Memorable Experiences",
      description:
        "We create cohesive event branding including signage, collateral, and digital assets that make your event stand out and leave a lasting impression.",
      icon: <FaCalendarAlt className="text-purple-500 text-7xl" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      graphic: "Event Branding",
      graphicIcon: <FaCalendarAlt className="text-5xl" />,
      features: ["Event Logos", "Signage", "Digital Assets", "Print Collateral"],
      accentColor: "from-purple-400 to-pink-500",
      serviceId: "event-branding",
    },
    {
      title: "Print Services",
      subtitle: "Tangible Quality",
      description:
        "Our print services cover everything from business cards to brochures, ensuring your brand looks professional in every physical format.",
      icon: <FaPrint className="text-indigo-500 text-7xl" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      graphic: "Print Services",
      graphicIcon: <FaPrint className="text-5xl" />,
      features: ["Business Cards", "Brochures", "Posters", "Custom Prints"],
      accentColor: "from-indigo-400 to-blue-500",
      serviceId: "print-services",
    },
  ];
  

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  // const prevSlide = () => {
  //   setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  // };

  const handleSeeMore = (serviceId) => {
    navigate(`/service/${serviceId}`);
  };

  useEffect(() => {
    // Enhanced hero content animations
    gsap.fromTo(
      '.hero-slide',
      { opacity: 0, x: 100, scale: 0.9 },
      {
        opacity: 1,
        x: 0,
        scale: 1,
        duration: 1.2,
        ease: 'power3.out',
      }
    );

    // Enhanced floating elements with better timing
    gsap.to('.floating-element', {
      y: -20,
      duration: 2.5,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Auto-advance slideshow
    const interval = setInterval(() => {
      nextSlide();
    }, 7000);

    return () => {
      clearInterval(interval);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
  <section
  ref={heroRef}
  className={`relative py-6 px-4 sm:py-10 sm:px-6 overflow-hidden text-white bg-gradient-to-br ${heroSlides[currentSlide].bgGradient} transition-all duration-1000 ease-in-out`}
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-24 h-24 rounded-full top-16 left-10 bg-white/10 blur-2xl animate-pulse sm:w-32 sm:h-32 sm:top-20 sm:left-20"></div>
    <div className="absolute w-32 h-32 delay-1000 rounded-full bottom-16 right-10 bg-white/10 blur-2xl animate-pulse sm:w-40 sm:h-40 sm:bottom-20 sm:right-20"></div>
    <div className="absolute w-20 h-20 delay-500 rounded-full top-1/2 left-1/4 bg-white/10 blur-xl animate-pulse sm:w-24 sm:h-24"></div>
    <div className="absolute w-12 h-12 rounded-full top-1/3 right-1/3 bg-white/5 blur-lg animate-pulse delay-1500 sm:w-16 sm:h-16"></div>
  </div>

  <div className="relative z-10 px-2 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
      {/* Left Column */}
      <div className="relative ml-0 mr-0 sm:ml-7 hero-slide">
        {/* Subtitle */}
        {/* <div className="mb-4 text-left lg:text-left sm:text-left ">
          <span className={`inline-block px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r ${heroSlides[currentSlide].accentColor} text-white text-xs sm:text-sm font-semibold rounded-full shadow-xl backdrop-blur-sm`}>
            {heroSlides[currentSlide].subtitle}
          </span>
        </div> */}

        {/* Title */}
        <h1 className="mb-6 text-2xl font-bold leading-tight tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl lg:text-left">
          {heroSlides[currentSlide].title}
        </h1>

        {/* Description */}
        <p className="max-w-2xl mb-8 text-base leading-relaxed text-center sm:text-xl md:text-xl lg:text-left text-white/95">
          {heroSlides[currentSlide].description}
        </p>

        {/* CTA Button */}
        <div className="text-center lg:text-left">
          <button
            onClick={() => handleSeeMore(heroSlides[currentSlide].serviceId)}
            className="relative px-5 py-3 text-base font-semibold text-white transition-all duration-300 transform border shadow-xl sm:px-12 sm:py-6 sm:text-lg group bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-3xl border-white/40 hover:from-white/40 hover:to-white/30 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center justify-center gap-2 sm:gap-3">
              See More Details
              <FaStar className="text-yellow-300 transition-transform duration-500 group-hover:rotate-180" />
            </span>
            <div className="absolute inset-0 transition-transform duration-700 transform -translate-x-full -skew-x-12 bg-gradient-to-r from-white/20 to-transparent group-hover:translate-x-full"></div>
          </button>
        </div>
      </div>

      {/* Right Column - Circle Graphic */}
      <div className="flex justify-center">
        <div className="relative">
          <div className="w-56 h-56 sm:w-72 sm:h-72 md:w-[450px] md:h-[450px] rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-spin-slow"></div>

            <div className="relative z-10 space-y-6 text-center sm:space-y-8">
              <div className="p-3 transition-all duration-500 border shadow-2xl sm:p-6 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                <div className="mb-2 text-white transition-transform duration-500 sm:mb-3 group-hover:scale-110">
                  {heroSlides[currentSlide].graphicIcon}
                </div>
                <div className="text-sm font-bold text-white sm:text-lg">
                  {heroSlides[currentSlide].graphic}
                </div>
              </div>

              <div className="flex justify-center space-x-3 sm:space-x-6">
                <div className="p-2 transition-all duration-500 border shadow-2xl sm:p-4 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                  <FaCode className="text-lg text-white sm:text-3xl" />
                </div>
                <div className="p-2 transition-all duration-500 border shadow-2xl sm:p-4 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                  <FaShieldAlt className="text-lg text-white sm:text-3xl" />
                </div>
                <div className="p-2 transition-all duration-500 border shadow-2xl sm:p-4 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                  <FaLightbulb className="text-lg text-white sm:text-3xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          {/* <div className="absolute w-10 h-10 rounded-full shadow-xl -top-5 -right-5 sm:w-12 sm:h-12 bg-gradient-to-r from-pink-400 to-purple-500 animate-pulse floating-element"></div>
          <div className="absolute w-8 h-8 delay-1000 rounded-full shadow-xl -bottom-5 -left-5 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse floating-element"></div>
          <div className="absolute w-6 h-6 delay-500 rounded-full shadow-xl top-1/2 -left-6 sm:w-8 sm:h-8 bg-gradient-to-r from-emerald-400 to-green-500 animate-pulse floating-element"></div> */}

          {/* Decorative Icons */}
          <div className="absolute top-0 right-0 text-white/20">
            <FaCrown className="text-2xl sm:text-4xl animate-bounce" />
          </div>
          <div className="absolute bottom-0 left-0 text-white/20">
            <FaGem className="text-2xl delay-1000 sm:text-4xl animate-bounce" />
          </div>
        </div>
      </div>
    </div>

    {/* Navigation Dots */}
    <div className="flex justify-center mt-10 space-x-4 sm:mt-20">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full nav-dot transition-all duration-500 ${
            index === currentSlide
              ? 'bg-white scale-125 sm:scale-150 shadow-2xl shadow-white/50'
              : 'bg-white/50 hover:bg-white/70 hover:scale-110 sm:hover:scale-125'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  </div>

  {/* Custom CSS for slow spin animation */}
  <style jsx>{`
    @keyframes spin-slow {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animate-spin-slow {
      animation: spin-slow 25s linear infinite;
    }
  `}</style>
</section>

  );
}

export default Homehero;
