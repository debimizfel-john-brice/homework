import express, { NextFunction, Request, Response } from "express";
import coffee_service from "../5-services/coffee_service";
import Coffee from "../2-models/coffe_model";
import verifyLoggedIn from "../3-middleware/verify_logged_in";
import verifyAdmin from "../3-middleware/verify_admin";

const router = express.Router();

router.get("/api/coffees", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const coffees = await coffee_service.getCoffees();
        res.json(coffees);
    }
    catch (error: any) {
        next(error);
    }
});

router.get("/api/coffees/:id", async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        const coffee = await coffee_service.getCoffee(id);
        res.json(coffee);
    }
    catch (error: any) {
        next(error);
    }
});

// * logged in only
router.get("/api/coffees/expensive/:minPrice", verifyLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const minPrice = +req.params.minPrice;
        const coffees = await coffee_service.getExpensiveCoffees(minPrice);
        res.json(coffees);
    }
    catch (error: any) {
        next(error);
    }
});

// * logged in only
router.get("/api/coffees/between/:minPrice/:maxPrice", verifyLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const minPrice = +req.params.minPrice;
        const maxPrice = +req.params.maxPrice;
        const coffees = await coffee_service.getCoffeesBetween(minPrice, maxPrice);
        res.json(coffees);
    }
    catch (error: any) {
        next(error);
    }
});

// * logged in only
router.get("/api/coffees/strength/:strength", verifyLoggedIn, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const strength = +req.params.strength;
        const coffees = await coffee_service.getCoffeesByStrength(strength);
        res.json(coffees);
    }
    catch (error: any) {
        next(error);
    }
});

// & Admin only
router.post("/api/coffees", verifyAdmin, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const coffee = new Coffee(req.body);
        const newCoffee = await coffee_service.addCoffee(coffee);
        res.status(201).json(newCoffee);
    }
    catch (error: any) {
        next(error);
    }
});

// & Admin only
router.put("/api/coffees/:id", verifyAdmin, async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.id = +req.params.id;
        const coffee = new Coffee(req.body);
        const updatedCoffee = await coffee_service.updateCoffee(coffee);
        res.json(updatedCoffee);
    } catch (error: any) {
        next(error);
    }
});

// & Admin only
router.patch("/api/coffees/:id", verifyAdmin, async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.body.id = +req.params.id;
        const coffee = new Coffee(req.body);
        const updatedCoffee = await coffee_service.updatePartialCoffee(coffee);
        res.json(updatedCoffee);
    }
    catch (error: any) {
        next(error);
    }
});

// & Admin only
router.delete("/api/coffees/:id", verifyAdmin, async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = +req.params.id;
        await coffee_service.deleteCoffee(id);
        res.sendStatus(204);
    }
    catch (error: any) {
        next(error);
    }
});

export default router;