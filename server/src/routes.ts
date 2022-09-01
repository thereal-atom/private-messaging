import { Router } from "express";

import userRouter from "./routes/user";
import chatRouter from "./routes/chat";

export default (app: Router) => {
    app.use("/user", userRouter);
    app.use("/chat", chatRouter);
};