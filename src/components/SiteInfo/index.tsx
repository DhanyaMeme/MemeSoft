import { useMemo } from "react";
import { infoData } from "../../mocks/infoData";
import { country } from "../../redux/slices/nav/nav.selector";
import { useAppSelector } from "../../redux/store";
import { Container } from "../../ui-kits/Container";
import {
  PageContent,
  PageHeader,
} from "../../ui-kits/Wrappers/PageContent.styles";

export const SiteInfo = () => {
  const countryName = useAppSelector(country);

  const computedData = useMemo(() => {
    return infoData[countryName];
  }, [countryName]);

  return (
    <Container>
      <PageContent>
        <PageHeader>
          <h1 className="Heading Text--alignCenter Text--highlight">
            {` WHY MADE IN ${countryName} MATTERS`}
          </h1>
        </PageHeader>
        {computedData.map((item: string, i: number) => (
          <p key={i}>{item}</p>
        ))}
        <br />
        <h4 className="Heading">
          <div>Pan Pan</div>
          <div>Foundar</div>
          <div>2504.ORG</div>
          <div>{`Commit to Made In ${countryName}`}</div>
        </h4>
      </PageContent>
    </Container>
  );
};
