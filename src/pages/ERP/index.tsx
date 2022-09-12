import { ERPInfo } from "../../components/ERP/ERPInfo";
import { ERPAbout } from "../../components/ERP/ERPAbout";
import { ERPBanner } from "../../components/ERP/ERPBanner";

export const ERP = () => {
  return (
    <>
      <ERPBanner />
      <ERPAbout />
      <ERPInfo />
    </>
  );
};
