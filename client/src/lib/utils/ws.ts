import ioClient, { Socket } from "socket.io-client";
import type {
    ClientToServerEvents,
    ServerToClientEvents,
} from "private-messaging";

const socket: Socket<ServerToClientEvents, ClientToServerEvents> = ioClient("http://localhost:50451");

socket.on("connected", () => {
    console.log("ws connected");
});

export const io = socket;