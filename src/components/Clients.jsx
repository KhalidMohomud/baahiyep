import React, { useMemo, useRef } from 'react'

const DEFAULT_LOGOS = [
  { src: '/image/clients/logo111-01.png', alt: 'Client A' },
  { src: '/image/WhatsApp_Image_2025-08-22_at_14.23.26-removebg-preview.png', alt: 'Client B' },
  { src: '/image/WhatsApp_Image_2025-08-22_at_14.23.26__1_-removebg-preview.png', alt: 'Client C' },
  { src: '/image/clients/cm.jpg', alt: 'Client D' },
  { src: '/image/clients/ccr.png', alt: 'Client E' },
]

const LogoCard = ({ src, alt }) => (
  <div className="group relative flex items-center justify-center bg-white dark:bg-dark-card border border-gray-200 dark:border-gray-700 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 p-6 min-w-[200px] h-[100px]">
    <img
      src={src}
      alt={alt}
      loading="lazy"
      className="max-h-[60px] object-contain transition-transform duration-300 group-hover:scale-105"
      onError={(e) => {
        e.currentTarget.outerHTML = `<div class='text-sm text-gray-500 dark:text-gray-300'>${alt}</div>`
      }}
    />
  </div>
)

function Clients({ title = 'Our Clients', logos = DEFAULT_LOGOS }) {
  const scrollerRef = useRef(null)
  const duplicated = useMemo(() => [...logos, ...logos], [logos])

  return (
    <section className="relative px-6 py-20 mx-auto max-w-7xl bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-dark-bg dark:via-dark-surface dark:to-dark-bg transition-colors duration-300">
      
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 network-pattern opacity-5"></div>

      {/* Floating Blur Orbs */}
      <div className="absolute top-12 left-12 w-24 h-24 rounded-full bg-brandOrange/10 blur-3xl"></div>
      <div className="absolute bottom-12 right-12 w-32 h-32 rounded-full bg-brandNavy/10 blur-3xl"></div>

      {/* Section Header */}
      <div className="text-center mb-16">
      <h2 className="inline-block px-6 py-3 text-2xl font-extrabold text-black   dark:text-dark-text md:text-4xl">
  {title}
</h2>

        <div className="w-32 h-1 mx-auto my-4 rounded-full bg-gradient-to-r from-brandOrange to-brandNavy" />
        <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-300">
          We are proud to work with partners who trust our creativity and vision.
        </p>
      </div>

      {/* Logo Marquee */}
      <div className="relative">
        {/* Gradient edges for fade effect */}
        <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-gray-50 dark:from-dark-bg to-transparent z-10" />
        <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-gray-50 dark:from-dark-bg to-transparent z-10" />

        <div
          ref={scrollerRef}
          className="overflow-x-auto scroll-smooth scrollbar-hide"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <div className="flex items-center gap-6 px-12 py-4 animate-scroll-slow whitespace-nowrap">
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
