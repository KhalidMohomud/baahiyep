import gsap from 'gsap';
import { useRef, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getMainPortfolioItems } from '../utils/portfolioUtils';

function Portfolio() {
  const portfolioRef = useRef(null);
  const navigate = useNavigate();
  const [lightboxImage, setLightboxImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleViewProject = (category) => {
    navigate(`/Portifole?category=${encodeURIComponent(category)}`);
  };

  // ✅ GSAP Animation (inside useEffect)
  useEffect(() => {
    gsap.fromTo(
      '.portfolio-item',
      { opacity: 0, y: 100, rotationY: 45 },
      {
        opacity: 1,
        y: 0,
        rotationY: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: portfolioRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  const portfolioItems = getMainPortfolioItems();

  return (
    <section
      ref={portfolioRef}
      className="py-20 bg-[#f7f9fb] dark:bg-dark-surface transition-colors duration-300"
    >
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold tracking-tight text-brandNavy dark:text-dark-text">
            Our Portfolios
          </h2>
          <p className="max-w-3xl mx-auto mt-4 text-lg text-gray-500 dark:text-gray-300">
            Our portfolios speak for themselves. Explore our latest projects that
            showcase creativity, quality, and innovation.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:gap-12">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden transition-all duration-500 bg-white shadow-md portfolio-item dark:bg-dark-card rounded-2xl group hover:shadow-2xl"
            >
              {/* Image with Overlay */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <img
                  src={item.image}
                  srcSet={`${item.image2x || item.image} 2x`}
                  alt={item.title}
                  width="800"
                  height="600"
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  onClick={() => { setLightboxImage(item.image); setZoomLevel(1); }}
                  className="object-cover w-full h-auto cursor-zoom-in aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9]"
                />

                {/* Overlay Button */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/40 group-hover:opacity-100">
                  <button
                    onClick={() => handleViewProject(item.category)}
                    className="px-5 py-2 text-sm font-medium text-white transition-colors duration-300 rounded-full shadow-md bg-brandOrange hover:bg-brandNavy"
                  >
                    View Project
                  </button>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-semibold tracking-wide transition-colors duration-300 text-brandNavy dark:text-dark-text group-hover:text-brandOrange">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                  {item.category}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Optional CTA Button */}
        {/* <div className="mt-16 text-center">
          <button className="px-12 py-4 text-lg font-semibold text-white transition-all duration-500 transform rounded-full shadow-lg bg-gradient-to-r from-brandOrange to-brandNavy hover:opacity-90 hover:-translate-y-1 hover:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brandOrange/40">
            Discover More Projects
          </button>
        </div> */}
        {lightboxImage && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
            onClick={() => setLightboxImage(null)}
          >
            <div
              className="relative max-w-[95vw] max-h-[90vh] p-2"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={lightboxImage}
                alt="Zoomed"
                style={{ transform: `scale(${zoomLevel})` }}
                className="object-contain w-[95vw] max-w-[1400px] h-[85vh] transition-transform duration-200"
              />

              <div className="absolute flex gap-2 right-3 top-3">
                <button
                  aria-label="Close"
                  onClick={() => setLightboxImage(null)}
                  className="px-3 py-2 text-sm font-medium text-white bg-black/60 rounded-md hover:bg-black/80"
                >
                  Close
                </button>
                <button
                  aria-label="Zoom Out"
                  onClick={() => setZoomLevel((z) => Math.max(0.5, +(z - 0.25).toFixed(2)))}
                  className="px-3 py-2 text-sm font-medium text-white bg-black/60 rounded-md hover:bg-black/80"
                >
                  -
                </button>
                <button
                  aria-label="Reset Zoom"
                  onClick={() => setZoomLevel(1)}
                  className="px-3 py-2 text-sm font-medium text-white bg-black/60 rounded-md hover:bg-black/80"
                >
                  100%
                </button>
                <button
                  aria-label="Zoom In"
                  onClick={() => setZoomLevel((z) => Math.min(5, +(z + 0.25).toFixed(2)))}
                  className="px-3 py-2 text-sm font-medium text-white bg-black/60 rounded-md hover:bg-black/80"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Portfolio;
