import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { TextPlugin } from 'gsap/TextPlugin'
import Vision from '../components/Vision'
import SectionFooter from '../components/SectionFooter'
import { Achievement } from   '../components/Achievement'
import Clients from '../components/clients'
import Aboutcom from '../components/Aboutcom'
import Approaches from '../components/Approaches'


// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, TextPlugin)

function About() {
  const pageRef = useRef(null)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const vmRef = useRef(null)
  const coreValuesRef = useRef(null)
  const approachesRef = useRef(null)
  const awardsRef = useRef(null)
  const achievementsRef = useRef(null)
  const clientsRef = useRef(null)

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
          makeSectionTl(vmRef.current, { x: 80, opacity: 0 }, { x: 0, opacity: 1, duration: 1.0, ease: 'power2.out' }),
          makeSectionTl(coreValuesRef.current, { y: 80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }),
          makeSectionTl(approachesRef.current, { y: -80, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }),
          makeSectionTl(awardsRef.current, { x: -60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }),
          makeSectionTl(achievementsRef.current, { x: 60, opacity: 0 }, { x: 0, opacity: 1, duration: 0.9, ease: 'power2.out' }),
          makeSectionTl(clientsRef.current, { y: 50, opacity: 0, scale: 0.98 }, { y: 0, opacity: 1, scale: 1, duration: 0.9, ease: 'back.out(1.4)' })
        )

        const sections = [aboutRef, vmRef, coreValuesRef, approachesRef, awardsRef, achievementsRef, clientsRef]
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
        [pageRef, heroRef, aboutRef, vmRef, coreValuesRef, approachesRef, awardsRef, achievementsRef, clientsRef].forEach(r => {
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
      {/* Hero banner */}
      <section ref={heroRef} className="relative overflow-hidden">
  <div className="pb-16 bg-gradient-to-r from-red-800 via-red-700 to-brandOrange pt-28">
    <div className="flex items-center justify-around mx-auto max-w-7xl sm:py-20">
      {/* Left side - Title */}
      <h1 className="text-4xl font-extrabold text-white md:text-5xl">About</h1>

      {/* Right side - Breadcrumb */}
      <div className="flex items-center gap-2 text-lg font-bold text-white/90 ">
        <a href="/" className="hover:underline">Home</a>
        <span>›</span>
        <span>About</span>
      </div>
    </div>
  </div>
</section>


      {/* About Us */}
      {/* <section ref={aboutRef} className="relative px-6 py-16 mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2">
          <div className="flex items-center justify-center">
            <div className="relative w-72 h-72 md:w-80 md:h-80">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-brandOrange/20 to-brandNavy/20" />
              <div className="absolute grid bg-white rounded-full inset-6 ring-8 ring-brandNavy/20 place-items-center">
                <div className="w-24 h-24 rounded-full bg-brandOrange/80" />
              </div>
            </div>
          </div>
          <div className="space-y-4 text-gray-700">
            <h2 className="text-2xl font-bold text-brandNavy">About Us</h2>
            <p>
            Baahiye Advertising Agency is one of the innovative digital service providers in Somalia, founded in 2022 to offer a wide range of digital creative services. Baahiye Advert is the first advertising company that provides a wide variety of one-stop digital creative services (1-stop agency: marketing, creative, web, and video) in Somalia.
            </p>
            <p>
            Baahiye always aims to exceed expectations and deliver results that are based on our clients’ marketing objectives while enhancing their brands. Baahiye helps businesses keep up with the digital transformation and capitalize on new markets and opportunities. We are pleased with our capacity to combine creativity and efficiency to provide our clients with top-notch services.
            </p>
          </div>
        </div>
      </section> */}
      <Aboutcom/>

     <Vision />

   

      {/* Our Approaches */}
   

     <Approaches/>

      {/* Achievements */}
   
    <div>
    <Achievement/>
    </div>
     


      {/* Clients */}
      <div ref={clientsRef}>
        <Clients />
      </div>

      {/* Bottom note */}
      {/* <section className="py-12 bg-[#fde5dc]">
        <div className="px-6 mx-auto text-center max-w-7xl text-brandNavy/80">
          Deero Advertising Agency is one of the innovative digital service providers in Somalia, founded in 2019 to offer a wide range of digital creative services
          <div className="flex justify-center gap-3 mt-4 text-brandNavy">
            <span className="grid w-8 h-8 bg-white rounded-full place-items-center">f</span>
            <span className="grid w-8 h-8 bg-white rounded-full place-items-center">t</span>
            <span className="grid w-8 h-8 bg-white rounded-full place-items-center">in</span>
            <span className="grid w-8 h-8 bg-white rounded-full place-items-center">be</span>
          </div>
        </div>
      </section> */}
      <SectionFooter />
    </div>
  )
}

export default About