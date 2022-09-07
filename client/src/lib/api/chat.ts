import type { PartialMessage } from "private-messaging";
import { io } from "../utils/ws";
import { addMessage } from "../stores/chats";
import { makeRequest } from "./utils";

io.on("error", data => {
    console.log(data);
});

io.on("messageCreate", message => {
    addMessage(message);
});

const createMessage = (message: PartialMessage) => {
    io.emit("messageCreate", message);
};

const get = (id: string) => {
    return makeRequest(`/chat/${id}`);
};

const getAll = () => {
    return makeRequest("/chat/all");
};

export default Object.freeze({
    createMessage,
    get,
    getAll,
});