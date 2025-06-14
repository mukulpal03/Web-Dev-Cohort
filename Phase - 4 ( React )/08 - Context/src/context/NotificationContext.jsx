import { createContext, useContext, useState } from "react";

const NotificationContext = createContext();

export function NotificationProvider({ children }) {
  const [count, setCount] = useState(0);

  const incNotification = () => {
    setCount((prev) => prev + 1);
  };

  const resetNotification = () => {
    setCount(0);
  };

  return (
    <NotificationContext.Provider
      value={{ count, incNotification, resetNotification }}
    >
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotification() {
  return useContext(NotificationContext);
}
