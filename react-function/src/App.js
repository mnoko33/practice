import React from "react";
import "./App.css";
import Props from "./components/Props";
import State from "./components/State";
import UseEffect from "./components/UseEffect";
import BulkData from "./components/BulkData";

function App() {
  return (
    <div className="App">
      {/* <Props name="mnoko" age={29} job="FE developer" />
      <State />
      <UseEffect /> */}
      <BulkData />
    </div>
  );
}

export default App;
