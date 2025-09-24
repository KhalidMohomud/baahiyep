import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getCategories,
  getPortfolioItemsByCategory,
  isValidCategory,
} from "../utils/portfolioUtils";
import { Achievement } from "../components/Achievement";
import Clients from "../components/Clients";
import SectionFooter from "../components/SectionFooter";

// Get categories from utils
const categories = getCategories();

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && isValidCategory(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const filteredItems = getPortfolioItemsByCategory(activeCategory);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative ml-2 mr-2 overflow-hidden">
        <div className="pb-16 bg-gradient-to-r from-red-800 via-red-700 to-brandOrange pt-28">
          <div className="flex items-center justify-around mx-auto max-w-7xl sm:py-20">
            {/* Title */}
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">
              Portfolio
            </h1>

            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-lg font-bold text-white/90">
              <a href="/" className="hover:underline">
                Home
              </a>
              <span>›</span>
              <span>Portfolio</span>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
            {filteredItems.map((item, index) => (
              <div
                key={index}
                className="relative overflow-hidden shadow-lg rounded-2xl group"
              >
                {/* Responsive Image */}
                <img
                  src={item.image}
                  srcSet={`
                    ${item.image}?w=800 800w,
                    ${item.image}?w=1200 1200w,
                    ${item.image}?w=1800 1800w
                  `}
                  sizes="(min-width: 1024px) 50vw, (min-width: 640px) 50vw, 100vw"
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="object-cover w-full h-[400px] transition-transform duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-500 opacity-0 bg-black/50 group-hover:opacity-100">
                  <div className="space-y-2 text-center">
                    <span className="block px-4 py-1 text-sm text-white rounded-full bg-brandOrange">
                      {item.category}
                    </span>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 mt-2 text-sm font-semibold text-white transition rounded-full bg-brandNavy hover:bg-brandOrange"
                      >
                        View Project
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Load More Button */}
          <div className="mt-12 text-center">
            <button className="px-10 py-3 text-lg font-semibold text-white transition-all duration-300 rounded-full shadow-lg bg-gradient-to-r from-brandOrange to-brandNavy hover:opacity-90">
              Load More
            </button>
          </div>
        </div>
      </section>

      {/* Clients */}
      <Clients />

      {/* Footer */}
      <SectionFooter />
    </div>
  );
};

export default Portfolio;
