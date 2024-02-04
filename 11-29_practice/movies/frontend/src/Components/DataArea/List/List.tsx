import { ChangeEvent, SyntheticEvent, useEffect, useState } from "react";
import "./List.css";
import dataService from "../../../Services/DataService";
import notifyService from "../../../Utils/NotifyService";
import TheaterModel from "../../../Models/TheaterModel";
import MovieModel from "../../../Models/MovieModel";
import Card from "../Card/Card";

function List(): JSX.Element {

    const [theaters, setTheaters] = useState<TheaterModel[]>([]);
    const [movies, setmovies] = useState<MovieModel[]>([]);

    useEffect(() => {
        dataService.getTheaters().then(setTheaters).catch(notifyService.error);
    }, []);

    function getMovies(movieId: number) {
        if (!movieId) return;
        dataService.getMoviesPerTheater(movieId).then(setmovies).catch(notifyService.error);
    }

    function deleteMovie(movieId: number) {
        dataService.deleteMovie(movieId).then(() => {
            setmovies(movies.filter(m => m.movieId !== movieId));
        }).catch(e => notifyService.error(e));
    }

    return (
        <div className="List">
            <div>
                <select onChange={e => getMovies(+e.target.value)}>
                    <option key="" value="" disabled selected>Select cinema</option>
                    {theaters.map(t => <option key={t.theaterId} value={t.theaterId}>{t.theaterName}</option>)}
                </select>
            </div>
            <div className="flex">
                {movies.map(m => <Card key={m.movieId} movie={m} deleteMovie={deleteMovie}></Card>)}
            </div>
        </div>
    );
}

export default List;
