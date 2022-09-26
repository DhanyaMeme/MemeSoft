import {
  customer,
  customerTransactions,
} from "../../redux/slices/customer/customer.selector";
import { useAppSelector } from "../../redux/store";
import { Container } from "../../ui-kits/Container";

export const Profile = () => {
  const { data: customerData } = useAppSelector(customer);
  const { data: customerTransactionsData } =
    useAppSelector(customerTransactions);

  return (
    <Container>
      <div></div>
    </Container>
  );
};
