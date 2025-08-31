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
      icon: <FaPalette className="text-7xl text-pink-400" />,
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
      icon: <FaChartLine className="text-7xl text-blue-400" />,
      bgGradient: "from-blue-900 via-blue-800 to-cyan-600",
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
      bgGradient: "from-emerald-900 via-emerald-800 to-green-600",
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
      icon: <FaRocket className="text-7xl text-purple-400" />,
      bgGradient: "from-purple-900 via-purple-800 to-pink-600",
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
      icon: <FaUsers className="text-7xl text-indigo-400" />,
      bgGradient: "from-indigo-900 via-indigo-800 to-blue-600",
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
      className={`relative py-24 overflow-hidden text-white bg-gradient-to-br ${heroSlides[currentSlide].bgGradient} transition-all duration-1000 ease-in-out`}
    >
      {/* Enhanced Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-white/10 rounded-full blur-2xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl animate-pulse delay-500"></div>
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-white/5 rounded-full blur-lg animate-pulse delay-1500"></div>
      </div>

      {/* Enhanced Left Navigation Arrow */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-white/90 transition-all duration-300 hover:scale-125 group"
        aria-label="Previous slide"
      >
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
          <FaArrowLeft className="w-6 h-6" />
        </div>
      </button>

      {/* Enhanced Right Navigation Arrow */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-white/90 transition-all duration-300 hover:scale-125 group"
        aria-label="Next slide"
      >
        <div className="p-4 bg-white/20 backdrop-blur-md rounded-full border border-white/30 group-hover:bg-white/30 transition-all duration-300 shadow-lg">
          <FaArrowRight className="w-6 h-6" />
        </div>
      </button>

      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 relative z-10">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Column - Enhanced Text Content */}
          <div className="hero-slide">
            {/* Enhanced Icon Display */}
            <div className="mb-8 text-center lg:text-left">
              <div className="inline-block p-6 mb-6 bg-white/20 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl hover:scale-110 transition-all duration-500 group">
                <div className="group-hover:rotate-12 transition-transform duration-500">
                  {heroSlides[currentSlide].icon}
                </div>
              </div>
            </div>

            {/* Enhanced Subtitle */}
            <div className="mb-6 text-center lg:text-left">
              <span className={`inline-block px-6 py-3 bg-gradient-to-r ${heroSlides[currentSlide].accentColor} text-white text-sm font-semibold rounded-full shadow-xl backdrop-blur-sm`}>
                {heroSlides[currentSlide].subtitle}
              </span>
            </div>

            {/* Enhanced Main Title */}
            <h1 className="mb-8 text-5xl font-bold md:text-6xl lg:text-7xl text-center lg:text-left leading-tight tracking-tight">
              {heroSlides[currentSlide].title}
            </h1>

            {/* Enhanced Description */}
            <p className="mb-10 text-lg md:text-xl leading-relaxed text-white/95 text-center lg:text-left max-w-2xl">
              {heroSlides[currentSlide].description}
            </p>
            
            {/* Enhanced Feature Tags */}
            <div className="flex flex-wrap gap-3 mb-12 justify-center lg:justify-start">
              {heroSlides[currentSlide].features.map((feature, index) => (
                <span
                  key={index}
                  className="px-5 py-3 bg-white/20 backdrop-blur-md rounded-full text-white border border-white/30 text-sm font-medium hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg group cursor-pointer"
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
                className="group relative px-12 py-6 text-lg font-semibold transition-all duration-500 bg-gradient-to-r from-white/30 to-white/20 backdrop-blur-md rounded-3xl text-white border border-white/40 hover:from-white/40 hover:to-white/30 hover:scale-105 transform duration-300 hover:shadow-2xl overflow-hidden shadow-xl"
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
              {/* Enhanced Large Circular Background */}
              <div className="w-[400px] h-[400px] md:w-[450px] md:h-[450px] rounded-full border-2 border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center shadow-2xl relative overflow-hidden group">
                {/* Enhanced Animated Background Pattern */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent animate-spin-slow"></div>
                
                {/* Enhanced Content Blocks Inside Circle */}
                <div className="text-center space-y-8 relative z-10">
                  {/* Enhanced Top Block */}
                  <div className="bg-white/25 backdrop-blur-md rounded-3xl p-6 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                    <div className="mb-3 text-white group-hover:scale-110 transition-transform duration-500">
                      {heroSlides[currentSlide].graphicIcon}
                    </div>
                    <div className="text-white font-bold text-lg">{heroSlides[currentSlide].graphic}</div>
                  </div>
                  
                  {/* Enhanced Bottom Blocks Row */}
                  <div className="flex space-x-6">
                    <div className="bg-white/25 backdrop-blur-md rounded-3xl p-4 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                      <FaCode className="text-3xl text-white" />
                    </div>
                    <div className="bg-white/25 backdrop-blur-md rounded-3xl p-4 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                      <FaShieldAlt className="text-3xl text-white" />
                    </div>
                    <div className="bg-white/25 backdrop-blur-md rounded-3xl p-4 border border-white/40 shadow-2xl hover:scale-110 transition-all duration-500 group-hover:shadow-white/20">
                      <FaLightbulb className="text-3xl text-white" />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Floating Elements */}
              <div className="absolute -top-6 -right-6 w-12 h-12 bg-gradient-to-r from-pink-400 to-purple-500 rounded-full animate-pulse floating-element shadow-xl"></div>
              <div className="absolute -bottom-6 -left-6 w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-full animate-pulse floating-element delay-1000 shadow-xl"></div>
              <div className="absolute top-1/2 -left-8 w-8 h-8 bg-gradient-to-r from-emerald-400 to-green-500 rounded-full animate-pulse floating-element delay-500 shadow-xl"></div>
              
              {/* Enhanced Decorative Elements */}
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

        {/* Enhanced Slide Counter */}
        <div className="text-center mt-8 text-white/90">
          <span className="inline-block bg-white/20 backdrop-blur-md px-6 py-3 rounded-full border border-white/30 shadow-xl">
            <span className="text-sm font-medium">
              {currentSlide + 1} / {heroSlides.length}
            </span>
          </span>
        </div>
      </div>

      {/* Enhanced custom CSS for slow spin animation */}
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
