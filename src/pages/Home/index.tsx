import { useMemo } from "react";
import {
  EUBanner,
  JAPANBanner,
  LATINBanner,
  UKBanner,
  USABanner,
} from "../../assets/images";
import { SplitBanner } from "../../components/Banner/SplitBanner";
import { SiteInfo } from "../../components/SiteInfo";
import { CountryEnum } from "../../models/enums";
import { country } from "../../redux/slices/nav/nav.selector";
import { useAppSelector } from "../../redux/store";

export const Home = () => {
  const countryName = useAppSelector(country);

  const getLogo = (name = CountryEnum.USA) =>
    ({
      [CountryEnum.UK]: UKBanner,
      [CountryEnum.USA]: USABanner,
      [CountryEnum.EUROPE]: EUBanner,
      [CountryEnum.Latin]: LATINBanner,
      [CountryEnum.JAPAN]: JAPANBanner,
    }[name]);

  const computedBanner = useMemo(() => {
    return getLogo(countryName);
  }, [countryName]);

  return (
    <div>
      <SplitBanner url={computedBanner} title={countryName} />
      <SiteInfo />
    </div>
  );
};
