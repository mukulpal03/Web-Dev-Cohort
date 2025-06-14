import "./App.css";
import Notification from "./components/Notification";
import { useNotification } from "./context/NotificationContext";

function App() {
  const { count } = useNotification();

  return (
    <>
      {count}
      <Notification />
    </>
  );
}

export default App;
