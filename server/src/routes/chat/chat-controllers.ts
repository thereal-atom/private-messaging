import {
    NextFunction,
    Request,
    Response,
} from "express";

import { database } from "../../app";
import { genRanId } from "../../utils/core";
import { AppError } from "../../utils/errors";

import validation from "./chat-validation";

const create = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) throw new AppError(401, "unauthorized");
        
        const chatValidation = validation.validateChat(req.body);

        if (!chatValidation.success) throw new AppError(400, "chat validation error");

        const {
            name,
            description,
            userEmails,
        } = chatValidation.data;

        const chat = await database.chat.create({
            data: {
                id: genRanId("chat"),
                name,
                description,
                group: userEmails.length > 1,
                members: {
                    connect: [
                        { email: userEmails[0] },
                        { email: /* req.user.email */ "oscarfal2006@gmail.com" },
                    ],
                },
            },
        });

        res.status(201).send(chat);
    } catch (err) {
        next(err);
    };
};

const get = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) throw new AppError(401, "unauthorized");

        const chat = await database.chat.findFirst({
            where: {
                id: req.params.id,
            },
        });
        if (!chat) throw new AppError(400, "chat not found");

        res.send(chat);
    } catch (err) {
        next(err);
    };
};

const getAll = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) throw new AppError(401, "unauthorized");

        const chats = await database.chat.findMany({
            where: {
                members: {
                    some: {
                        id: req.user.id,
                    },
                },
            },
            include: {
                messages: {
                    take: 100,
                },
            },
        });

        res.send(chats);
    } catch (err) {
        next(err);
    };
};

// const update = async (req: Request, res: Response, next: NextFunction) => {};
// const delete = async (req: Request, res: Response, next: NextFunction) => {};

const createMessage = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.user) throw new AppError(401, "unauthorized");
        
        const messageValidation = validation.validateMessage({
            ...req.body,
            chatId: req.params.id,
        });

        if (!messageValidation.success) throw new AppError(400, "message validation error");

        const {
            content,
            chatId,
            authorId,
        } = messageValidation.data;
        
        const chat = await database.chat.findFirst({
            where: { id: chatId },
        });

        if (!chat) throw new AppError(400, "chat not found");

        const message = await database.message.create({
            data: {
                id: genRanId("message"),
                content,
                chatId,
                authorId,
            },
        });

        res.status(201).send(message);
    } catch (err) {
        next(err);
    };
};
// const getMessage = async (req: Request, res: Response, next: NextFunction) => {};
// const updateMessage = async (req: Request, res: Response, next: NextFunction) => {};
// const deleteMessage = async (req: Request, res: Response, next: NextFunction) => {};

export {
    create,
    get,
    getAll,
    createMessage,
};