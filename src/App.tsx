import { useEffect } from "react";
import Routes from "./routes";
import AOS from "aos";
import { store } from "./redux/store";
import LayoutWrapper from "./layout/LayoutWrapper";
import { StateAndRouterProvider } from "./StateAndRouterProvider";
import "aos/dist/aos.css";
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <StateAndRouterProvider store={store}>
      <LayoutWrapper>
        <Routes />
      </LayoutWrapper>
    </StateAndRouterProvider>
  );
}

export default App;
