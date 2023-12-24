import express, { Request, Response, NextFunction } from "express";
import dataService from "../5-services/data-service";

const router = express.Router();

// GET http://localhost:4000/api/categories
router.get("/", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const data = await dataService.getAllCategories();
        response.json(data)
    } catch (error) {
        next(error)
    }
});

export default router;