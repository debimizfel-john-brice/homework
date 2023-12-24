import Joi from "joi";
import { ValidationError } from "./client-errors";

export default class MovieModel {
    public movieId: number;
    public theaterId: number;
    public movieName: string;
    public movieDate: string;
    public movieDuration: number;

    constructor(movie: { movieId: number, theaterId: number, movieName: string, movieDate: string, movieDuration: number }) {
        this.movieId = movie.movieId;
        this.theaterId = movie.theaterId;
        this.movieName = movie.movieName;
        this.movieDate = movie.movieDate;
        this.movieDuration = movie.movieDuration;
    }

    // validation function:
    public validate() {
        const result = MovieModel.ValidationSchema.validate(this);
        if (result.error) throw new ValidationError(result.error.message);
    }

    // validation schema:
    public static ValidationSchema = Joi.object({
        movieId: Joi.number().integer().positive().optional(),
        theaterId: Joi.number().integer().positive().required(),
        movieName: Joi.string().min(2).max(50).required(),
        movieDate: Joi.string().required(),
        movieDuration: Joi.number().min(1).max(500).required(),
    });
}