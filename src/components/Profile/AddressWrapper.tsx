import React, { FC } from "react";
import { ICustomer } from "../../redux/slices/customer/customer.type";
import { TextButton } from "../../ui-kits/TextButton/TextButton.component";

interface IProps {
  customer: ICustomer;
}

export const AddressWrapper: FC<IProps> = (props: IProps) => {
  const { customer } = props;

  return (
    <div className="Segment">
      <h5 className="Segment__Title Heading">Company address</h5>
      <div className="Segment__Content">
        <p>
          {customer.street1} &nbsp;{customer.street2}
          <br />
          {customer.city}, {customer.state}, {customer.zip}
          <br />
          <span className="mobile">☎ : {customer.email}</span>
          <br />
          <span className="mobile">✉ : {customer.phone}</span>
          <br />
          {customer.country}
        </p>
        <div className="Segment__ButtonWrapper">
          <TextButton isSmall>LOGOUT</TextButton>
        </div>
      </div>
    </div>
  );
};
