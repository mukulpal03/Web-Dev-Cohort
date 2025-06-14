import "./App.css";
import Notification from "./components/Notification";
import useNotificationStore from "./store/notificationStore";

function App() {
  const { count } = useNotificationStore();
  return (
    <>
      <div>
        {count}
        <Notification />
      </div>
    </>
  );
}

export default App;
