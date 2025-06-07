import React from "react";
import ReactDOM from "react-dom/client";

// React Element.
const Title = () => (
  <h1 className="title" tabIndex="8">
    Namste React functional compostition.
  </h1>
);

const jsxtext = (
  <div id="container">
    <Title />
    <h1 className="head" tabIndex="5">
      Namste react using jsx
    </h1>
  </div>
);
console.log(jsxtext);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxtext);
