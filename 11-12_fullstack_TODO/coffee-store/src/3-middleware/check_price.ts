import { Request, Response, NextFunction } from "express";

function checkPrice(req: Request, res: Response, next: NextFunction) {
    if (req.body.price === 0) {
        console.log("Free Coffee!");
    }
    next();
}

export default checkPrice;