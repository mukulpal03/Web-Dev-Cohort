function App() {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Hello React")
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  React.createElement(App)
);
