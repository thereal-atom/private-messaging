import type { Chat, Message } from "private-messaging";
import { writable } from "svelte/store";

export const chatsStore = writable<Chat[]>([]);

export const setChats = (chats: Chat[]) => {
    chatsStore.set(chats);
};

export const addMessage = (message: Message) => {
    chatsStore.update(chats => {
        const chat = chats.find(chat => chat.id === message.chatId);
        if (chat) {
            chat.messages.push(message);
        };

        return chats;
    });
};