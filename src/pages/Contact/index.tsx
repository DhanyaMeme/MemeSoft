import { ContactForm } from "../../components/ContactForm";
import { Container } from "../../ui-kits/Container";
import {
  PageContent,
} from "../../ui-kits/Wrappers/PageContent.styles";

export const Contact = () => {
  return (
    <Container>
      <PageContent isNarrow>
        <ContactForm />
      </PageContent>
    </Container>
  );
};
