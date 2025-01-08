import { persist } from "zustand/middleware";
import { create } from "zustand/react";

export const useChatHistoryStore = create()(
  persist(
    (set) => ({
      messages: [],
      addMessage: (message) =>
        set((state) => ({ messages: [...state.messages, message] })),
    }),
    { name: "chat-history" }
  )
);
