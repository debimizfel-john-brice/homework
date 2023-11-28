import express, { NextFunction, Request, Response } from "express";
import Credentials from "../2-models/credentials_model";
import auth_service from "../5-services/auth_service";
import User from "../2-models/user_model";

const router = express.Router();

router.post("/api/login", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const credentials = new Credentials(req.body);
        const token = await auth_service.login(credentials);
        res.json(token);
    }
    catch (error: any) {
        next(error);
    }
});

router.post("/api/register", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = new User(req.body);
        const token = await auth_service.register(user);
        res.json(token);
    }
    catch (error: any) {
        next(error);
    }
});

export default router;