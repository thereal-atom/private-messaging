export interface Avatar {
    id: string;
    url: string;
};

export interface User {
    id: string;
    name: string;
    avatar: Avatar;
    email: string;
};

export interface PartialMessage {
    content: string;
    chatId: string;
    authorId: string;
};

export interface Message {
    id: string;
    content: string;
    // in the database it's saved as a string
    // but before we send it to the client we convert it to a number
    // or the client converts it in the array
    createdAt: number;
    authorId: string;
    author: User;
    chatId: string;
};

export interface Project {
    id: string;
    name: string;
};