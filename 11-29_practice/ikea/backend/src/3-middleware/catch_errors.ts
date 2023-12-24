
import { Request, Response, NextFunction } from "express";
import app_config from "../4-utils/app_config";

export default function catchErrors(err: any, req: Request, res: Response, next: NextFunction) {
    console.log(err);
    const status = err.status || 500;

    let message = err.message;
    if (app_config.isProduction && status >= 500) message = "An error has ocurred";

    res.status(status).send(message);
}