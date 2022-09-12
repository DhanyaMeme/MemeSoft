import {
  BUTTON_TYPE_CLASSES,
  TextButton,
} from "../../../ui-kits/TextButton/TextButton.component";
import { ButtonGroup } from "../../../ui-kits/TextButton/TextButton.styles";
import "./Style.scss";

export const ERPBanner = () => {
  return (
    <div className="ERP__Hero" data-aos="zoom-in-up">
      <div className="ERP__Hero--Content Heading">
        <h2>Empleados increíbles merecen</h2>
        <h1>un software increíble</h1>
        <p>
          La única plataforma que necesitarás para manejar tu negocio:
          <br />
          aplicaciones integradas, sencillas, y adoradas por millones de
          usuarios felices.
        </p>
        <ButtonGroup className="ERP__Hero--btns">
          <TextButton isSmall buttonType={BUTTON_TYPE_CLASSES.overlay}>
            Register
          </TextButton>
          <TextButton isSmall buttonType={BUTTON_TYPE_CLASSES.overlay}>
            Login
          </TextButton>
        </ButtonGroup>
      </div>
    </div>
  );
};
