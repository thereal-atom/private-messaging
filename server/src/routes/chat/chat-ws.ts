import { io } from "../../app";
import {
    PartialChat,
    PartialMessage,
    PartialUpdatedMessage,
    PartialUpdatedChat,
} from "../../types/types";

io.on("connection", socket => {
    // update user's online status
    // send user online to all users

    socket.on("messageCreate", (message: PartialMessage) => {
        // create message in database
        // if successful send to all connected sockets (io.emit())
        // else send error message to client who sent the message (socket.emit())
    });

    socket.on("messageUpdate", (message: PartialUpdatedMessage) => {
        // update message in db
        // if successful send to all connected sockets (io.emit())
        // else send error message to client who sent the message (socket.emit())
    });

    socket.on("messageDelete", (message: PartialMessage) => {
        // delete message from db
        // if successful send to all connected sockets (io.emit())
        // else send error message to client who sent the message (socket.emit())
    });

    socket.on("chatCreate", (chat: PartialChat) => {
        // create chat in db
        // if successful send to all connected sockets (io.emit())
        // else send error message to client who sent the message (socket.emit())
    });

    socket.on("chatUpdate", (chat: PartialUpdatedChat) => {
        // update chat in db
        // if successful send to all connected sockets (io.emit())
        // else send error message to client who sent the message (socket.emit())
    });

    socket.on("chatDelete", (chatId: string) => {
        // delete chat from db
        // if successful send to all connected sockets (io.emit())
        // else send error message to client who sent the message (socket.emit())
    });
});