import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const scrollToTop = () => {
 const pathname = useLocation(); // Get the current path

 useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    }); // On page mount scroll to the top of the page
  }, [pathname]);

  return null;
};

export default scrollToTop;