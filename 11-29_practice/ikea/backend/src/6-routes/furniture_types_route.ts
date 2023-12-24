import express, { NextFunction, Request, Response } from "express";
import furniture_service from "../5-services/furniture_service";

const router = express.Router();
export default router;

// GET http://localhost:4000/api/furniture-types
router.get("/furniture-types", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const furnitureTypes = await furniture_service.getFurnitureTypes();
        res.json(furnitureTypes);
    } catch (error) {
        next(error);
    }
});

