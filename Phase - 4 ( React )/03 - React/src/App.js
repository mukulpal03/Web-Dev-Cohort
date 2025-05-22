import React from "https://esm.sh/react@19.1.0";
import ReactDOM from "https://esm.sh/react-dom@19.1.0/client";

function Chai({ name, price }) {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("p", {}, price),
  ]);
}

function App() {
  return React.createElement("div", {}, [
    React.createElement(Chai, { name: "Masala chai", price: "100" }),
    React.createElement(Chai, { name: "Lemon tea", price: "200" }),
    React.createElement(Chai, { name: "Ginger tea", price: "300" }),
  ]);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
