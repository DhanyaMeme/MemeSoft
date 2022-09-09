import { Fragment, useEffect } from "react";
import Routes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.scss";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Fragment>
      <div>
        <Routes />
      </div>
    </Fragment>
  );
}

export default App;
