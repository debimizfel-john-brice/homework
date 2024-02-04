import express, { Request, Response, NextFunction } from "express"
import dataService from "../5-services/data-service";

const router = express.Router();


// GET http://localhost:4000/api/____
router.get("/", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const data = await dataService.getAll____();
        response.json(data)
    } catch (error) {
        next(error)
    }
});



// GET http://localhost:4000/api/____/:id
router.get(":id", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const id = +request.params.id;
        const data = await dataService.getOne____(id);
        response.json(data)
    } catch (error) {
        next(error)
    }
});


// More Routes:



export default router;