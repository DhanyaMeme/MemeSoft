import { UserIcon } from "../../assets/icons/User.icon";
import { ImageWrapper } from "../../ui-kits/ImageWrapper";
import LazyLoad from "../../ui-kits/LazyComponent";
import { PageWidth } from "../../ui-kits/PageWidth";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import "./Style.scss";

export const SiteInfo = () => {
  return (
    <div className="SiteInfo">
      <SectionWrapper isbordered>
        <PageWidth isNarrow>
          <SectionHeader
            heading="Bring your business online"
            subHeading="Create an ecommerce website backed by powerful tools that help you find customers, drive sales, and manage your day-to-day."
          />
          <div className="CollectionList Grid">
            {Array.from(Array(4).keys()).map((item: number, index: number) => (
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
                      src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/blue-tokai/home-example-small-4144844351e226a9896cffee4bebdaeecb17897116c33a753bfd086b8b621e74.jpg"
                      alt="collectionImage"
                      classes="CollectionItem__Image Image--contrast Image--zoomOut"
                    />
                  </div>
                  <div className="CollectionItem__Content Heading">
                    <h5 className="UnderLined__Text">Blue Tokai</h5>
                  </div>
                </div>
              </LazyLoad>
            ))}
          </div>
          <SectionHeader heading="Take the best path forward" />
          <div className="CollectionList Grid">
            {Array.from(Array(4).keys()).map((item: number, index: number) => (
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
                  <h3 className="Heading">Hire a Shopify expert</h3>
                  <p>
                    Get set up with the help of a trusted freelancer or agency
                    from the Shopify Experts Marketplace.
                  </p>
                </div>
              </LazyLoad>
            ))}
          </div>
        </PageWidth>
      </SectionWrapper>
    </div>
  );
};
