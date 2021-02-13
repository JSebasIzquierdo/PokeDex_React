import logo from "./logo.svg";
import React from "react";
import "./App.css";
import RoutesPoke from "./routes/RoutesPoke";



function App() {
  return (
    <div className="App">
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      ></meta>

      <RoutesPoke />
    </div>
  );
}

export default App;
