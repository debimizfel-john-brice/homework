import dal from '../utils/dal';
import { ResourceNotFoundError, ValidationError } from '../models/client-errors';
import TheaterModel from '../models/theater_model';
import MovieModel from '../models/movie_model';
import { OkPacket } from 'mysql';

async function getTheaters(): Promise<TheaterModel[]> {
    const sql = "SELECT * FROM theaters";
    const theaters = await dal.execute(sql);
    return theaters;
}

async function getMoviesPerTheater(theaterId: number): Promise<MovieModel[]> {
    const sql = "SELECT * FROM movies WHERE theaterId = ?";
    const movies = await dal.execute(sql, [theaterId]);
    if (!movies) throw new ResourceNotFoundError(theaterId);
    return movies;
}

async function addMovie(movie: MovieModel): Promise<MovieModel> {
    movie.validate();

    const sql = "INSERT INTO movies VALUES(DEFAULT, ?, ?, ?, ?)";
    const info: OkPacket = await dal.execute(sql, [movie.theaterId, movie.movieName, movie.movieDate, movie.movieDuration]);
    movie.movieId = info.insertId;
    return movie;
}

async function deleteMovie(movieId: number): Promise<void> {
    const sql = "DELETE FROM movies WHERE movieId = ?";
    const info: OkPacket = await dal.execute(sql, [movieId]);
    if (!info.affectedRows) throw new ResourceNotFoundError(movieId);
}

export default {
    getTheaters,
    getMoviesPerTheater,
    addMovie,
    deleteMovie
}