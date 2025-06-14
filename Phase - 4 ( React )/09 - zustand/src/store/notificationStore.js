import { create } from "zustand";

const useNotificationStore = create((set) => ({
  count: 0,

  incNotification: () => set((state) => ({ count: state.count + 1 })),

  resetNotification: () => set(() => ({ count: 0 })),
}));

export default useNotificationStore;
