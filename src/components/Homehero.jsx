import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { 
  FaRocket, FaUsers, FaLightbulb, FaChartLine, FaCode, FaPalette, FaGlobe, FaShieldAlt,
  FaStar, FaAward, FaGem, FaCrown, FaMagic, FaArrowRight, FaArrowLeft
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
      description: "We offer range of graphic design services encompasses logo design, UI design, event branding, and brand identity. With our expertise, we create captivating and memorable brands that resonate with the public, leaving a lasting impression.",
      icon: <FaPalette className="text-pink-400 text-7xl" />,
      bgGradient: "from-red-900 via-red-800 to-orange-600",
      graphic: "Graphic Design & Branding",
      graphicIcon: <FaPalette className="text-5xl" />,
      features: ["Logo Design", "UI/UX", "Brand Identity", "Event Branding"],
      accentColor: "from-pink-400 to-purple-500",
      serviceId: "graphic-design"
    },
    {
      title: "Digital Marketing",
      subtitle: "Strategic Growth",
      description: "We offer complete digital marketing services, including social media marketing strategy, social media analytics, branding, content writing and social media management. The strategy team understands business cases and how to align digital marketing activities to ensure they deliver on your objectives.",
      icon: <FaChartLine className="text-blue-400 text-7xl" />,
      // bgGradient: "from-blue-900 via-blue-800 to-cyan-600",
       bgGradient: "from-red-900 via-red-800 to-orange-600",
      graphic: "Digital Marketing",
      graphicIcon: <FaChartLine className="text-5xl" />,
      features: ["Social Media", "Analytics", "Content Strategy", "SEO"],
      accentColor: "from-blue-400 to-cyan-500",
      serviceId: "digital-marketing"
    },
    {
      title: "Web Solutions",
      subtitle: "Digital Excellence",
      description: "We offer complete web services, including web design, domain registration, domain transfer, SSL certificates, and web hosting. We create responsive websites that look wonderful on any device, including smartphones, tablets, and desktop computers.",
      icon: <FaGlobe className="text-7xl text-emerald-400" />,
     // bgGradient: "from-emerald-900 via-emerald-800 to-green-600",
        bgGradient: "from-red-900 via-red-800 to-orange-600", 
     graphic: "Web Solutions",
      graphicIcon: <FaGlobe className="text-5xl" />,
      features: ["Web Design", "Hosting", "Domains", "SSL Security"],
      accentColor: "from-emerald-400 to-green-500",
      serviceId: "web-solutions"
    },
    {
      title: "Project Innovation",
      subtitle: "Future Technology",
      description: "Our project stands at the forefront of digital innovation, combining cutting-edge technology with creative design solutions. We've built a comprehensive platform that revolutionizes how businesses approach their digital presence and marketing strategies.",
      icon: <FaRocket className="text-purple-400 text-7xl" />,
       bgGradient: "from-red-900 via-red-800 to-orange-600",
      //bgGradient: "from-purple-900 via-purple-800 to-pink-600",
      graphic: "Innovation Hub",
      graphicIcon: <FaLightbulb className="text-5xl" />,
      features: ["AI-Powered", "Real-time Analytics", "Smart Automation", "Future-Ready"],
      accentColor: "from-purple-400 to-pink-500",
      serviceId: "project-innovation"
    },
    {
      title: "Team Excellence",
      subtitle: "Expert Collaboration",
      description: "Our dedicated team of experts brings together years of experience in design, development, and digital strategy. We collaborate closely with clients to understand their unique needs and deliver solutions that exceed expectations.",
      icon: <FaUsers className="text-indigo-400 text-7xl" />,
       bgGradient: "from-red-900 via-red-800 to-orange-600",
      //bgGradient: "from-indigo-900 via-indigo-800 to-blue-600",
      graphic: "Expert Team",
      graphicIcon: <FaUsers className="text-5xl" />,
      features: ["Expert Designers", "Developers", "Strategists", "Support"],
      accentColor: "from-indigo-400 to-blue-500",
      serviceId: "team-excellence"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

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
  className={`relative py-2 px-3 overflow-hidden text-white bg-gradient-to-br ${heroSlides[currentSlide].bgGradient} transition-all duration-1000 ease-in-out`}
>
  {/* Animated Background Elements */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute w-32 h-32 rounded-full top-20 left-20 bg-white/10 blur-2xl animate-pulse"></div>
    <div className="absolute w-40 h-40 delay-1000 rounded-full bottom-20 right-20 bg-white/10 blur-2xl animate-pulse"></div>
    <div className="absolute w-24 h-24 delay-500 rounded-full top-1/2 left-1/4 bg-white/10 blur-xl animate-pulse"></div>
    <div className="absolute w-16 h-16 rounded-full top-1/3 right-1/3 bg-white/5 blur-lg animate-pulse delay-1500"></div>
  </div>

  {/* Navigation Arrows */}
  <button
    onClick={prevSlide}
    className="absolute z-10 text-white transition-all duration-300 transform -translate-y-1/2 left-6 top-1/2 hover:text-white/90 hover:scale-125 group"
    aria-label="Previous slide"
  >
    <div className="p-4 transition-all duration-300 border rounded-full shadow-lg bg-white/20 backdrop-blur-md border-white/30 group-hover:bg-white/30">
      <FaArrowLeft className="w-6 h-6" />
    </div>
  </button>

  <button
    onClick={nextSlide}
    className="absolute z-10 text-white transition-all duration-300 transform -translate-y-1/2 right-6 top-1/2 hover:text-white/90 hover:scale-125 group"
    aria-label="Next slide"
  >
    <div className="p-4 transition-all duration-300 border rounded-full shadow-lg bg-white/20 backdrop-blur-md border-white/30 group-hover:bg-white/30">
      <FaArrowRight className="w-6 h-6" />
    </div>
  </button>

  <div className="relative z-10 px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <div className="grid items-center gap-10 sm:gap-16 lg:grid-cols-2">
      {/* Left Column */}
      <div className="relative ml-3 mr-2 sm:ml-7 hero-slide">
        {/* Subtitle */}
        <div className="mb-4 text-center lg:text-left">
          <span className={`inline-block px-5 py-2 sm:px-6 sm:py-3 bg-gradient-to-r ${heroSlides[currentSlide].accentColor} text-white text-xs sm:text-sm font-semibold rounded-full shadow-xl backdrop-blur-sm`}>
            {heroSlides[currentSlide].subtitle}
          </span>
        </div>

        {/* Title */}
        <h1 className="mb-6 text-3xl font-bold leading-tight tracking-tight text-center sm:text-5xl md:text-6xl lg:text-7xl lg:text-left">
          {heroSlides[currentSlide].title}
        </h1>

        {/* Description */}
        <p className="max-w-2xl mb-8 text-lg leading-relaxed text-center sm:text-2xl md:text-xl text-white/95 lg:text-left">
          {heroSlides[currentSlide].description}
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-3 mb-10 lg:justify-start">
          {heroSlides[currentSlide].features.map((feature, index) => (
            <span
              key={index}
              className="px-4 py-2 text-xs font-medium text-white transition-all duration-300 border rounded-full shadow-lg cursor-pointer sm:px-5 sm:py-3 sm:text-sm bg-white/20 backdrop-blur-md border-white/30 hover:bg-white/30 hover:scale-110 group"
            >
              <span className="flex items-center gap-2">
                <FaStar className="text-yellow-300 transition-transform duration-500 group-hover:rotate-180" />
                {feature}
              </span>
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center lg:text-left">
          <button
            onClick={() => handleSeeMore(heroSlides[currentSlide].serviceId)}
            className="relative px-6 py-4 overflow-hidden text-base font-semibold text-white transition-all duration-300 transform border shadow-xl sm:px-12 sm:py-6 sm:text-lg group bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-3xl border-white/40 hover:from-white/40 hover:to-white/30 hover:scale-105 hover:shadow-2xl"
          >
            <span className="relative z-10 flex items-center gap-3">
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
          <div className="w-72 h-72 sm:w-[400px] sm:h-[400px] md:w-[450px] md:h-[450px] rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-spin-slow"></div>

            <div className="relative z-10 space-y-6 text-center sm:space-y-8">
              <div className="p-4 transition-all duration-500 border shadow-2xl sm:p-6 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                <div className="mb-2 text-white transition-transform duration-500 sm:mb-3 group-hover:scale-110">
                  {heroSlides[currentSlide].graphicIcon}
                </div>
                <div className="text-sm font-bold text-white sm:text-lg">{heroSlides[currentSlide].graphic}</div>
              </div>

              <div className="flex justify-center space-x-4 sm:space-x-6">
                <div className="p-3 transition-all duration-500 border shadow-2xl sm:p-4 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                  <FaCode className="text-xl text-white sm:text-3xl" />
                </div>
                <div className="p-3 transition-all duration-500 border shadow-2xl sm:p-4 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                  <FaShieldAlt className="text-xl text-white sm:text-3xl" />
                </div>
                <div className="p-3 transition-all duration-500 border shadow-2xl sm:p-4 bg-white/25 backdrop-blur-md rounded-3xl border-white/40 hover:scale-110 group-hover:shadow-white/20">
                  <FaLightbulb className="text-xl text-white sm:text-3xl" />
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute w-12 h-12 rounded-full shadow-xl -top-6 -right-6 bg-gradient-to-r from-pink-400 to-purple-500 animate-pulse floating-element"></div>
          <div className="absolute w-10 h-10 delay-1000 rounded-full shadow-xl -bottom-6 -left-6 bg-gradient-to-r from-blue-400 to-cyan-500 animate-pulse floating-element"></div>
          <div className="absolute w-8 h-8 delay-500 rounded-full shadow-xl top-1/2 -left-8 bg-gradient-to-r from-emerald-400 to-green-500 animate-pulse floating-element"></div>

          {/* Decorative Icons */}
          <div className="absolute top-0 right-0 text-white/20">
            <FaCrown className="text-3xl sm:text-4xl animate-bounce" />
          </div>
          <div className="absolute bottom-0 left-0 text-white/20">
            <FaGem className="text-3xl delay-1000 sm:text-4xl animate-bounce" />
          </div>
        </div>
      </div>
    </div>

    {/* Navigation Dots */}
    <div className="flex justify-center mt-20 space-x-4">
      {heroSlides.map((_, index) => (
        <button
          key={index}
          onClick={() => setCurrentSlide(index)}
          className={`w-4 h-4 rounded-full nav-dot transition-all duration-500 ${
            index === currentSlide
              ? 'bg-white scale-150 shadow-2xl shadow-white/50'
              : 'bg-white/50 hover:bg-white/70 hover:scale-125'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>

    {/* Slide Counter */}
    <div className="mt-8 text-center text-white/90">
      <span className="inline-block px-6 py-3 border rounded-full shadow-xl bg-white/20 backdrop-blur-md border-white/30">
        <span className="text-sm font-medium">
          {currentSlide + 1} / {heroSlides.length}
        </span>
      </span>
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
