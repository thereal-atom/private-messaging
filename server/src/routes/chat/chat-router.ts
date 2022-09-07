import { Router } from "express";
const router = Router();

import {
    create,
    get,
    getAll,
    createMessage,
} from "./chat-controllers";

router.post("/", create);
router.get("/all", getAll);
router.get("/:id", get);
router.post("/:id/message", createMessage);

export default router;