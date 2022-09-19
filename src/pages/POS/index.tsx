import { Banner } from "../../components/Banner";
import { SiteFeatures } from "../../components/SiteFeatures";
import { SiteInfo } from "../../components/SiteInfo";
import { ecommerceFeatureData, ecommerceInfoData } from "./data";

export const POS = () => {
  return (
    <>
      <Banner
        url={"images/homeBanner.png"}
        title="POS"
        subTitle={[
          "Try one of the most powerful platforms on the market for free.",
          "No technical knowledge needed.",
        ]}
      />
      <SiteInfo data={ecommerceInfoData} />
      <SiteFeatures data={ecommerceFeatureData} />
    </>
  );
};
