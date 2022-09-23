import { SocialIcons } from "../../assets/icons/Social.icon";

export const FooterContactInfo = () => {
  return (
    <div className="Footer__Block Footer__Block--text u-h5">
      <h4 className="Footer__Title Heading">STAY CONNECTED</h4>
      <div className="Footer__Content Rte">
        <p>For any queries or order updates get in touch with our team at:</p>
        <p>cs@memesoft.com</p>
        <p>M-F 9 - 5 pm &amp; S 9 - 1 pm IST</p>
      </div>
      <ul className="Footer__Social HorizontalList HorizontalList--spacingLoose">
        {SocialIcons.map((child: any, index: number) => (
          <li className="HorizontalList__Item" key={index}>
            <a href="/" className="Link Link--primary">
              <span className="Icon-Wrapper--clickable">{child}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
