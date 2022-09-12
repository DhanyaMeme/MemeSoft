import { FC } from "react";
import LazyLoad from "../../ui-kits/LazyComponent";
import { PageWidth } from "../../ui-kits/PageWidth";
import { UserIcon } from "../../assets/icons/User.icon";
import { ImageWrapper } from "../../ui-kits/ImageWrapper";
import { IFeature, IInfoProps } from "../../models/interfaces";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import "./Style.scss";

interface IProps {
  data: IInfoProps;
}

export const SiteInfo: FC<IProps> = (props: IProps) => {
  const { banner, feature } = props.data;

  return (
    <div className="SiteInfo">
      <SectionWrapper isbordered>
        <PageWidth isNarrow>
          <SectionHeader heading={banner.title} subHeading={banner.subTitle} />
          <div className="CollectionList Grid">
            {banner.images.map((item: string, index: number) => (
              <LazyLoad
                tag="div"
                key={index}
                className="Grid__Cell 1/2--phone 1/2--tablet-and-up 1/4--lap-and-up"
              >
                <div
                  className="CollectionItem__Wrapper"
                  data-aos="flip-left"
                  data-aos-easing="linear"
                  data-aos-duration="2000"
                  data-aos-once="true"
                >
                  <div className="CollectionItem__ImageWrapper">
                    <ImageWrapper
                      src={item}
                      alt="collectionImage"
                      classes="CollectionItem__Image Image--contrast Image--zoomOut"
                    />
                  </div>
                </div>
              </LazyLoad>
            ))}
          </div>
          <SectionHeader heading="Take the best path forward" />
          <div className="CollectionList Grid">
            {feature.map((item: IFeature, index: number) => (
              <LazyLoad
                tag="div"
                key={index}
                className="Grid__Cell 1/2--phone 1/2--tablet-and-up 1/4--lap-and-up"
              >
                <div
                  className="CollectionItem__Wrapper"
                  data-aos="flip-left"
                  data-aos-duration="3000"
                  data-aos-once="true"
                >
                  <UserIcon />
                  <h3 className="Heading">{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              </LazyLoad>
            ))}
          </div>
        </PageWidth>
      </SectionWrapper>
    </div>
  );
};
