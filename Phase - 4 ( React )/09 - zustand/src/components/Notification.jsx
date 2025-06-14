import useNotificationStore from "../store/notificationStore";

function Notification() {
  const { incNotification, resetNotification } = useNotificationStore();

  return (
    <div>
      <button onClick={incNotification}>increase</button>
      <button onClick={resetNotification}>reset</button>
    </div>
  );
}

export default Notification;
