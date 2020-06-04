import React from "react";
import countryData from "./data/countriesAll.json";
import Countries from "./Countries";
import Header from "./Header";

import "./App.css";

function App() {
  return (
    <div>
      <Header />

      <Countries data={countryData} />
    </div>
  );
}

export default App;
