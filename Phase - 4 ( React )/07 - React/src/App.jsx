import { useEffect, useState } from "react";

function App() {
  const [url, setURL] = useState(
    "https://api.freeapi.app/api/v1/public/randomjokes/100"
  );
  const [joke, setJoke] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setJoke(data.data.content))
      .catch((error) => console.log(error));
  }, [url]);

  function generateURL() {
    const id = Math.floor(Math.random() * 501);

    setURL(`https://api.freeapi.app/api/v1/public/randomjokes/${id}`);
  }

  return (
    <div>
      <div>{joke}</div>
      <button onClick={generateURL}>Get Joke</button>
    </div>
  );
}

export default App;
