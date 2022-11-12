import { useMemo } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

function usePath() {
  const { pathname } = useLocation();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const path = useMemo(() => {
    const pathArray = pathname.split("/").filter(Boolean);
    return pathArray[0];
  }, [pathname]);

  const getSearchParams = (name: string) => {
    return searchParams.get(name);
  };

  return { path, params, getSearchParams };
}

export default usePath;
