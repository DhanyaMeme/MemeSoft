import { SiteInfo } from "../../components/SiteInfo";
import { Banners } from "../../components/Ecommerce/Banners";
import { SiteFeatures } from "../../components/SiteFeatures";
import { ecommerceFeatureData, ecommerceInfoData } from "./data";

export const Ecommerce = () => {
  return (
    <>
      {/* <SplitBanner
        url={"images/homeBanner.png"}
        title="YOUR ONE ECOMMERCE SHOP"
        subTitle={[
          "Try one of the most powerful platforms on the market for free.",
          "No technical knowledge needed.",
        ]}
      /> */}
      <Banners />
      <SiteInfo data={ecommerceInfoData} />
      <SiteFeatures data={ecommerceFeatureData} />
    </>
  );
};
