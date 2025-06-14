import { useNotification } from "../context/NotificationContext";

function Notification() {
  const { incNotification, resetNotification } = useNotification();

  return (
    <div>
      <button onClick={incNotification}>increase</button>
      <button onClick={resetNotification}>reset</button>
    </div>
  );
}

export default Notification;
