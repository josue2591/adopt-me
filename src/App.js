import React from "react";
import { render } from "react-dom";
// import { Pet } from "./Pet";
// As a function
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  return (
    <div>
      <h1 id="test-class">Adopt e</h1>
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
