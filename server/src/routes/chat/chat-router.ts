import { Router } from "express";
const router = Router();

import {
    create,
    createMessage,
    getAll,
} from "./chat-controllers";

router.post("/", create);
router.get("/all", getAll);
router.post("/:id/message", createMessage);

export default router;