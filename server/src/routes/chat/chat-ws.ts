import { io } from "../../app";
import {
    // PartialChat,
    PartialMessage,
    // PartialUpdatedMessage,
    // PartialUpdatedChat,
} from "../../types/types";
import { internalRequest } from "../../utils/core";

io.on("connection", socket => {
    // update user's online status
    // send user online to all users
    console.log("client connected");

    socket.on("messageCreate", (message: PartialMessage) => {
        console.log("message was created");
        // create message in database
        internalRequest(`/chat/${message.chatId}/message`, {
            method: "POST",
            data: message,
        }).then(res => {
            if (res.ok) {
                // if successful send to all connected sockets (io.emit())
                io.emit("messageCreate", res.data);
            } else {
                // else send error message to client who sent the message (socket.emit())
                console.log(res);

                socket.emit("error", {
                    event: "messageCreate",
                    message: "there was an error",
                });
            };
        });
    });

    // socket.on("messageUpdate", (message: PartialUpdatedMessage) => {
    //     // update message in db
    //     // if successful send to all connected sockets (io.emit())
    //     // else send error message to client who sent the message (socket.emit())
    // });

    // socket.on("messageDelete", (message: PartialMessage) => {
    //     // delete message from db
    //     // if successful send to all connected sockets (io.emit())
    //     // else send error message to client who sent the message (socket.emit())
    // });

    // socket.on("chatCreate", (chat: PartialChat) => {
    //     // create chat in db
    //     // if successful send to all connected sockets (io.emit())
    //     // else send error message to client who sent the message (socket.emit())
    // });

    // socket.on("chatUpdate", (chat: PartialUpdatedChat) => {
    //     // update chat in db
    //     // if successful send to all connected sockets (io.emit())
    //     // else send error message to client who sent the message (socket.emit())
    // });

    // socket.on("chatDelete", (chatId: string) => {
    //     // delete chat from db
    //     // if successful send to all connected sockets (io.emit())
    //     // else send error message to client who sent the message (socket.emit())
    // });
});