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
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const ctx = gsap.context(() => {
      // Page entrance
      if (!prefersReducedMotion) {
        gsap.fromTo(pageRef.current,
          { opacity: 0, scale: 0.98 },
          { opacity: 1, scale: 1, duration: 0.8, ease: 'power2.out' }
        )
      }

      // Helper to create a timeline with ScrollTrigger
      const makeSectionTl = (el, from, to) => {
        if (!el) return null
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            end: 'bottom 20%',
            toggleActions: 'play none none reverse'
          }
        })
        tl.fromTo(el, from, { ...to })
        return tl
      }

      const timelines = []

      if (!prefersReducedMotion) {
        timelines.push(
          makeSectionTl(heroRef.current, { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }),
          makeSectionTl(aboutRef.current, { x: -80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power2.out' }),
          makeSectionTl(visionRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power2.out' }),
          makeSectionTl(servicesRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }),
          makeSectionTl(packagesRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }),
          makeSectionTl(socialMediaRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }),
          makeSectionTl(webDesignRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }),
          makeSectionTl(contactRef.current, { y: 50, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.4)' })
        )

        // Subtle float on hover/idle for accents only, limited repeats
        const sections = [aboutRef, visionRef, servicesRef, packagesRef, socialMediaRef, webDesignRef, contactRef]
        sections.forEach((sectionRef, index) => {
          if (sectionRef.current) {
            gsap.to(sectionRef.current, {
              y: -4,
              duration: 3.5,
              ease: 'power2.inOut',
              delay: index * 0.2,
              yoyo: true,
              repeat: 2, // finite to avoid perpetual CPU usage
              willChange: 'transform'
            })
          }
        })
      } else {
        // Ensure content visible without motion
        [pageRef, heroRef, aboutRef, visionRef, servicesRef, packagesRef, socialMediaRef, webDesignRef, contactRef].forEach(r => {
          if (r.current) {
            gsap.set(r.current, { clearProps: 'all', opacity: 1, x: 0, y: 0, scale: 1 })
          }
        })
      }

      return () => {
        timelines.forEach(tl => tl && tl.kill())
        ScrollTrigger.getAll().forEach(t => t.kill())
      }
    })

    return () => ctx.revert()
  }, [])

  return (
    <div ref={pageRef} className="min-h-screen bg-white">
      
      {/* Hero Section with enhanced animations */}
      <div ref={heroRef} className="relative">
        <Herosections />
        {/* Floating decorative elements */}
        <div className="absolute w-20 h-20 rounded-full top-20 left-10 bg-brandOrange/20 blur-xl motion-safe:animate-pulse motion-reduce:opacity-30"></div>
        <div className="absolute w-32 h-32 rounded-full top-40 right-20 bg-brandNavy/20 blur-xl motion-safe:animate-pulse motion-reduce:opacity-30" style={{animationDelay: '1s'}}></div>
        <div className="absolute w-16 h-16 rounded-full bottom-20 left-1/4 bg-brandOrange/30 blur-lg motion-safe:animate-pulse motion-reduce:opacity-30" style={{animationDelay: '2s'}}></div>
      </div>

      {/* About Component with enhanced animations */}
      <div ref={aboutRef} className="relative">
        <Aboutcomp />
        {/* Animated background elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-24 h-24 border-2 rounded-full top-10 right-10 border-brandOrange/20 motion-safe:animate-spin motion-reduce:animate-none" style={{animationDuration: '20s'}}></div>
          <div className="absolute w-16 h-16 border-2 rounded-full bottom-10 left-10 border-brandNavy/20 motion-safe:animate-spin motion-reduce:animate-none" style={{animationDuration: '15s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Vision Component with enhanced animations */}
      <div ref={visionRef} className="relative">
        <Vision />
        {/* Floating elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-3 h-3 rounded-full top-1/4 left-5 bg-brandOrange motion-safe:animate-bounce motion-reduce:opacity-70"></div>
          <div className="absolute w-2 h-2 rounded-full top-1/3 right-8 bg-brandNavy motion-safe:animate-bounce motion-reduce:opacity-70" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute w-4 h-4 rounded-full bottom-1/4 left-1/3 bg-brandOrange/60 motion-safe:animate-bounce motion-reduce:opacity-70" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Services Component with enhanced animations */}
      <div ref={servicesRef} className="relative">
        <Services />
        {/* Animated background patterns */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-32 h-32 border rounded-full top-20 left-20 border-brandOrange/10 motion-safe:animate-ping motion-reduce:opacity-60" style={{animationDuration: '3s'}}></div>
          <div className="absolute w-24 h-24 border rounded-full bottom-20 right-20 border-brandNavy/10 motion-safe:animate-ping motion-reduce:opacity-60" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Packages Component with enhanced animations */}
      <div ref={packagesRef} className="relative">
        <Packages />
        {/* Floating geometric shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-8 h-8 rotate-45 top-1/3 left-10 bg-brandOrange/20 motion-safe:animate-pulse"></div>
          <div className="absolute w-6 h-6 rotate-45 bottom-1/3 right-10 bg-brandNavy/20 motion-safe:animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Social Media Packages Component with enhanced animations */}
      <div ref={socialMediaRef} className="relative">
        <SocialMediaPackages />
        {/* Animated dots */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-2 h-2 rounded-full top-1/4 right-1/4 bg-brandOrange motion-safe:animate-bounce"></div>
          <div className="absolute w-2 h-2 rounded-full top-1/2 left-1/4 bg-brandNavy motion-safe:animate-bounce" style={{animationDelay: '0.3s'}}></div>
          <div className="absolute w-2 h-2 rounded-full bottom-1/4 right-1/3 bg-brandOrange motion-safe:animate-bounce" style={{animationDelay: '0.6s'}}></div>
        </div>
      </div>

      {/* Web Design Component with enhanced animations */}
      <div ref={webDesignRef} className="relative">
        <WebDesign />
        {/* Animated lines */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-px h-20 top-10 left-1/2 bg-gradient-to-b from-transparent via-brandOrange to-transparent motion-safe:animate-pulse"></div>
          <div className="absolute w-px h-16 bottom-10 right-1/3 bg-gradient-to-b from-transparent via-brandNavy to-transparent motion-safe:animate-pulse" style={{animationDelay: '1s'}}></div>
        </div>
      </div>

      {/* Contact Component with enhanced animations */}
      <div ref={contactRef} className="relative">
        <Contact />
        {/* Final decorative elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute w-40 h-40 transform -translate-x-1/2 -translate-y-1/2 border rounded-full top-1/2 left-1/2 border-brandOrange/10 motion-safe:animate-spin motion-reduce:animate-none" style={{animationDuration: '30s'}}></div>
          <div className="absolute w-32 h-32 transform -translate-x-1/2 -translate-y-1/2 border rounded-full top-1/2 left-1/2 border-brandNavy/10 motion-safe:animate-spin motion-reduce:animate-none" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
        </div>
      </div>

      {/* Additional floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-brandOrange/30 motion-safe:animate-pulse motion-reduce:opacity-40"
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