import express, { NextFunction, Request, Response } from "express"
import orderService from "../5-services/order-serivce";
import { OrderModel } from "../2-models/order-model";


// Create Router:
const router = express.Router();

// GET http://localhost:4000/api/orders/orders-by-phone/:phone
router.get("/orders-by-phone/:phone", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const phone = request.params.phone;
        const orders = await orderService.getOrderByPhone(phone);
        response.json(orders);
    } catch (error) {
        next(error)
    }

})

// POST http://localhost:4000/api/orders
router.post("/", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const order = new OrderModel(request.body);
        const addedOrder = await orderService.addOrder(order);
        response.status(201).json(addedOrder);
    } catch (error) {
        next(error)
    }

});


export default router;