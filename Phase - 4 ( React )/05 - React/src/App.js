function Chai() {
  return (
    <div>
      <h1>Masala chai</h1>
      <p>100</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Chai />
      <Chai />
      <Chai />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(React.createElement(App));
