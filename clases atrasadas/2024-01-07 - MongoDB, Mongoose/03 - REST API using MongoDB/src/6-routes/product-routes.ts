import express, { NextFunction, Request, Response } from "express"
import productsSerivce from "../5-services/products-serivce";
import { ProductModel } from "../2-models/product-model";


// Create Router:
const router = express.Router(); // Capital R 


// GET http://localhost:4000/api/products/
router.get("/", async (request: Request, response: Response, next: NextFunction ) => {

    try {
        
        // Get all products:
        const products = await productsSerivce.getAllProducts();
        
        // Response back:
        response.json( products );

    } catch (error) {
        next(error)
    }

});


// GET http://localhost:4000/api/products/:_id
router.get("/:_id([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction  ) => {

    try{
        // Extract the id from the route:
        const _id = request.params._id;

        // Get that product:
        const product = await productsSerivce.getOneProduct(_id);

        // Response back:
        response.json(product);
    } catch (error) {
        next(error)
    }

})


// POST http://localhost:4000/api/products
router.post("/", async (request: Request, response: Response, next: NextFunction  ) => {

    try{
        const product = new ProductModel(request.body );

        // Add it to the database:
        const addedProduct = await productsSerivce.addProduct(product);

        // Response back:
        response.status(201).json( addedProduct );
    } catch (error) {
        next(error)
    }

});


// PUT http://localhost:4000/api/products/:_id
router.put("/:_id([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction) => {

    try{
        // Take route id into the body:
        request.body._id = request.params._id;

        // Extract the product from the body of the request:
        const product = new ProductModel(request.body);

        // Update product in the database:
        const updatedProduct = await productsSerivce.updateProduct(product);

        // Response back:
        response.json( updatedProduct );
    } catch (error) {
        next(error)
    }

});


// DELETE http://localhost:4000/api/products/:_id
router.delete("/:_id([0-9A-Fa-f]{24})", async (request: Request, response: Response, next: NextFunction) => {
    
    try{
        // Extract the id from the route:
        const _id = request.params._id;

        // Delete product from the database:
        await productsSerivce.deleteProduct(_id);

        // Response back:
        response.sendStatus(204);
    } catch (error) {
        next(error)
    }

});


export default router;