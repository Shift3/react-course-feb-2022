import React from "react";
import ReactDOM from "react-dom";
import Animal from "./Animal";

const App = () => {
  return (
    <div>
      <h1>Animal Acquisation</h1>
      <Animal name="Luna" type="dog" breed="Havanese" />
      <Animal name="Pepper" type="bird" breed="Cockatiel" />
      <Animal name="Doink" type="cat" breed="Mix" />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
