import { useRoutes } from "react-router-dom";

import PagesInfo from "./PagesInfo";

const all_routes = [PagesInfo];

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
  return useRoutes(all_routes);
}
