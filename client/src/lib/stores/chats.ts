import type { Chat, Message } from "private-messaging";
import { writable } from "svelte/store";

export const chatsStore = writable<Chat[]>([]);

export const setChats = (chats: Chat[]) => {
    chatsStore.set(chats);
};

export const addMessage = (message: Message) => {
    chatsStore.subscribe(chats => {
        const chatIndex = chats.findIndex(chat => chat.id === message.chatId);
        const chat = chats[chatIndex];
        if (!chat) return;

        chat.messages.push(message);

        chats[chatIndex] = chat;

        chatsStore.set(chats);
    });
};