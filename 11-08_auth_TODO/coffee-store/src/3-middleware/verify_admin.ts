import { NextFunction, Request, Response } from "express";
import token from "../4-utils/token";
import RoleModel from "../2-models/role_model";
import { UnauthorizedError } from "../2-models/error_status";
import User from "../2-models/user_model";

function verifyAdmin(req: Request, res: Response, next: NextFunction) {
    try {
        const user = new User(token.verifyRequestToken(req).user);
        if (user.roleId !== RoleModel.Admin) { throw new UnauthorizedError("Not an admin"); }
        next()
    } catch (error) {
        next(error)
    }
}

export default verifyAdmin;