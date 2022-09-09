import { Banner } from "../../components/Banner";
import { SiteFeatures } from "../../components/SiteFeatures";
import { SiteInfo } from "../../components/SiteInfo";
import { Navbar } from "../Navbar";

export const Home = () => {
  return (
    <>
      <Banner />
      <SiteInfo />
      <SiteFeatures />
    </>
  );
};
