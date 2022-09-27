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
        <h2>Enterprise Resource Planning</h2>
        <h1>un software increíble</h1>
        <p>
          An ERP system can automate, simplify and evaluate most accounting
          processes.
          <br />
          What can take employees days to analyze and compute can be achieved
          within minutes using an ERP solution.
        </p>
        <ButtonGroup className="ERP__Hero--btns">
          <TextButton isSmall buttonType={BUTTON_TYPE_CLASSES.overlay}>
            REGISTER
          </TextButton>
          <TextButton isSmall buttonType={BUTTON_TYPE_CLASSES.overlay}>
            LOGIN
          </TextButton>
        </ButtonGroup>
      </div>
    </div>
  );
};
