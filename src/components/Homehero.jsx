import { useRef, useEffect, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import { 
  FaRocket, FaUsers, FaLightbulb, FaChartLine, FaCode, FaPalette, FaGlobe, FaShieldAlt,
  FaStar, FaAward, FaGem, FaCrown, FaMagic
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
      icon: <FaPalette className="text-7xl text-gradient-to-r from-pink-400 to-purple-600" />,
      bgGradient: "from-red-800 via-red-700 to-brandOrange",
      graphic: "Graphic Design & Branding",
      graphicIcon: <FaPalette className="text-5xl" />,
      features: ["Logo Design", "UI/UX", "Brand Identity", "Event Branding"],
      accentColor: "from-pink-400 to-purple-600",
      serviceId: "graphic-design"
    },
    {
      title: "Digital Marketing",
      subtitle: "Strategic Growth",
      description: "We offer complete digital marketing services, including social media marketing strategy, social media analytics, branding, content writing and social media management. The strategy team understands business cases and how to align digital marketing activities to ensure they deliver on your objectives.",
      icon: <FaChartLine className="text-7xl text-gradient-to-r from-blue-400 to-cyan-500" />,
      bgGradient: "from-blue-900 via-blue-800 to-cyan-700",
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
      icon: <FaGlobe className="text-7xl text-gradient-to-r from-green-400 to-emerald-500" />,
      bgGradient: "from-green-900 via-green-800 to-emerald-700",
      graphic: "Web Solutions",
      graphicIcon: <FaGlobe className="text-5xl" />,
      features: ["Web Design", "Hosting", "Domains", "SSL Security"],
      accentColor: "from-green-400 to-emerald-500",
      serviceId: "web-solutions"
    },
    {
      title: "Project Innovation",
      subtitle: "Future Technology",
      description: "Our project stands at the forefront of digital innovation, combining cutting-edge technology with creative design solutions. We've built a comprehensive platform that revolutionizes how businesses approach their digital presence and marketing strategies.",
      icon: <FaRocket className="text-7xl text-gradient-to-r from-purple-400 to-pink-500" />,
      bgGradient: "from-purple-900 via-purple-800 to-pink-700",
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
      icon: <FaUsers className="text-7xl text-gradient-to-r from-indigo-400 to-blue-500" />,
      bgGradient: "from-indigo-900 via-indigo-800 to-blue-700",
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
    // Animate hero content with enhanced effects
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

    // Animate floating elements
    gsap.to('.floating-element', {
      y: -20,
      duration: 2,
      ease: 'power2.inOut',
      yoyo: true,
      repeat: -1,
    });

    // Auto-advance slideshow
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    // Optional: Clean up on unmount
    return () => {
      clearInterval(interval);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className={`relative py-20 overflow-hidden text-white bg-gradient-to-r ${heroSlides[currentSlide].bgGradient} transition-all duration-1000`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/5 rounded-full blur-lg animate-pulse delay-500"></div>
      </div>

      {/* Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-white/90 transition-all duration-300 hover:scale-125 group"
      >
        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </div>
      </button>

      {/* Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-white/90 transition-all duration-300 hover:scale-125 group"
      >
        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </button>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Text Content */}
          <div className="hero-slide">
            {/* Enhanced Icon Display */}
            <div className="mb-8 text-center lg:text-left">
              <div className="inline-block p-6 mb-6 bg-white/20 backdrop-blur-sm rounded-2xl border border-white/30 shadow-2xl hover:scale-110 transition-all duration-500 group">
                <div className="group-hover:rotate-12 transition-transform duration-500">
                  {heroSlides[currentSlide].icon}
                </div>
              </div>
            </div>

            {/* Subtitle */}
            <div className="mb-4 text-center lg:text-left">
              <span className={`inline-block px-4 py-2 bg-gradient-to-r ${heroSlides[currentSlide].accentColor} text-white text-sm font-semibold rounded-full shadow-lg`}>
                {heroSlides[currentSlide].subtitle}
              </span>
            </div>

            {/* Main Title */}
            <h1 className="mb-6 text-6xl font-bold md:text-7xl text-center lg:text-left leading-tight">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Description */}
            <p className="mb-8 text-xl leading-relaxed text-white/95 text-center lg:text-left max-w-2xl">
              {heroSlides[currentSlide].description}
            </p>
            
            {/* Enhanced Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-10 justify-center lg:justify-start">
              {heroSlides[currentSlide].features.map((feature, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/30 text-sm font-medium hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg group cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <FaStar className="text-yellow-300 group-hover:rotate-180 transition-transform duration-500" />
                    {feature}
                  </span>
                </span>
              ))}
            </div>
            
            {/* Enhanced CTA Button */}
            <div className="text-center lg:text-left">
              <button 
                onClick={() => handleSeeMore(heroSlides[currentSlide].serviceId)}
                className="group relative px-10 py-5 text-lg font-semibold transition-all duration-500 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-sm rounded-2xl text-white border border-white/40 hover:from-white/40 hover:to-white/30 hover:scale-105 transform duration-300 hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  See More Details
                  <FaStar className="text-yellow-300 group-hover:rotate-180 transition-transform duration-500" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>

          {/* Right Column - Enhanced Graphic Element */}
          <div className="flex justify-center">
            <div className="relative">
              {/* Large Circular Background with Enhanced Effects */}
              <div className="w-[450px] h-[450px] rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-sm flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-spin-slow"></div>
                
                {/* Content Blocks Inside Circle */}
                <div className="text-center space-y-8 relative z-10">
                  {/* Top Block */}
                  <div className="bg-white/25 backdrop-blur-md rounded-2xl p-6 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                    <div className="mb-3 text-white group-hover:scale-110 transition-transform duration-500">
                      {heroSlides[currentSlide].graphicIcon}
                    </div>
                    <div className="text-white font-bold text-lg">{heroSlides[currentSlide].graphic}</div>
                  </div>
                  
                  {/* Bottom Blocks Row */}
                  <div className="flex space-x-6">
                    <div className="bg-white/25 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                      <FaCode className="text-3xl text-white" />
                    </div>
                    <div className="bg-white/25 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                      <FaShieldAlt className="text-3xl text-white" />
                    </div>
                    <div className="bg-white/25 backdrop-blur-md rounded-2xl p-4 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                      <FaLightbulb className="text-3xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-600 rounded-full animate-pulse floating-element shadow-lg"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse floating-element delay-1000 shadow-lg"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full animate-pulse floating-element delay-500 shadow-lg"></div>
              
              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 text-white/20">
                <FaCrown className="text-4xl animate-bounce" />
              </div>
              <div className="absolute bottom-0 left-0 text-white/20">
                <FaGem className="text-4xl animate-bounce delay-1000" />
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Navigation Dots */}
        <div className="flex justify-center mt-16 space-x-4">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-5 h-5 rounded-full nav-dot transition-all duration-500 ${
                index === currentSlide 
                  ? 'bg-white scale-150 shadow-2xl shadow-white/50' 
                  : 'bg-white/50 hover:bg-white/70 hover:scale-125'
              }`}
            />
          ))}
        </div>

        {/* Enhanced Slide Counter */}
        <div className="text-center mt-8 text-white/90">
          <span className="inline-block bg-white/20 backdrop-blur-sm px-6 py-3 rounded-full border border-white/30 shadow-lg">
            <span className="text-sm font-medium">
              {currentSlide + 1} / {heroSlides.length}
            </span>
          </span>
        </div>
      </div>

      {/* Add custom CSS for slow spin animation */}
      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
}

export default Homehero;
