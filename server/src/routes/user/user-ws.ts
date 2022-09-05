import { io } from "../../app";
import {
    User,
} from "../../types/types";

io.on("connection", socket => {
    socket.on("userOnline", (userId: string) => {
        // update user's online status in db
        // send user online to all users (io.emit())
    });

    socket.on("userOffline", (userId: string) => {
        // update user's online status in db
        // send user offline to all users (io.emit())
    });

    socket.on("userTyping", (userId: string) => {
        // send user typing to all users (io.emit())
    });

    socket.on("userTypingStop", (userId: string) => {
        // send user typing stop to all users (io.emit())
    });
});