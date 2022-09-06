import { z } from "zod";
import { PartialChat, PartialMessage } from "../../types";

const validateChat = (chat: PartialChat) => {
    const ChatSchema = z.object({
        name: z.string(),
        description: z.string(),
        userEmails: z.array(z.string()),
    });

    return ChatSchema.safeParse(chat);
};

const validateMessage = (message: PartialMessage) => {
    const MessageSchema = z.object({
        content: z
            .string()
            .min(1)
            .max(512),
        chatId: z.string(),
        authorId: z.string(),
    });

    return MessageSchema.safeParse(message);
};

export default Object.freeze({
    validateChat,
    validateMessage,
});