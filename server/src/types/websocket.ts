import {
    // User,
    PartialMessage,
    PartialUpdatedMessage,
    Message,
    UpdatedMessage,
    PartialChat,
    Chat,
    PartialUpdatedChat,
    UpdatedChat,
} from "./types";

type ErrorEvent =
    "messageCreate" |
    "messageUpdate" |
    "messageDelete" |
    "chatCreate" |
    "chatUpdate" |
    "chatDelete";

export interface ClientToServerEvents {
    messageCreate: (message: PartialMessage) => void;
    messageUpdate: (message: PartialUpdatedMessage) => void;
    messageDelete: (messageId: PartialMessage) => void;
    userTyping: (userId: string) => void;
    userTypingStop: (userId: string) => void;
    userOnline: (userId: string) => void;
    userOffline: (userId: string) => void;
    chatCreate: (chat: PartialChat) => void;
    chatUpdate: (chat: PartialUpdatedChat) => void;
    chatDelete: (chatId: string) => void;
};

export interface ServerToClientEvents {
    message: (message: string) => void;
    connected: () => void;
    error: (data: {
        event: ErrorEvent;
        message: string;
    }) => void;
    messageCreate: (message: Message) => void;
    messageUpdate: (message: UpdatedMessage) => void;
    messageDelete: (message: Message) => void;
    userTyping: (userId: string) => void;
    userTypingStop: (userId: string) => void;
    userOnline: (userId: string) => void;
    userOffline: (userId: string) => void;
    chatCreate: (chat: Chat) => void;
    chatUpdate: (chat: UpdatedChat) => void;
    chatDelete: (chatId: string) => void;
};

/**
 * messageCreate    -> Message  (When a user sends a message)
 * messageUpdate    -> Message  (When a user updates a message)
 * messageDelete    -> Message  (When a user deletes a message)
 * userTyping       -> User     (When a user starts typing)
 * userTypingStop   -> User     (When a user stops typing)
 * userOnline       -> User     (When a user comes online)
 * userOffline      -> User     (When a user goes offline)
 * chatCreate       -> Chat     (When a user creates a chat)
 * chatUpdate       -> Chat     (When a user updates a chat)
 * chatDelete       -> Chat     (When a user deletes a chat)
*/