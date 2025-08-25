import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'

import Aboutcomp from '../components/Aboutcomp';
import Vision from '../components/Vision';
import Services from '../components/Services';
import Packages from '../components/Packages';
import SocialMediaPackages from '../components/SocialMediaPackages';
import WebDesign from '../components/WebDesign';
import Contact from '../components/Contactabout';
import { Herosections } from '../components/Herosections';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

function About() {
  const pageRef = useRef(null)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const visionRef = useRef(null)
  const servicesRef = useRef(null)
  const packagesRef = useRef(null)
  const socialMediaRef = useRef(null)
  const webDesignRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
  const timeout = setTimeout(() => {
    // Register animations only after scroll is reset
    gsap.fromTo(pageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    );

    // ... all other animations

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, 0); // ← ensures scrollToTop has already completed

  return () => clearTimeout(timeout);
}, []);


  useEffect(() => {
    // Page entrance animation
    gsap.fromTo(pageRef.current,
      { opacity: 0, scale: 0.95 },
      { opacity: 1, scale: 1, duration: 1, ease: "power2.out" }
    )

    // Hero section animations
    gsap.fromTo(heroRef.current,
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.2, 
        ease: "power3.out",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // About component animations
    gsap.fromTo(aboutRef.current,
      { x: -100, opacity: 0, rotation: -5 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Vision component animations
    gsap.fromTo(visionRef.current,
      { x: 100, opacity: 0, scale: 0.8 },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: visionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Services component animations
    gsap.fromTo(servicesRef.current,
      { y: 100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Packages component animations
    gsap.fromTo(packagesRef.current,
      { y: -100, opacity: 0, scale: 0.9 },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: packagesRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Social Media Packages component animations
    gsap.fromTo(socialMediaRef.current,
      { x: -100, opacity: 0, rotation: -10 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: socialMediaRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Web Design component animations
    gsap.fromTo(webDesignRef.current,
      { x: 100, opacity: 0, rotation: 10 },
      {
        x: 0,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
          trigger: webDesignRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Contact component animations
    gsap.fromTo(contactRef.current,
      { scale: 0.8, opacity: 0, y: 50 },
      {
        scale: 1,
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse"
        }
      }
    )

    // Floating animation for all sections
    const sections = [aboutRef, visionRef, servicesRef, packagesRef, socialMediaRef, webDesignRef, contactRef]
    sections.forEach((sectionRef, index) => {
      if (sectionRef.current) {
        gsap.to(sectionRef.current, {
          y: -5,
          duration: 4,
          ease: "power2.inOut",
          delay: index * 0.5,
          yoyo: true,
          repeat: -1
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div  className="min-h-screen bg-white">
      
      {/* Hero Section with enhanced animations */}
      <div ref={heroRef} className="relative">
        <Herosections />
        {/* Floating decorative elements */}
        <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-brandOrange/20 blur-xl animate-pulse"></div>
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-brandNavy/20 blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-16 h-16 rounded-full bottom-20 left-1/4 bg-brandOrange/30 blur-lg animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      {/* About Component with enhanced animations */}
      <div ref={aboutRef} className="relative">
        <Aboutcomp />
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-24 h-24 border-2 rounded-full top-10 right-10 border-brandOrange/20 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute w-16 h-16 border-2 rounded-full bottom-10 left-10 border-brandNavy/20 animate-spin" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Vision Component with enhanced animations */}
      <div ref={visionRef} className="relative">
        <Vision />
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-3 h-3 rounded-full top-1/4 left-5 bg-brandOrange animate-bounce"></div>
          <div className="absolute w-2 h-2 rounded-full top-1/3 right-8 bg-brandNavy animate-bounce" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute w-4 h-4 rounded-full bottom-1/4 left-1/3 bg-brandOrange/60 animate-bounce" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Services Component with enhanced animations */}
      <div ref={servicesRef} className="relative">
        <Services />
        {/* Animated background patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-32 h-32 border rounded-full top-20 left-20 border-brandOrange/10 animate-ping" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-24 h-24 border rounded-full bottom-20 right-20 border-brandNavy/10 animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Packages Component with enhanced animations */}
      <div ref={packagesRef} className="relative">
        <Packages />
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-8 h-8 rotate-45 top-1/3 left-10 bg-brandOrange/20 animate-pulse"></div>
          <div className="absolute w-6 h-6 rotate-45 bottom-1/3 right-10 bg-brandNavy/20 animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Social Media Packages Component with enhanced animations */}
      <div ref={socialMediaRef} className="relative">
        <SocialMediaPackages />
        {/* Animated dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 rounded-full top-1/4 right-1/4 bg-brandOrange animate-bounce"></div>
          <div className="absolute w-2 h-2 rounded-full top-1/2 left-1/4 bg-brandNavy animate-bounce" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute w-2 h-2 rounded-full bottom-1/4 right-1/3 bg-brandOrange animate-bounce" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>

      {/* Web Design Component with enhanced animations */}
      <div ref={webDesignRef} className="relative">
        <WebDesign />
        {/* Animated lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-px h-20 top-10 left-1/2 bg-gradient-to-b from-transparent via-brandOrange to-transparent animate-pulse"></div>
          <div className="absolute w-px h-16 bottom-10 right-1/3 bg-gradient-to-b from-transparent via-brandNavy to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Contact Component with enhanced animations */}
      <div ref={contactRef} className="relative">
        <Contact />
        {/* Final decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 border rounded-full top-1/2 left-1/2 border-brandOrange/10 animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 border rounded-full top-1/2 left-1/2 border-brandNavy/10 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Additional floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-brandOrange/30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          ></div>
        ))}
      </div>
    </div>
  )
}

export default About