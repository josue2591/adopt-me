import React from "react";
import { render } from "react-dom";
// import { Pet } from "./Pet";
// As a function
import Pet from "./Pet";
import SearchParams from "./SearchParams";

const App = () => {
  // return React.createElement("div", { id: "test-class" }, [
  //   React.createElement("h1", {}, "Adopt me"),
  //   React.createElement(Pet, {
  //     name: "Niebla",
  //     animal: "Cat",
  //     breed: "Mixed",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Juanita",
  //     animal: "Parrot",
  //     breed: "WHNS",
  //   }),
  //   React.createElement(Pet, {
  //     name: "Lucas",
  //     animal: "dog",
  //     breed: "labrador mixed with street dog ",
  //   }),
  // ]);
  return (
    <div>
      <h1 id="test-class">Adopt e</h1>
      {/* <Pet name="Niebla" animal="Cat" breed="Mixed" /> */}
      <SearchParams />
    </div>
  );
};

render(<App />, document.getElementById("root"));
