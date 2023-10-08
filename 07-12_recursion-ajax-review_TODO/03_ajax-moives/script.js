/// <reference path="/home/deborah/.local/share/jquery-3.7.0.js"/>


async function load_movies() {
    try {
        const data = await get_json("https://api.themoviedb.org/3/movie/now_playing?api_key=0e685fd77fb3d76874a3ac26e0db8a4b&language=en-US&page=1");
        display_movies(data.results);
    } catch (error) {
        alert(error.message);
    }
}

function get_json(url) {
    return new Promise((res, rej) => {
        $.ajax({
            url,
            success: res,
            error: err => rej(err.statusText)
        })
    })
}


function display_movies(movies) {
    let cards = [];
    for (const movie of movies) {
        cards.push(movie_html(movie));
    }
    $("#container").append(cards);
}

function movie_html(movie) {

    const max_length = 20;
    const movie_title = movie.original_title;
    let truncatedTitle = movie_title.length > max_length ? movie_title.substring(0, max_length) + "..." : movie_title;


    const article = new Element($("<article  data-target='movie_description'>").on("click", event => movie_description(event, movie)).html(`
        <header>
            ${truncatedTitle}
        </header>
        <div class="back_img">
            <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.poster_path}" >
        </div>
        <footer>
            &starf; ${movie.vote_average}
        </footer>`
    ));

}

function movie_description(event, movie) {
    $("#movie_title").text(movie.original_title);
    $("#backdrop_img").attr("src", `https://image.tmdb.org/t/p/w600_and_h900_bestv2/${movie.backdrop_path}`)
    $("#description").text(movie.overview);
    toggleModal(event);
}

load_movies();