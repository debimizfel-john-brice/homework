import { NextFunction, Request, Response } from "express";
import create_filelog from "../4-utils/create_filelog";

async function useFilelog(req: Request, res: Response, next: NextFunction) {
    try {
        await create_filelog.activityLogger(req.method, req.originalUrl, req.ip);
        next();

    } catch (err: any) {
        next(err);
    }
}

export default useFilelog;