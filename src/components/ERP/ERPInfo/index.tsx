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
              <img
                src="https://odoocdn.com/openerp_website/static/src/img/2016/crm/ipad-landscape-mockup.png"
                alt="erp"
              />
            </div>
            <div
              className="Grid__Cell 1/2--lap-and-up"
              data-aos="fade-up-left"
              data-aos-duration="1500"
              data-aos-once="true"
            >
              <div className="ERPInfo__Content">
                <h2 className="Heading">integraciones problemáticas</h2>
                <p>
                  Si tienes soluciones de software individuales que funcionan,
                  pero no se comunican entre sí, probablemente estás ingresando
                  cosas más de una vez y te estás perdiendo una descripción
                  general completa de lo que está sucediendo.
                </p>
                <p>
                  Si tienes soluciones de software individuales que funcionan,
                  pero no se comunican entre sí, probablemente estás ingresando
                  cosas más de una vez y te estás perdiendo una descripción
                  general completa de lo que está sucediendo.
                </p>
                <p>
                  Si tienes soluciones de software individuales que funcionan,
                  pero no se comunican entre sí, probablemente estás ingresando
                  cosas más de una vez y te estás perdiendo una descripción
                  general completa de lo que está sucediendo.
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
