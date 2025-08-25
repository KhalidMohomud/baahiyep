import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Force scroll to top on route change
    window.scrollTo(0, 0);
    
    // Also reset scroll position for any scrollable containers
    const scrollableElements = document.querySelectorAll('.scrollable, [data-scrollable]');
    scrollableElements.forEach(element => {
      if (element.scrollTop !== 0) {
        element.scrollTop = 0;
      }
    });
  }, [pathname]);
};

export default useScrollToTop;
