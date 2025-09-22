import portfolioData from '../data/portfolioData.json';

/**
 * Get all portfolio categories
 * @returns {Array} Array of category strings
 */
export const getCategories = () => {
  return portfolioData.categories;
};

/**
 * Get all portfolio items
 * @returns {Array} Array of portfolio item objects
 */
export const getPortfolioItems = () => {
  return portfolioData.portfolioItems;
};

/**
 * Get portfolio items filtered by category
 * @param {string} category - The category to filter by
 * @returns {Array} Array of filtered portfolio item objects
 */
export const getPortfolioItemsByCategory = (category) => {
  if (category === 'All') {
    return portfolioData.portfolioItems;
  }
  return portfolioData.portfolioItems.filter(item => item.category === category);
};

/**
 * Get a specific portfolio item by ID
 * @param {number} id - The ID of the portfolio item
 * @returns {Object|null} The portfolio item object or null if not found
 */
export const getPortfolioItemById = (id) => {
  return portfolioData.portfolioItems.find(item => item.id === id) || null;
};

/**
 * Get portfolio items for the main portfolio section (limited items)
 * @param {number} limit - Maximum number of items to return
 * @returns {Array} Array of portfolio item objects
 */
export const getMainPortfolioItems = (limit = 6) => {
  return portfolioData.portfolioItems.slice(0, limit);
};

/**
 * Check if a category exists
 * @param {string} category - The category to check
 * @returns {boolean} True if category exists, false otherwise
 */
export const isValidCategory = (category) => {
  return portfolioData.categories.includes(category);
};
