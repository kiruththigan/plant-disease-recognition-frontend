import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Message } from "ai";

interface ChatbotStore {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const useChatbotStore = create<ChatbotStore>()((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen: isOpen }),
}));

// chat histrory localstorage
interface ChatState {
  messages: Message[];
  addMessage: (message: Message) => void;
  addInitialMessage: () => void;
  clearMessages: () => void;
}

export const useChatStore = create<ChatState>()(
  persist(
    (set) => ({
      messages: [],
      addMessage: (message) =>
        set((state) => ({ messages: [...state.messages, message] })),
      addInitialMessage: () =>
        set((state) => ({
          messages: [
            ...state.messages,
            {
              id: Date.now().toString(),
              role: "system",
              content:
                "I'm Plant Care AI Assistant, How can I assist you further today?",
            },
          ],
        })),
      clearMessages: () => set({ messages: [] }),
    }),
    {
      name: "chat-storage",
    }
  )
);
