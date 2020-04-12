import React from "react";
import { render } from "react-dom";
// import { Pet } from "./Pet";
// As a function
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", { id: "test-class" }, [
    React.createElement("h1", {}, "Adopt me"),
    React.createElement(Pet, {
      name: "Niebla",
      animal: "Cat",
      breed: "Mixed",
    }),
    React.createElement(Pet, {
      name: "Juanita",
      animal: "Parrot",
      breed: "WHNS",
    }),
    React.createElement(Pet, {
      name: "Lucas",
      animal: "dog",
      breed: "labrador",
    }),
  ]);
};

render(React.createElement(App), document.getElementById("root"));
