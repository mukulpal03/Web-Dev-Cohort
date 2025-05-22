import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

function App() {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "React"),
    React.createElement("h1", {}, "React"),
    React.createElement("h1", {}, "React"),
    React.createElement("h1", {}, "React"),
  ]);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
