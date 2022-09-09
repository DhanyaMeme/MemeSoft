import { Navbar } from "./pages/Navbar";
import { Banner } from "./components/Banner";

import "./App.scss";
import { SiteInfo } from "./components/SiteInfo";
import { SiteFeatures } from "./components/SiteFeatures";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <SiteInfo />
      <SiteFeatures />
    </div>
  );
}

export default App;
