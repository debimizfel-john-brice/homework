import MovieModel from "../Models/MovieModel";
import TheaterModel from "../Models/TheaterModel";
import appConfig from "../Utils/Config";
import axios from "axios";


 class DataService {

    public async getTheaters(): Promise<TheaterModel[]> {
        const response = await axios.get<TheaterModel[]>(appConfig.theaterUrl);
        return response.data;
    }


    public async getMoviesPerTheater(theaterId: number): Promise<MovieModel[]> {
        const response = await axios.get<MovieModel[]>(appConfig.moviesPerTheaterUrl + theaterId);
        return response.data;

    }

    public async addMovie(movie: MovieModel): Promise<MovieModel> {
        const response = await axios.post<MovieModel>(appConfig.moviesUrl, movie);
        return response.data;

    }

    public async deleteMovie(movieId: number): Promise<void> {
        await axios.delete<void>(appConfig.moviesUrl + movieId);
    }
}

const dataService = new DataService();
export default dataService;