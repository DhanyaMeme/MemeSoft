import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// ==============================|| NAVIGATION SCROLL TO TOP ||============================== //

type NavigationScrollProps = {
  children: JSX.Element;
};

const NavigationScroll = ({ children }: NavigationScrollProps) => {
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return children || null;
};

export default NavigationScroll;
