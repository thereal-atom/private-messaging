import type { PartialMessage } from "private-messaging";
import { io } from "../utils/ws";
import { addMessage } from "../stores/chats";

io.on("error", data => {
    console.log(data);
});

io.on("messageCreate", message => {
    addMessage(message);
});

export const createMessage = (message: PartialMessage) => {
    io.emit("messageCreate", message);
};