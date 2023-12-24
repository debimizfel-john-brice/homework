import express, { NextFunction, Request, Response } from "express";
import furniture_service from "../5-services/furniture_service";
import FurnitureModel from "../2-models/furniture_model";

const router = express.Router();
export default router;

// GET http://localhost:4000/api/furnitures
router.get("/furnitures", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const furnitures = await furniture_service.getFurnitures();
        res.json(furnitures);
    } catch (error) {
        next(error);
    }
});

// POST http://localhost:4000/api/furnitures
router.post("/furnitures", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const furniture = await furniture_service.addFurniture(req.body);
        res.status(201).json(furniture);
    } catch (error) {
        next(error);
    }
});

// PUT http://localhost:4000/api/furnitures/:furnitureId
router.put("/furnitures/:furnitureId([0-9]+)", async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.furnitureId = parseInt(req.params.furnitureId);
        const furniture = await furniture_service.updateFurniture(new FurnitureModel(req.body));
        res.json(furniture);
    } catch (error) {
        next(error);
    }
});


// DELETE http://localhost:4000/api/furnitures/:furnitureId
router.delete("/furnitures/:furnitureId([0-9]+)", async (req: Request, res: Response, next: NextFunction) => {
    try {
        await furniture_service.deleteFurniture(+req.params.furnitureId);
        res.sendStatus(204);
    } catch (error) {
        next(error);
    }
});
