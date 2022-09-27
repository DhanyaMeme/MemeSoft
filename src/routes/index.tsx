import { useRoutes } from "react-router-dom";
import AuthRoutes from "./AuthRoutes";
import PagesInfo from "./PagesInfo";

const all_routes = [PagesInfo, AuthRoutes];

// ==============================|| ROUTING RENDER ||============================== //

export default function Routes() {
  return useRoutes(all_routes);
}
