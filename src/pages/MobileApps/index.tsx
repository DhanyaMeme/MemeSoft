import { SplitBanner } from "../../components/Banner/SplitBanner";
import { SiteFeatures } from "../../components/SiteFeatures";
import { SiteInfo } from "../../components/SiteInfo";
import { ecommerceFeatureData, ecommerceInfoData } from "./data";

export const MobileApps = () => {
  return (
    <>
      <SplitBanner
        url={"images/homeBanner.png"}
        title="MOBILE APPS"
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
