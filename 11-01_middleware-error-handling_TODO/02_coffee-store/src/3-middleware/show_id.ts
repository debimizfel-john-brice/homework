import { NextFunction, Request, Response } from "express";

function showId(req: Request, res: Response, next: NextFunction) {
    console.log("User want to update id: " + req.params.id);
    next();
}

export default showId;