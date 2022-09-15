import { useMemo } from "react";
import { useLocation, useParams } from "react-router-dom";

function usePath() {
  const { pathname } = useLocation();
  const params = useParams();

  const path = useMemo(() => {
    const pathArray = pathname.split("/").filter(Boolean);
    return pathArray[0];
  }, [pathname]);

  return { path, params };
}

export default usePath;
