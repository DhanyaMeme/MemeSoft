import { useMemo } from "react";
import { useLocation } from "react-router-dom";

function usePath() {
  const { pathname } = useLocation();

  const path = useMemo(() => {
    const pathArray = pathname.split("/").filter(Boolean);
    return pathArray[0];
  }, [pathname]);

  return path;
}

export default usePath;
