import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import {
  getCategories,
  getPortfolioItemsByCategory,
  isValidCategory,
} from "../utils/portfolioUtils";
import Clients from "../components/Clients";
import SectionFooter from "../components/SectionFooter";

// ✅ Extract YouTube ID safely
const getYouTubeId = (url) => {
  try {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  } catch {
    return null;
  }
};

const categories = getCategories();

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchParams] = useSearchParams();
  const [playingVideos, setPlayingVideos] = useState({});

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");
    if (categoryFromUrl && isValidCategory(categoryFromUrl)) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const filteredItems = getPortfolioItemsByCategory(activeCategory);

  const handlePlayVideo = (index) => {
    setPlayingVideos((prev) => ({ ...prev, [index]: true }));
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative ml-2 mr-2 overflow-hidden">
        <div className="pb-16 bg-gradient-to-r from-red-800 via-red-700 to-brandOrange pt-28">
          <div className="flex items-center justify-around mx-auto max-w-7xl sm:py-20">
            <h1 className="text-4xl font-extrabold text-white md:text-5xl">Portfolio</h1>
            <div className="flex items-center gap-2 text-lg font-bold text-white/90">
              <a href="/" className="hover:underline">Home</a>
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
            <h2 className="text-4xl font-extrabold text-brandNavy dark:text-white">Our Portfolio</h2>
            <p className="max-w-2xl mx-auto mt-4 text-lg text-gray-600 dark:text-gray-300">
              Our portfolio speaks for itself. Check out our latest projects and see the creativity,
              quality, and innovation we bring.
            </p>
          </div>

          {/* Category Filters */}
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
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 auto-rows-fr">
            {filteredItems.map((item, index) => {
              const videoId =
                item.category === "Video Production"
                  ? getYouTubeId(item.link)
                  : null;

              const thumbnailUrl = videoId
                ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                : "";

              return (
                <div
                  key={index}
                  className="relative flex flex-col justify-between h-full overflow-hidden bg-white shadow-lg rounded-2xl group dark:bg-dark-card"
                >
                  {/* VIDEO PROJECT */}
                  {item.category === "Video Production" && videoId ? (
                    playingVideos[index] ? (
                      <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden">
                        <iframe
                          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                          title={item.title}
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="w-full h-full"
                        ></iframe>
                      </div>
                    ) : (
                      <div
                        className="relative aspect-[16/9] w-full bg-black cursor-pointer rounded-2xl group overflow-hidden flex justify-center items-center"
                        onClick={() => handlePlayVideo(index)}
                      >
                        <img
                          src={thumbnailUrl}
                          alt={item.title}
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                          onError={(e) => {
                            e.target.onerror = null;
                            e.target.src = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
                          }}
                        />
                        <div className="absolute inset-0 transition-opacity duration-500 bg-gradient-to-t from-black/70 to-transparent opacity-80 group-hover:opacity-90"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="relative z-10 flex items-center justify-center w-20 h-20 transition-transform duration-300 transform bg-white rounded-full shadow-lg group-hover:scale-110">
                            <svg
                              className="w-10 h-10 text-brandNavy"
                              fill="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path d="M8 5v14l11-7z" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    )
                  ) : item.category === "Modern Web Design" ? 
                  (
            <div className="w-full overflow-y-auto h-96 rounded-2xl">
              <img
            src={item.image}
               alt={item.title}
             className="object-contain w-full h-auto transition-transform duration-500 group-hover:scale-105"
            />
               </div>
              ) : (
                    // ✅ DEFAULT: other categories with aspect ratio
                    <div className="aspect-[16/9] w-full rounded-2xl overflow-hidden bg-black">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  )}

                  {/* Overlay for non-video items */}
                  {item.category !== "Video Production" && (
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
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Clients & Footer */}
      <Clients />
      <SectionFooter />
    </div>
  );
};

export default Portfolio;
