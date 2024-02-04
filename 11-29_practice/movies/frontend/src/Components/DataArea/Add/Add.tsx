import { useForm } from "react-hook-form";
import "./Add.css";
import MovieModel from "../../../Models/MovieModel";
import notifyService from "../../../Utils/NotifyService";
import dataService from "../../../Services/DataService";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import TheaterModel from "../../../Models/TheaterModel";

const Add = () => {
    const { register, handleSubmit, formState } = useForm<MovieModel>();
    const [theaters, setTheaters] = useState<TheaterModel[]>([]);

    const navigate = useNavigate();

    useEffect(() => {
        dataService.getTheaters().then(setTheaters).catch(notifyService.error);
    }, []);

    const save = async (movie: MovieModel) => {
        try {
            await dataService.addMovie(movie);
            notifyService.success("Movie added!");
            navigate("/list");
        } catch (error) {
            notifyService.error(error);
        }
    }
    return (
        <form className="Add" onSubmit={handleSubmit(save)}>
            <article >
                <div>
                    <label>Cinema</label>
                    <select {...register("theaterId", MovieModel.TheaterValidation)}>
                        <option key="" value="" disabled selected>Select cinema</option>
                        {theaters.map(t => <option key={t.theaterId} value={t.theaterId}>{t.theaterName}</option>)}
                    </select>
                    <span className="err_message">{formState.errors.theaterId?.message}</span>

                    <label>Name</label>
                    <input type="text" {...register("movieName", MovieModel.NameValidation)} />
                    <span className="err_message">{formState.errors.movieName?.message}</span>
                </div>
                <div >
                    <label>Release date</label>
                    <input type="datetime-local" {...register("movieDate", MovieModel.DateValidation)} />
                    <span className="err_message">{formState.errors.movieDate?.message}</span>

                    <label>Duration</label>
                    <input type="number"  {...register("movieDuration", MovieModel.DurationValidation)} />
                    <span className="err_message">{formState.errors.movieDuration?.message}</span>
                </div>
                <button>Upload movie</button>
            </article>
        </form>
    );
}

export default Add;
