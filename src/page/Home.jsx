import React, { useEffect, useState, useRef } from 'react'
import { FaPaintBrush, FaBullhorn, FaGlobe, FaFilm, FaRegLightbulb } from "react-icons/fa";
import { MdEvent } from "react-icons/md";
import SectionFooter from '../components/SectionFooter'
import Packages from '../components/Packages';
import { FaUsers, FaTrophy, FaProjectDiagram } from "react-icons/fa";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Testimonials from '../components/Testimonials';
// import DomainSearch from '../components/DomainSearch';
import Homehero from '../components/Homehero';
import SocialMediaPackages from '../components/SocialMediaPackages';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  
  // Refs for animations
  const heroRef = useRef(null);
  const servicesRef = useRef(null);
  const portfolioRef = useRef(null);

  const achievementsRef = useRef(null);
  const blogRef = useRef(null);
 

  const services = [
    { name: "Graphic Design", image: '/image/Graphic design-01.png' },
    { name: "Digital Marketing", image: '/image/digital marketing-01.png' },
    { name: "Web Design", image: '/image/web design-01.png'},
    { name: "Video Production", image: '/image/Video Production.png' },
    { name: "Event Branding", image: '/image/evanty  barnding branding-01.png' },
    { name: "Print Services", image: '/image/Printing Services.png' },
  ];

  const achievements = [
    { label: "Happy Clients", number: "500+", icon: <FaUsers /> },
    { label: "Awards Won", number: "25+", icon: <FaTrophy /> },
    { label: "Projects Completed", number: "300+", icon: <FaProjectDiagram /> },
    { label: "Countries Served", number: "15+", icon: <FaGlobe /> },
  ];

  const portfolioItems = [
    { 
      category: 'Graphic Design & Branding', 
      image: '/image/WhatsApp_Image_2025-08-22_at_14.23.25-removebg-preview.png',
      progress: '80%'
    },
    { 
      category: 'Event Branding', 
      image: '/image/WhatsApp_Image_2025-08-22_at_14.23.26-removebg-preview.png',
      progress: '90%'
    },
    { 
      category: 'Digital Marketing', 
      image: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png',
      progress: '85%'
    },
    { 
      category: 'Web Solutions', 
      image: '/image/WhatsApp_Image_2025-08-22_at_14.23.27-removebg-preview.png',
      progress: '95%'
    },
    { 
      category: 'Motion Graphics', 
      image: '/image/clbg.jpeg',
      progress: '88%'
    },
    { 
      category: 'Digital Consulting', 
      image: '/image/logo.png',
      progress: '92%'
    }
  ];

 

  // const clients = [
  //   { name: 'SIMAD UNIVERSITY', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.25-removebg-preview.png' },
  //   { name: 'SOMALI SUDANESE SPECIALIZED HOSPITAL', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26-removebg-preview.png' },
  //   { name: 'AL-BIRRI', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png' },
  //   { name: 'MAD Lab', logo: '/image/WhatsApp_Image_2025-08-22_at_14.23.27-removebg-preview.png' }
  // ];

  // const blogPosts = [
  //   {
  //     title: 'How Motion Graphics Can Help Your Brand Marketing?',
  //     excerpt: 'Discover how motion graphics can transform your brand marketing strategy and engage your audience effectively.',
  //     image: '/image/clbg.jpeg',
  //     date: 'July 24, 2024',
  //     tags: ['Brand Marketing', 'Motion Graphics']
  //   },
  //   {
  //     title: 'The Future of Digital Marketing in 2024',
  //     excerpt: 'Explore the latest trends and technologies shaping the future of digital marketing.',
  //     image: '/image/logo.png',
  //     date: 'July 20, 2024',
  //     tags: ['Digital Marketing', 'Trends']
  //   },
  //   {
  //     title: 'Web Design Best Practices for Better Conversion',
  //     excerpt: 'Learn the essential web design principles that can significantly improve your conversion rates.',
  //     image: '/image/WhatsApp_Image_2025-08-22_at_14.23.25-removebg-preview.png',
  //     date: 'July 18, 2024',
  //     tags: ['Web Design', 'Conversion']
  //   }
  // ];

  useEffect(() => {
    // Hero Section Animation
    gsap.fromTo(heroRef.current, 
      { opacity: 0, y: 100 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hero text animations
    gsap.fromTo(".hero-title", 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        delay: 0.3,
        ease: "power2.out" 
      }
    );

    gsap.fromTo(".hero-description", 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        delay: 0.6,
        ease: "power2.out" 
      }
    );

    gsap.fromTo(".hero-button", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        delay: 0.9,
        ease: "back.out(1.7)" 
      }
    );

    // Hero graphic animation
    gsap.fromTo(".hero-graphic", 
      { opacity: 0, scale: 0.5, rotation: -180 },
      { 
        opacity: 1, 
        scale: 1, 
        rotation: 0, 
        duration: 1.5, 
        delay: 0.5,
        ease: "back.out(1.7)" 
      }
    );

    // Navigation dots animation
    gsap.fromTo(".nav-dot", 
      { opacity: 0, scale: 0 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 0.5, 
        delay: 1.2,
        stagger: 0.1,
        ease: "back.out(1.7)" 
      }
    );

    // Services Section Animation
    gsap.fromTo(".service-card", 
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Portfolio Section Animation
    gsap.fromTo(".portfolio-item", 
      { opacity: 0, y: 100, rotationY: 45 },
      { 
        opacity: 1, 
        y: 0, 
        rotationY: 0, 
        duration: 1, 
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Hosting Packages Animation
   

    // Toggle button animation
  

    // Achievements Section Animation
    gsap.fromTo(".achievement-card", 
      { opacity: 0, y: 100, scale: 0.8 },
      { 
        opacity: 1, 
        y: 0, 
        scale: 1, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: achievementsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Blog Section Animation
    gsap.fromTo(".blog-card", 
      { opacity: 0, y: 100, rotationX: 15 },
      { 
        opacity: 1, 
        y: 0, 
        rotationX: 0, 
        duration: 0.8, 
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: blogRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Testimonials Section Animation
  

    // Social ratings animation
    // gsap.fromTo(".social-rating", 
    //   { opacity: 0, x: -50 },
    //   { 
    //     opacity: 1, 
    //     x: 0, 
    //     duration: 0.8, 
    //     stagger: 0.3,
    //     ease: "power2.out",
    //     scrollTrigger: {
    //       trigger: testimonialsRef.current,
    //       start: "top 80%",
    //       end: "bottom 20%",
    //       toggleActions: "play none none reverse"
    //     }
    //   }
    // );

    // Section headings animation
    gsap.fromTo(".section-heading", 
      { opacity: 0, y: 50 },
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".section-heading",
          start: "top 85%",
          end: "bottom 15%",
          toggleActions: "play none none reverse"
        }
      }
    );

    // Floating animation for hero graphic
    gsap.to(".hero-graphic", {
      y: -20,
      duration: 3,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Pulse animation for CTA buttons
    gsap.to(".cta-button", {
      scale: 1.05,
      duration: 2,
      ease: "power1.inOut",
      yoyo: true,
      repeat: -1
    });

    // Hover animations for service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
      card.addEventListener('mouseenter', () => {
        gsap.to(card, { scale: 1.05, duration: 0.3, ease: "power2.out" });
      });
      card.addEventListener('mouseleave', () => {
        gsap.to(card, { scale: 1, duration: 0.3, ease: "power2.out" });
      });
    });

    // Hover animations for portfolio items
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    portfolioItems.forEach(item => {
      item.addEventListener('mouseenter', () => {
        gsap.to(item, { y: -10, duration: 0.3, ease: "power2.out" });
      });
      item.addEventListener('mouseleave', () => {
        gsap.to(item, { y: 0, duration: 0.3, ease: "power2.out" });
      });
    });

    // Counter animation for achievements
    achievements.forEach((_, i) => {
      let el = document.querySelector(`#counter-${i}`);
      if (el) {
        let target = parseInt(el.dataset.target);
        
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: target,
            duration: 2,
            ease: "power1.out",
            snap: { innerText: 1 },
            scrollTrigger: {
              trigger: el,
              start: "top 80%",
            },
            onUpdate: function () {
              el.innerText = Math.floor(el.innerText) + "+";
            },
          }
        );
      }
    });

    // Cleanup function
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="min-h-screen px-3 pt-1 bg-white">
      
      {/* Hero Section */}
        <Homehero />
      {/* Domain Search Section */}
    

      {/* Services Section */}
 <section ref={servicesRef} className="py-20 bg-lightGray">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 className="mb-16 text-4xl font-bold text-center section-heading text-brandNavy">
      Our Services
    </h2>

    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
      {services.map((service) => (
        <div
          key={service.name}
          className="group text-center transition-all duration-500 transform cursor-pointer service-card hover:scale-110 hover:-translate-y-2"
        >
          <div className="relative mx-auto mb-6 overflow-hidden rounded-2xl shadow-xl w-28 h-28">
            <img
              src={service.image}
              alt={service.name}
              className="object-cover w-full h-full transition-all duration-500 group-hover:scale-125 group-hover:rotate-3 filter group-hover:brightness-110"
            />
          </div>
          <h3 className="text-lg font-bold text-brandNavy group-hover:text-brandOrange transition-colors duration-300 tracking-wide">{service.name}</h3>
          <div className="w-0 h-0.5 bg-gradient-to-r from-brandOrange to-brandNavy mx-auto mt-2 group-hover:w-12 transition-all duration-300"></div>
        </div>
      ))}
    </div>

    {/* <div className="mt-12 text-center">
      <button className="px-8 py-4 text-lg font-semibold text-white transition-colors rounded-lg cta-button bg-brandOrange hover:bg-brandNavy">
        VIEW MORE
      </button>
    </div> */}
  </div>
</section>


   

      {/* Web Hosting Packages Section */}
      
   
   

      <Packages/>

      {/* <WebDesign/> */}
      <div>
          <SocialMediaPackages/>
      </div>
    

      {/* Achievements Section */}
      <section ref={achievementsRef} className="py-20 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center section-heading text-brandNavy">
            Our Achievements
          </h2>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            {achievements.map((achievement, index) => (
              <div key={achievement.label} className="text-center achievement-card">
                <div className="flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-full bg-brandOrange">
                  <span className="text-3xl text-white">{achievement.icon}</span>
                </div>
                <div
                  id={`counter-${index}`}
                  data-target={achievement.number.replace(/\D/g, "")}
                  className="mb-2 text-3xl font-bold text-brandNavy"
                >
                  0+
                </div>
                <div className="text-gray-600">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      
   
         {/* Portfolio Section */}
       <section ref={portfolioRef} className="py-20 bg-[#f7f9fb]">
  <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
    <h2 className="mb-6 text-4xl font-extrabold tracking-tight text-center text-brandNavy">
      Our Portfolios
    </h2>
    <p className="max-w-3xl mx-auto mb-16 text-lg text-center text-gray-500">
      Our portfolios speak for themselves. Check out all projects and see for yourself.
    </p>

    <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3">
      {portfolioItems.map((item, index) => (
        <div
          key={index}
          className="relative overflow-hidden transition-shadow duration-300 bg-white shadow-lg group rounded-2xl hover:shadow-2xl"
        >
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src={item.image}
              alt={item.category}
              className="object-cover w-full h-56 transition-transform duration-500 sm:h-64 md:h-56 lg:h-64 group-hover:scale-105"
            />
            <div className="absolute flex items-center justify-center w-12 h-12 font-semibold text-white rounded-full shadow-lg top-4 right-4 bg-brandOrange">
              {item.progress}
            </div>
          </div>
          <div className="p-6 text-center">
            <h3 className="text-xl font-semibold tracking-wide text-brandNavy">
              {item.category}
            </h3>
          </div>
        </div>
      ))}
    </div>

    <div className="text-center mt-14">
      <button
        className="inline-block px-12 py-4 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-brandOrange hover:bg-brandNavy hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-brandOrange/50"
      >
        VIEW MORE
      </button>
    </div>
  </div>
</section>


      {/* Testimonials Section */}
      <Testimonials/>

      <SectionFooter />
    </div>
  )
}

export default Home
