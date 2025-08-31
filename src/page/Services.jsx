import  { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import { useNavigate } from 'react-router-dom'

import SectionFooter from '../components/SectionFooter'
import { FaRocket, FaPalette, FaCode, FaBullhorn, FaChartLine, FaMobile, FaSearch, FaUsers, FaLightbulb, FaCog } from 'react-icons/fa'
import Packages from '../components/Packages'
import WebDesign from '../components/WebDesign'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

const Services = () => {
  const heroRef = useRef(null)
  const servicesRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const serviceCardsRef = useRef(null)
  const featureCardsRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    // Hero section animations
    const heroTl = gsap.timeline()
    
    heroTl
      .fromTo(titleRef.current, 
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
      )
      .fromTo(subtitleRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(heroRef.current.querySelectorAll('.hero-element'),
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "back.out(1.7)" },
        "-=0.3"
      )

    // Services section animations
    gsap.fromTo(serviceCardsRef.current.children,
      { y: 100, opacity: 0, scale: 0.8 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Features section animations
    gsap.fromTo(featureCardsRef.current.children,
      { x: -100, opacity: 0, rotation: -15 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1,
        stagger: 0.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: featuresRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // CTA section animation
    gsap.fromTo(ctaRef.current,
      { scale: 0.8, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ctaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Floating animation for service cards
    gsap.to(serviceCardsRef.current.children, {
      y: -20,
      duration: 2,
      ease: "power2.inOut",
      stagger: 0.1,
      yoyo: true,
      repeat: -1
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  const handleCardHover = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1.05,
      y: -10,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const handleCardLeave = (e) => {
    gsap.to(e.currentTarget, {
      scale: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out"
    })
  }

  const services = [
    {
      icon: <FaRocket className="text-4xl text-brandOrange" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive conversions.",
      features: ["SEO Optimization", "Social Media Marketing", "Content Marketing", "PPC Campaigns"],
      serviceId: 'digital-marketing'
    },
    {
      icon: <FaPalette className="text-4xl text-brandOrange" />,
      title: "Brand Design",
      description: "Creative brand identity design that makes your business stand out from the competition.",
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Marketing Materials"],
      serviceId: 'graphic-design'
    },
    {
      icon: <FaCode className="text-4xl text-brandOrange" />,
      title: "Web Development",
      description: "Custom web solutions built with modern technologies and best practices.",
      features: ["Responsive Design", "E-commerce Solutions", "Custom Applications", "Performance Optimization"],
      serviceId: 'web-solutions'
    },
    {
      icon: <FaBullhorn className="text-4xl text-brandOrange" />,
      title: "Content Creation",
      description: "Engaging content that tells your story and connects with your audience.",
      features: ["Blog Writing", "Video Production", "Infographics", "Social Media Content"],
      serviceId: 'digital-marketing'
    },
    {
      icon: <FaChartLine className="text-4xl text-brandOrange" />,
      title: "Analytics & Insights",
      description: "Data-driven insights to optimize your marketing strategies and improve ROI.",
      features: ["Performance Tracking", "Conversion Analysis", "A/B Testing", "ROI Optimization"],
      serviceId: 'digital-marketing'
    },
    {
      icon: <FaMobile className="text-4xl text-brandOrange" />,
      title: "Mobile Marketing",
      description: "Mobile-first marketing strategies to reach your audience wherever they are.",
      features: ["App Marketing", "Mobile SEO", "SMS Campaigns", "Location-Based Marketing"],
      serviceId: 'digital-marketing'
    }
  ]

  const features = [
    {
      icon: <FaSearch className="text-3xl text-brandOrange" />,
      title: "Data-Driven Approach",
      description: "Every strategy is backed by comprehensive data analysis and market research."
    },
    {
      icon: <FaUsers className="text-3xl text-brandOrange" />,
      title: "Expert Team",
      description: "Our experienced professionals bring years of industry expertise to every project."
    },
    {
      icon: <FaLightbulb className="text-3xl text-brandOrange" />,
      title: "Innovative Solutions",
      description: "We stay ahead of trends to deliver cutting-edge solutions for your business."
    },
    {
      icon: <FaCog className="text-3xl text-brandOrange" />,
      title: "Custom Strategies",
      description: "Tailored approaches designed specifically for your business goals and target audience."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      
      {/* Hero Section */}
      <div ref={heroRef} className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brandOrange/10 to-brandNavy/10"></div>
        <div className="relative px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h1 
            ref={titleRef}
            className="mb-6 text-5xl font-bold text-gray-900 md:text-7xl hero-element"
          >
            Our
            <span className="block text-brandOrange">Services</span>
          </h1>
          <p 
            ref={subtitleRef}
            className="max-w-4xl mx-auto mb-12 text-xl text-gray-600 md:text-2xl hero-element"
          >
            Transform your business with our comprehensive digital solutions
          </p>
          <div className="flex flex-wrap justify-center gap-4 hero-element">
            <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform rounded-full shadow-lg bg-brandOrange hover:bg-brandNavy hover:scale-105 hover:shadow-xl">
              Get Started
            </button>
            <button className="px-8 py-4 text-lg font-semibold transition-all duration-300 transform border-2 rounded-full border-brandOrange text-brandOrange hover:bg-brandOrange hover:text-white hover:scale-105">
              View Portfolio
            </button>
          </div>
        </div>
        
        {/* Floating elements */}
        <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-brandOrange/20 blur-xl hero-element"></div>
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-brandNavy/20 blur-xl hero-element"></div>
        <div className="absolute w-16 h-16 rounded-full bottom-20 left-1/4 bg-brandOrange/30 blur-lg hero-element"></div>
      </div>

      {/* Services Section */}
      <div ref={servicesRef} className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              What We Offer
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              From digital marketing to web development, we provide end-to-end solutions to help your business thrive in the digital age.
            </p>
          </div>
          
          <div 
            ref={serviceCardsRef}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service, index) => (
              <div
                key={index}
                className="p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg cursor-pointer group rounded-2xl hover:shadow-2xl"
                onMouseEnter={handleCardHover}
                onMouseLeave={handleCardLeave}
              >
                <div className="mb-6 text-center">
                  <div className="inline-flex items-center justify-center w-20 h-20 mb-4 transition-transform duration-300 rounded-full bg-gradient-to-br from-brandOrange/10 to-brandNavy/10 group-hover:scale-110">
                    {service.icon}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900">{service.title}</h3>
                  <p className="leading-relaxed text-gray-600">{service.description}</p>
                </div>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 mr-3 rounded-full bg-brandOrange"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="mt-6 text-center">
                  <button 
                    onClick={() => navigate(`/service/${service.serviceId}`)}
                    className="px-6 py-3 font-semibold text-white transition-all duration-300 transform rounded-full bg-gradient-to-r from-brandOrange to-brandNavy hover:from-brandNavy hover:to-brandOrange hover:scale-105"
                  >
                    See more
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

       <Packages/>
       <WebDesign/>

      {/* Features Section */}
      <div ref={featuresRef} className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
              Why Choose Us
            </h2>
            <p className="max-w-3xl mx-auto text-xl text-gray-600">
              We combine creativity, technology, and strategy to deliver exceptional results for our clients.
            </p>
          </div>
          
          <div 
            ref={featureCardsRef}
            className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4"
          >
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 transition-transform duration-300 rounded-full bg-gradient-to-br from-brandOrange to-brandNavy group-hover:scale-110">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      {/* <section ref={ctaRef} className="py-20 bg-gradient-to-r from-brandOrange to-brandNavy">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white md:text-5xl">
            Ready to Transform Your Business?
          </h2>
          <p className="max-w-2xl mx-auto mb-8 text-xl text-white/90">
            Let's discuss how we can help you achieve your digital goals and take your business to the next level.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-4 text-lg font-semibold transition-all duration-300 transform bg-white rounded-full shadow-lg text-brandOrange hover:bg-gray-100 hover:scale-105">
              Get Free Consultation
            </button>
            <button className="px-8 py-4 text-lg font-semibold text-white transition-all duration-300 transform border-2 border-white rounded-full hover:bg-white hover:text-brandOrange hover:scale-105">
              View Our Work
            </button>
          </div>
        </div>
      </section> */}

      <SectionFooter />
      
    </div>
  )
}

export default Services