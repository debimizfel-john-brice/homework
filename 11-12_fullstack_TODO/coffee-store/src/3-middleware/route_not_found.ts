import { Request, Response, NextFunction } from "express";
import { RouteNotFound } from "../2-models/error_status";

export function routeNotFound(req: Request, res: Response, next: NextFunction) {
    const err = new RouteNotFound(req.originalUrl);
    next(err);
}