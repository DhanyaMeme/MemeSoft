import AOS from "aos";
import { useEffect } from "react";
import Routes from "./routes";
import { store } from "./redux/store";
import LayoutWrapper from "./layout/LayoutWrapper";
import { StateAndRouterProvider } from "./StateAndRouterProvider";
import NavigationScroll from "./ui-kits/NavigationScroll/NavigationScroll";
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
        <NavigationScroll>
          <Routes />
        </NavigationScroll>
      </LayoutWrapper>
    </StateAndRouterProvider>
  );
}

export default App;
