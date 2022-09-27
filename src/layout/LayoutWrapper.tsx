import { FC, ReactNode, useEffect } from "react";
import { Footer } from "../components/Footer";
import { useAuth } from "../context/AuthContext";
import useElementSize from "../custom-hooks/useElementSize";
import useWindowSize from "../custom-hooks/useWindowSize";
import { NavBar } from "../pages/Navbar";
import {
  fetchCustomer,
  fetchCustomerTransactions,
} from "../redux/slices/customer/customer.reducer";
import { fetchSubcription } from "../redux/slices/nav/nav.reducer";
import { useAppDispatch } from "../redux/store";
import { ScrollTop } from "../ui-kits/ScrollTop/ScrollTop";

interface LayoutProps {
  children: ReactNode;
}

const LayoutWrapper: FC<LayoutProps> = ({ children }) => {
  const dispatch = useAppDispatch();
  const { width, height } = useWindowSize();
  const [headerRef, { height: headerHeight }] = useElementSize();

  const { user } = useAuth();

  useEffect(() => {
    dispatch(fetchSubcription());
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      dispatch(fetchCustomer(user));
      dispatch(fetchCustomerTransactions(user));
    }
  }, [user, dispatch]);

  useEffect(() => {
    const windowheight = `${height}px`;
    const header__Height = `${headerHeight}px`;
    document.documentElement.style.setProperty("--window-height", windowheight);
    document.documentElement.style.setProperty(
      "--header-height",
      header__Height
    );
  }, [width, height, headerHeight]);

  return (
    <>
      <ScrollTop />
      <NavBar ref={headerRef} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default LayoutWrapper;
