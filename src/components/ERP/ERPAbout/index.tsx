import { PageWidth } from "../../../ui-kits/PageWidth";
import { SectionHeader } from "../../../ui-kits/Sections/SectionHeader/SectionHeader";
import { SectionWrapper } from "../../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import { erpDefData, erpHelpsData } from "../data";
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
                What is Enterprise Resource Planning?
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
              <h3 className="Heading Text--highlight">
                Integrate and synchronize business processes
              </h3>
              <ul className="Text--subdued Linklist">
                {erpDefData.map((item: string, i: number) => (
                  <li className="Linklist__Item" key={i}>
                    {item}
                  </li>
                ))}
              </ul>
              <br />
              <h3 className="Heading Text--highlight">
                Enterprise Resource Planning helps you:
              </h3>
              <ul className="Text--subdued Linklist">
                {erpHelpsData.map((item: string, i: number) => (
                  <li className="Linklist__Item" key={i}>
                    ★ &nbsp; {item}
                  </li>
                ))}
              </ul>
            </div>
            <div
              className="Grid__Cell   1/2--lap-and-up"
              data-aos="fade-up-left"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="Grid ERPAbout__Composition">
                {Array.from(Array(6).keys()).map((x: number) => (
                  <div
                    className="Grid__Cell 1/2--phone 1/2--tablet-and-up"
                    key={x}
                  >
                    <img
                      src={`images/erp/collection/about${x + 1}.png`}
                      alt="ERPAbout"
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
