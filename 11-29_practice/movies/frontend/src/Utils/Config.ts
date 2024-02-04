class Config {
    public theaterUrl = "http://localhost:4000/api/cinema/theaters";
    public moviesPerTheaterUrl = "http://localhost:4000/api/cinema/movies-per-theater/";
    public moviesUrl = "http://localhost:4000/api/cinema/movies/";
}
const appConfig = new Config();
export default appConfig;