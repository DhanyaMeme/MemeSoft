import { SplitBanner } from "../../components/Banner/SplitBanner";
import { SiteInfo } from "../../components/SiteInfo";

export const Home = () => {
  return (
    <div>
      <SplitBanner
        url={"images/homeBanner.png"}
        title="The easiest way to sell online in Global"
        subTitle={[
          "Try one of the most powerful platforms on the market for free.",
          "No technical knowledge needed.",
        ]}
      />
      <SiteInfo />
    </div>
  );
};
