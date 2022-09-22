import { PageWidth } from "../../../ui-kits/PageWidth";
import { SectionWrapper } from "../../../ui-kits/Sections/SectionWrapper/SectionWrapper";
import "./Style.scss";

export const ERPInfo = () => {
  return (
    <div className="ERPInfo">
      <SectionWrapper isbordered>
        <PageWidth isNarrow>
          <div className="Grid">
            <div
              className="Grid__Cell 1/2--lap-and-up"
              data-aos="fade-up-right"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <img src="images/erp/erp_sm.png" alt="erp" />
            </div>
            <div
              className="Grid__Cell 1/2--lap-and-up"
              data-aos="fade-up-left"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="ERPInfo__Content">
                <h2 className="Heading">
                  Share real-time insights through a centralized data repository
                </h2>
                <p>
                  ➳ When people talk and write about ERP, the centralization of
                  data and real-time information is one of the most prominently
                  mentioned benefits. Because an ERP system contains data from
                  across a business in one location, users can easily access
                  insights from other areas of a company to inform analyses.
                  This “desiloing” of information leads to more accurate
                  insights and can lead to improved workflows.
                </p>
                <p>
                  ➳ For example, if the financial team has data insights on how
                  many projects run over budget as segmented by department, this
                  information could be easily accessed by the departments
                  themselves without the need for the financial team to compile
                  a special report. This increases productivity and information
                  accessibility. In fact, some new data points might even be
                  revealed that weren’t easily available when the information
                  was contained on different computers and siloed by department.
                  Alleviating the burden on other teams to compile statistical
                  documents related to certain business aspects is a key benefit
                  of ERP.
                </p>
                <div className="ERPInfo__Testimonial">
                  <div className="thumb">
                    <img
                      src="https://odoocdn.com/openerp_website/static/src/img/2016/testimonials/marc_peeters_sodexo.png"
                      alt="erp"
                    />
                  </div>
                  <blockquote>
                    <p>
                      “Hemos reemplazado 14 aplicaciones diferentes y hemos
                      aumentado las ganancias en un 10% de la noche a la
                      mañana.”
                    </p>
                    <i>
                      _ Marc Peeters, director general de la Divisón de Ventas
                    </i>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </PageWidth>
      </SectionWrapper>
    </div>
  );
};
