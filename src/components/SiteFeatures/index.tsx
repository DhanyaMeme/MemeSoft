import { PageWidth } from "../../ui-kits/PageWidth";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import { PillarsWrapper } from "./PillarsWrapper";
import "./Style.scss";

export const SiteFeatures = () => {
  return (
    <SectionWrapper isbordered>
      <PageWidth isNarrow>
        <SectionHeader
          heading="With you wherever you’re going"
          subHeading="One platform with all the ecommerce and point of sale features you need to start, run, and grow your business."
        />
        <>
          <PillarsWrapper />
          <PillarsWrapper isReverse={true} />
          <PillarsWrapper />
        </>
      </PageWidth>
    </SectionWrapper>
  );
};
