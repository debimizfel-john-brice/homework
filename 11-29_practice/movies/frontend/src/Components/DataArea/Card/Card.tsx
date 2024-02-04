import MovieModel from '../../../Models/MovieModel';
import './Card.css';

interface CardProps {
    movie: MovieModel,
    deleteMovie: (movieId: number) => void,

}

function Card({ movie, deleteMovie }: CardProps): JSX.Element {
    const date = new Date(movie.movieDate).toLocaleDateString();


    return (
        <article className="Card">
            {movie.movieName}
            <p>{date}</p>
            <small>{movie.movieDuration}</small>
            <button onClick={() => deleteMovie(movie.movieId)}>Delete</button>
        </article>
    );
}

export default Card;
