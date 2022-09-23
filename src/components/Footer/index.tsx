import { Services } from "./Services";
import { NewsLetter } from "./NewsLetter";
import { FooterAboutUs } from "./FooterAboutUs";
import { Container } from "../../ui-kits/Container";
import { footerLinks, IFooterLinks } from "./data/data";
import "./Style.scss";

export const Footer = () => {
  return (
    <footer className="Footer ">
      <Container>
        <div className="Footer__Inner u-h5">
          <FooterAboutUs />
          {footerLinks.map((item: IFooterLinks) => (
            <Services links={item} key={item.title} />
          ))}
          <NewsLetter />
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
