import express, { NextFunction, Request, Response } from "express"
import dataSerivce from "../5-services/data-serivce";
import { DataModel } from "../2-models/data-model";

//TODO delete this file
// Create Router:
const router = express.Router(); // Capital R


// GET http://localhost:4000/api/__________/
router.get("/", async (request: Request, response: Response, next: NextFunction) => {

    try {

        // Get all products:
        const products = await dataSerivce.getAllEvents();

        // Response back:
        response.json(products);

    } catch (error) {
        next(error)
    }

});


// GET http://localhost:4000/api/_______/:_id
router.get("/:_id([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction) => {

    try {
        // Extract the id from the route:
        const _id = request.params._id;

        // Get that product:
        const product = await dataSerivce.getOneData(_id);

        // Response back:
        response.json(product);
    } catch (error) {
        next(error)
    }

})


// POST http://localhost:4000/api/_____
router.post("/", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const data = new DataModel(request.body);

        // Add it to the database:
        const added = await dataSerivce.addData(data);

        // Response back:
        response.status(201).json(added);
    } catch (error) {
        next(error)
    }

});


// PUT http://localhost:4000/api/________/:_id
router.put("/:_id([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction) => {

    try {
        request.body._id = request.params._id;
        const data = new DataModel(request.body);
        const updated = await dataSerivce.updateData(data);
        response.json(updated);
    } catch (error) {
        next(error)
    }

});


// DELETE http://localhost:4000/api/________/:_id
router.delete("/:_id([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction) => {

    try {
        const _id = request.params._id;
        await dataSerivce.deleteData(_id);
        response.sendStatus(204);
    } catch (error) {
        next(error)
    }

});


export default router;