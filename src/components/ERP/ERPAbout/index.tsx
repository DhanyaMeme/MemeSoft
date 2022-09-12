import { PageWidth } from "../../../ui-kits/PageWidth";
import { SectionHeader } from "../../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import "./Style.scss";

export const ERPAbout = () => {
  return (
    <div className="ERPAbout">
      <SectionWrapper>
        <PageWidth isNarrow>
          <SectionHeader
            heading={
              <div
                className="Text--highlight"
                data-aos="zoom-in"
                data-aos-once="true"
              >
                Una aplicación para cada necesidad
              </div>
            }
          />
          <div className="Grid">
            <div
              className="Grid__Cell   1/2--lap-and-up"
              data-aos="fade-up-right"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <h1 className="Text--highlight">El fin de las</h1>
              <p className="Text--subdued">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
              <h1 className="Text--highlight">El fin de las</h1>
              <p className="Text--subdued">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Aperiam, ipsum sapiente aspernatur libero repellat quis
                consequatur ducimus quam nisi exercitationem omnis earum qui.
              </p>
            </div>
            <div
              className="Grid__Cell   1/2--lap-and-up"
              data-aos="fade-up-left"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="Grid ERPAbout__Composition">
                {Array.from(Array(6).keys()).map((x: number) => (
                  <div className="Grid__Cell 1/2--phone 1/3--tablet-and-up 1/3--lap-and-up">
                    <img
                      src="https://cdn.shopify.com/shopifycloud/brochure/assets/home/hero/in-hero-product-small-0c64c4c1013fc8ac477cb5ff62bf5b56b2903aec697e6b708b90d3b65a09baf8.jpg"
                      alt="sksk"
                      className="ERPAbout__Composition--image"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </PageWidth>
      </SectionWrapper>
    </div>
  );
};
