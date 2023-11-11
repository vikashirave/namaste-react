/**
 * <div id="parent">
    <div id="child">
      <h1>i am h1 tag</h1>
      <h2>i am h2 tag</h2>
    </div>
    <div id="child">
      <h1>i am h1 tag</h1>
      <h2>i am h2 tag</h2>
    </div>
  </div>
 *
 */

const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h1", {}, "i am h2 tag"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "i am h1 tag"),
    React.createElement("h1", {}, "i am h2 tag"),
  ]),
]);
console.log("heading:-- ", heading);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log("root:-- ", root);
root.render(heading);
