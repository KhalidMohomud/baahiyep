import React, { useEffect, useMemo, useRef } from 'react'

// Source images
const DEFAULT_LOGOS = [
  { src: '/image/clients/logo111-01.png', alt: 'Client A' },
  { src: '/image/WhatsApp_Image_2025-08-22_at_14.23.26-removebg-preview.png', alt: 'Client B' },
  { src: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png', alt: 'Client C' },
  { src: '/image/clients/cm.jpg', alt: 'Client D' },
  { src: '/image/clients/ccr.png', alt: 'Client E' },
]

// Card with elegant styling
const LogoCard = ({ src, alt }) => (
  <div className="transition border shadow-sm rounded-2xl bg-white/80 backdrop-blur-md hover:shadow-lg">
    <div className="flex items-center justify-center px-6 py-4">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="object-contain w-[180px] h-16 md:w-[220px] md:h-20 grayscale hover:grayscale-0 transition duration-500"
        onError={(e) => {
          e.currentTarget.outerHTML = `<div class='w-[180px] h-16 md:w-[220px] md:h-20 grid place-items-center rounded bg-[#fde5dc] text-brandNavy/70 font-medium'>${alt}</div>`
        }}
      />
    </div>
  </div>
)

function Clients({ title = 'Our Clients', logos = DEFAULT_LOGOS }) {
  const scrollerRef = useRef(null)
  const duplicated = useMemo(() => [...logos, ...logos], [logos])

  return (
    <section className="relative px-6 py-20 mx-auto max-w-7xl">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brandOrange/5 via-white to-brandNavy/5" />
      <div className="absolute inset-0 -z-10 " />
      {/* bg-[url('/image/clbg.jpeg')] opacity-[0.06] bg-center bg-cover */}

      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-3xl font-bold tracking-tight md:text-4xl text-brandNavy">
          {title}
        </h3>
        <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-brandOrange" />
        <p className="max-w-2xl mx-auto mt-4 text-sm text-brandNavy/70 md:text-base">
          We are proud to work with amazing partners who trust our creativity and vision.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-white via-white/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-white via-white/90 to-transparent" />

        <div
          ref={scrollerRef}
          className="overflow-x-auto scrollbar-hide scroll-smooth"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex items-center gap-10 px-10 py-2 select-none animate-scroll-slow">
            {duplicated.map((logo, idx) => (
              <div key={idx} className="shrink-0">
                <LogoCard src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients
