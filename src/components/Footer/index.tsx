import { Container } from "../../ui-kits/Container";
import { footerLinks, IFooterLinks } from "./data/data";
import { FooterContactInfo } from "./FooterContactInfo";
import { FooterNewsLetter } from "./FooterNewsLetter";
import { FooterServices } from "./FooterServices";
import "./Style.scss";

export const Footer = () => {
  return (
    <footer className="Footer ">
      <Container>
        <div className="Footer__Inner u-h5">
          <FooterContactInfo />
          {footerLinks.map((item: IFooterLinks) => (
            <FooterServices links={item} key={item.title} />
          ))}
          <FooterNewsLetter />
        </div>
        <div className="Footer__Aside">
          <div className="Footer__Copyright">
            <a href="/" className="Heading u-h6 Link Link--secondary">
              © 2022 Snugglz. <span className="u-h7">ALL RIGHTS RESERVED</span>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
