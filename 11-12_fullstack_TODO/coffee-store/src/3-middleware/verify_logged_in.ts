import { NextFunction, Request, Response } from "express";
import token from "../4-utils/token";

function verifyLoggedIn(req: Request, res: Response, next: NextFunction) {
    try {
        token.verifyRequestToken(req);
        next();
    } catch (error) {
        next(error);
    }
}

export default verifyLoggedIn;