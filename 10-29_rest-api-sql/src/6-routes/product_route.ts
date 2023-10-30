import express, { Request, Response } from "express";
import products_service from "../5-services/products_service";
import ProductModel from "../2-models/product_model";

const router = express.Router();

router.get('/api/products', async (req: Request, res: Response) => {
    const product = await products_service.getAllProducts();
    res.json(product);
});

router.get('/api/products/:id', async (req: Request, res: Response) => {
    const id = +req.params.id;
    const product = await products_service.getOneProduct(id);
    res.json(product);
});

router.post('/api/products', async (req: Request, res: Response) => {
    const product = new ProductModel(req.body);
    const addedProduct = await products_service.addProduct(product);
    res.status(201).json(addedProduct);
});

router.put('/api/products/:id', async (req: Request, res: Response) => {
    req.body.id = +req.params.id;
    const product = new ProductModel(req.body);
    const updatedProduct = await products_service.updateProduct(product);
    res.json(updatedProduct);
});


router.delete('/api/products/:id', async (req: Request, res: Response) => {
    const id = +req.params.id;
    await products_service.deleteProduct(id);
    res.sendStatus(204);
});

export default router;

