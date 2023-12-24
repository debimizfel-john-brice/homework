import express, { NextFunction, Request, Response } from "express";
import cinema_service from "../services/cinema_service";
import MovieModel from "../models/movie_model";

const router = express.Router();

// GET http://localhost:4000/api/cinema/theaters
router.get("/theaters", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const theaters = await cinema_service.getTheaters();
        response.json(theaters);
    } catch (err) {
        next(err);
    }
});

// GET http://localhost:4000/api/cinema/movies-per-theater/:theaterId
router.get("/movies-per-theater/:theaterId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const theaterId = +request.params.theaterId;
        const movies = await cinema_service.getMoviesPerTheater(theaterId);
        response.json(movies);
    } catch (err) {
        next(err);
    }
});

// POST http://localhost:4000/api/cinema/movies
router.post("/movies", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const movie = new MovieModel(request.body);
        const addedMovie = await cinema_service.addMovie(movie);
        response.status(201).json(addedMovie);
    } catch (err) {
        next(err);
    }
});

// DELETE http://localhost:4000/api/cinema/movies/:movieId
router.delete("/movies/:movieId", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const movieId = +request.params.movieId;
        await cinema_service.deleteMovie(movieId);
        response.sendStatus(204);
    } catch (err) {
        next(err);
    }
});


export default router;