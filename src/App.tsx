import { useEffect } from "react";
import Routes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";
import { StateAndRouterProvider } from "./StateAndRouterProvider";
import { store } from "./redux/store";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <StateAndRouterProvider store={store}>
      <Routes />
    </StateAndRouterProvider>
  );
}

export default App;
