import express, { Request, Response, NextFunction } from "express"
import dataService from "../5-services/data-service";
import ProductModel from "../2-models/product-model";

const router = express.Router();


// GET http://localhost:4000/api/products-by-category/:categoryId
router.get("/products-by-category/:categoryId([0-9]+)", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const categoryId = +request.params.categoryId;
        const data = await dataService.getProductsByCategory(categoryId);
        response.json(data)
    } catch (error) {
        next(error)
    }
});


// POST http://localhost:4000/api/products/
router.post("/products", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const product = new ProductModel(request.body);
        const addedProduct = await dataService.addProducts(product);
        response.status(201).json(addedProduct);
    } catch (error) {
        next(error)
    }
});


// DELETE http://localhost:4000/api/products/:id
router.delete("/products/:id", async (request: Request, response: Response, next: NextFunction ) => {
    try {
        const id = +request.params.id;
        await dataService.deleteProduct(id);
        response.sendStatus(204);
    } catch (error) {
        next(error)
    }
});


export default router;