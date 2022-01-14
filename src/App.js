import "./App.scss";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "boxicons";
import Banner from "./components/Banner/Banner";
import ExploreNearby from "./components/ExploreNearby/ExploreNearby";
import LiveAnywhere from "./components/LiveAnywhere/LiveAnywhere";
import DiscoverThingsToDo from "./components/DiscoverThings/DiscoverThingsToDo";
import TryHosting from "./components/TryHosting/TryHosting";
import React, { useContext, useState } from "react";
import ThemeContextProvider from "./context/ThemeContext";

function App() {
  const [advanceSearch, setAdvanceSearch] = useState(false);

  return (
    <ThemeContextProvider>
      <div className={advanceSearch ? "App no-scrolling" : "App"}>
        <Header
          advanceSearch={advanceSearch}
          setAdvanceSearch={setAdvanceSearch}
        />
        <Banner />
        <ExploreNearby />
        <LiveAnywhere />
        <DiscoverThingsToDo />
        <TryHosting />
        <Footer />
      </div>
    </ThemeContextProvider>
  );
}

export default App;
