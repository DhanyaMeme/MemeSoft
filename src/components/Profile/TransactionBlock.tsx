import { ICustomerTransaction } from "../../redux/slices/customer/customer.type";

interface IProps {
  transaction: ICustomerTransaction;
}

export const TransactionBlock = (props: IProps) => {
  const { transaction } = props;

  return (
    <div className="Spec-TableContainer">
      {Object.entries(transaction).map(([key, value]) => {
        return (
          <div className="Spec-Row" key={key}>
            <div className="Spec-RowKey u-h6">{key}</div>
            <div className="Spec-RowValue u-h7">{value}</div>
          </div>
        );
      })}
    </div>
  );
};
