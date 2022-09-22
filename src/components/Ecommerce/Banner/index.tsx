import { Features } from "./Features";
import { HeroBanner } from "./HeroBanner";
import { InfoBanner } from "./InfoBanner";
import "./Style.scss";

export const Banner = () => {
  return (
    <div className="page">
      <div className="containerproblem">
        <HeroBanner />
        <InfoBanner />
        <Features />
      </div>
    </div>
  );
};
