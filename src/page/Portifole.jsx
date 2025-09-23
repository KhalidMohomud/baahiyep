import  { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { getCategories, getPortfolioItemsByCategory, isValidCategory } from "../utils/portfolioUtils";
import { Achievement } from "../components/Achievement";
import Clients from "../components/Clients";
import SectionFooter from "../components/SectionFooter";

// Get categories and portfolio items from external data
const categories = getCategories();

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const [lightboxImage, setLightboxImage] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  useEffect(() => {
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl && isValidCategory(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const filteredItems = getPortfolioItemsByCategory(activeCategory);

  return (
     <div>
   <section r className="relative ml-2 mr-2 overflow-hidden ">
  <div className="pb-16 bg-gradient-to-r from-red-800 via-red-700 to-brandOrange pt-28">
    <div className="flex items-center justify-around mx-auto max-w-7xl sm:py-20">
      {/* Left side - Title */}
      <h1 className="text-4xl font-extrabold text-white md:text-5xl">Portifole</h1>

      {/* Right side - Breadcrumb */}
      <div className="flex items-center gap-2 text-lg font-bold text-white/90 ">
        <a href="/" className="hover:underline">Home</a>
        <span>›</span>
        <span>Portfolio</span>
      </div>
    </div>
  </div>
</section>

    

       <section className="py-20 bg-gradient-to-b from-[#f9fafb] to-white dark:from-dark-surface dark:to-dark-bg">
      <div className="px-6 mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-brandNavy dark:text-white">
            Our Portfolio
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
            Our portfolio speaks for itself. Check out our latest projects and
            see the creativity, quality, and innovation we bring.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brandOrange to-brandNavy text-white shadow-md"
                  : "bg-gray-200 dark:bg-dark-card text-gray-700 dark:text-gray-300 hover:bg-brandOrange hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden shadow-lg rounded-2xl group"
            >
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                decoding="async"
                width="800"
                height="600"
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                onClick={() => { setLightboxImage(item.image); setZoomLevel(1); }}
                className="object-cover w-full transition-transform duration-500 cursor-zoom-in group-hover:scale-110 aspect-[4/3] h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/50 group-hover:opacity-100">
                <div className="text-center">
                  <span className="block px-6 py-2 font-semibold bg-white rounded-full shadow-md text-brandNavy">
                    {item.title}
                  </span>
                  <span className="block px-4 py-1 mt-2 text-sm text-white rounded-full bg-brandOrange">
                    {item.category}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 text-center">
          <button className="px-10 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-brandOrange to-brandNavy hover:opacity-90">
            Load More
          </button>
        </div>
      </div>
    </section>
 
              {/* <div>
    <Achievement/>
    </div>
      */}


      {/* Clients */}
      <div >
        <Clients />
      </div>

       <div>
            <SectionFooter />
       </div>

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
  );
};

export default Portfolio;
