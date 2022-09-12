import { FC } from "react";
import { PillarsWrapper } from "./PillarsWrapper";
import { PageWidth } from "../../ui-kits/PageWidth";
import { IFeatureProps, IPillar } from "../../models/interfaces";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import "./Style.scss";

interface IProps {
  data: IFeatureProps;
}

export const SiteFeatures: FC<IProps> = (props: IProps) => {
  const { title, subTitle, pillars } = props.data;
  return (
    <SectionWrapper isbordered>
      <PageWidth isNarrow>
        <SectionHeader heading={title} subHeading={subTitle} />
        {pillars.map((item: IPillar, index: number) => (
          <PillarsWrapper
            isReverse={index % 2 !== 0}
            pillarData={item}
            key={index}
          />
        ))}
      </PageWidth>
    </SectionWrapper>
  );
};
