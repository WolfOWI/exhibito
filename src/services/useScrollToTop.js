import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const useScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const scrollToTop = () => {
      window.scrollTo(0, 0);
    };

    const handleScroll = () => {
      // Add a slight delay to ensure the page is fully rendered
      setTimeout(scrollToTop, 100);
    };

    handleScroll();
  }, [pathname]);
};

export default useScrollToTop;
