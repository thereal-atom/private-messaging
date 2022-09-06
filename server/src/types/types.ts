export interface Avatar {
    id: string;
    url: string;
};

export interface User {
    id: string;
    name: string;
    email: string;
    avatar: Avatar;
    createdAt: number;
    updatedAt: number;
};

// the message data that the server ws receives from the client
export interface PartialMessage {
    content: string;
    chatId: string;
    authorId: string;
};

export interface PartialUpdatedMessage extends PartialMessage { previousContent: string };

export interface Message extends PartialMessage {
    id: string;
    author: User;
    // in the database they (createdAt, updatedAt) are saved as a string
    // but before we send it to the client we convert it to a number
    // or the client converts it in the array
    createdAt: number;
    updatedAt: number;
};

export interface UpdatedMessage extends Message { previousContent: string };

export interface PartialChat {
    name: string;
    description: string;
    userEmails: string[];
};

export interface PartialUpdatedChat extends PartialChat { previousName: string };

export interface Chat extends PartialChat {
    id: string;
    group: boolean;
    avatarUrl: string;
    messages: Message[];
};

export interface UpdatedChat extends Chat {
    previousName: string;
};