import { FC } from "react";
import { ICustomerTransaction } from "../../redux/slices/customer/customer.type";
import { TransactionBlock } from "./TransactionBlock";

interface IProps {
  customerTransctions: ICustomerTransaction[];
}

export const PlanTransaction: FC<IProps> = (props: IProps) => {
  const { customerTransctions } = props;

  return (
    <div className="Segment">
      <h5 className="Segment__Title Heading">Plan Transactions</h5>
      <div className="Segment__Content">
        <div className="Grid">
          {customerTransctions.map((plan: ICustomerTransaction) => (
            <div
              className="Grid__Cell 1/1--phone 1/2--tablet-and-up 1/2--desk"
              key={plan.tid}
            >
              <TransactionBlock />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
