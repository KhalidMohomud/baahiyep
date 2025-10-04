import React, { useMemo, useRef } from 'react'

// Source images
const DEFAULT_LOGOS = [
  { src: '/image/clients/Banaadirmall.jpeg', alt: 'Client 1' },
    { src: '/image/clients/hamarwayn mall.jpg', alt: 'Client 2' },
   { src: '/image/clients/logoimaan.jpg', alt: 'Client 3' },
  { src: '/image/clients/farayare.jpeg', alt: 'Client 4' },
    { src: '/image/clients/Istanbulfurniture.jpeg', alt: 'Client 5' },
  { src: '/image/clients/Al_nuurayn.jpeg', alt: 'Client 6' },
   { src: '/image/clients/caashimares.png', alt: 'Client 21' },
  { src: '/image/clients/sahalpolyclinicCenter.jpeg', alt: 'Client 7' },
  { src: '/image/clients/sahal.jpeg', alt: 'Client 8' },
  { src: '/image/clients/Rahmatullah.jpeg', alt: 'Client 9' },
  { src: '/image/clients/Al_Naciimaeye.jpeg', alt: 'Client 10' },
  { src: '/image/clients/sahalprint.jpeg', alt: 'Client 11' },
  { src: '/image/clients/.jpeg', alt: 'Client 12' },
  { src: '/image/clients/mucdanRes.jpeg', alt: 'Client 13' },
  { src: '/image/clients/kitokito.jpeg', alt: 'Client 14' },
  { src: '/image/clients/kirotaaySuud.jpeg', alt: 'Client 15' },
  { src: '/image/clients/kaahele.jpeg', alt: 'Client 16' },
  { src: '/image/clients/feynuus.png', alt: 'Client 17' },
  { src: '/image/clients/ramadaanco.jpg', alt: 'Client 18' },
  { src: '/image/clients/dhoolaskinkare.png', alt: 'Client 19' },
  { src: '/image/clients/ìibdoon -01.png', alt: 'Client 20' },
    
]

// Card with elegant styling + dark mode
const LogoCard = ({ src, alt }) => (
  <div className="transition border shadow-sm rounded-2xl bg-white/80 dark:bg-dark-card backdrop-blur-md hover:shadow-lg">
    <div className="flex items-center justify-center px-6 py-4">
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="object-contain w-[180px] h-16 md:w-[220px] md:h-20 grayscale hover:grayscale-0 transition duration-500"
        onError={(e) => {
          e.currentTarget.outerHTML = `<div class='w-[180px] h-16 md:w-[220px] md:h-20 grid place-items-center rounded bg-[#fde5dc] text-brandNavy/70 dark:text-dark-text font-medium'>${alt}</div>`
        }}
      />
    </div>
  </div>
)

function Clients({ title = 'Our Clients', logos = DEFAULT_LOGOS }) {
  const scrollerRef = useRef(null)
  const duplicated = useMemo(() => [...logos, ...logos], [logos])

  return (
    <section className="relative px-6 py-20 mx-auto transition-colors duration-300 max-w-7xl">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-brandOrange/5 via-white dark:via-dark-bg to-brandNavy/5" />

      {/* Header */}
      <div className="text-center mb-14">
        <h3 className="text-3xl font-bold tracking-tight md:text-4xl text-brandNavy dark:text-dark-text">
          {title}
        </h3>
        <div className="w-24 h-1 mx-auto mt-3 rounded-full bg-brandOrange" />
        <p className="max-w-2xl mx-auto mt-4 text-sm text-brandNavy/70 dark:text-gray-400 md:text-base">
          We are proud to work with amazing partners who trust our creativity and vision.
        </p>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Gradient fade edges */}
        <div className="absolute inset-y-0 left-0 w-24 pointer-events-none bg-gradient-to-r from-white dark:from-dark-bg via-white/90 dark:via-dark-bg/90 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-24 pointer-events-none bg-gradient-to-l from-white dark:from-dark-bg via-white/90 dark:via-dark-bg/90 to-transparent" />

        <div
          ref={scrollerRef}
          className="overflow-x-auto scroll-smooth custom-scrollbar"
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
