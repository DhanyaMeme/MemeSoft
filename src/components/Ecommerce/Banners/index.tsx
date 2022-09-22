import { Features } from "./Features";
import { HeroDeskBanner } from "./HeroDesk";
import { HeroMobileBanner } from "./HeroMobile";
import "./Style.scss";

export const Banners = () => {
  return (
    <div className="Ecom_Container"  >
      <div className="containerproblem">
        <HeroMobileBanner />
        <HeroDeskBanner />
        <Features />
      </div>
    </div>
  );
};
