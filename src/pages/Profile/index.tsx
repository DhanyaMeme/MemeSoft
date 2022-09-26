import { AddressWrapper } from "../../components/Profile/AddressWrapper";
import { PlanTransaction } from "../../components/Profile/PlanTransaction";
import {
  customer,
  customerTransactions,
} from "../../redux/slices/customer/customer.selector";
import {
  ICustomer,
  ICustomerTransaction,
} from "../../redux/slices/customer/customer.type";
import { useAppSelector } from "../../redux/store";
import { Container } from "../../ui-kits/Container";
import { IF } from "../../ui-kits/IF";
import { SectionHeader } from "../../ui-kits/Sections/SectionHeader/SectionHeader";
import { PageHeader } from "../../ui-kits/Wrappers/PageContent.styles";
import { isEmpty } from "../../utils/script";
import "./Style.scss";

export const Profile = () => {
  const { data: customerData } = useAppSelector(customer);
  const { data: customerTransactionsData } =
    useAppSelector(customerTransactions);

  return (
    <Container isNarrow>
      <PageHeader>
        <SectionHeader
          heading="My account"
          subHeading={`Welcome back, Dhanya`}
        />
      </PageHeader>
      <div className="PageLayout PageLayout PageLayout--breakLap">
        <div className="PageLayout__Section">
          <IF condition={!isEmpty(customerTransactionsData)}>
            <PlanTransaction
              customerTransctions={
                customerTransactionsData as ICustomerTransaction[]
              }
            />
          </IF>
        </div>
        <div className="PageLayout__Section PageLayout__Section--secondary">
          <IF condition={!isEmpty(customerData)}>
            <AddressWrapper customer={customerData as ICustomer} />
          </IF>
        </div>
      </div>
    </Container>
  );
};
