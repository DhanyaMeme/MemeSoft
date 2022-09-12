import { Banner } from "../../components/Banner";
import { SiteFeatures } from "../../components/SiteFeatures";
import { SiteInfo } from "../../components/SiteInfo";

export const Home = () => {
  return (
    <>
      <Banner
        url={"images/homeBanner.png"}
        title="The easiest way to sell online in India"
        subTitle={[
          "Try one of the most powerful platforms on the market for free.",
          "No technical knowledge needed.",
        ]}
      />
      <SiteInfo />
      <SiteFeatures />
    </>
  );
};
