import { useState } from "react";
import MovieOverlay from "./MovieOverlay";
import MoviePoster from "./MoviePoster";
import useFetch from "./useFetch";

const MovieScreen = ({ studio }) => {

    const { data: movies, setData: setMovies } = useFetch('http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/productions?studioId=' + studio);
    const [ movieID, setMovieID ] = useState(null);

    const dateSort = (movie1, movie2) => {
        return new Date(movie1.released).getTime() - new Date(movie2.released).getTime();
    }

    const scoreSort = (movie1, movie2) => {
        return movie1.score - movie2.score;
    }

    const sortByDate = () => {
        setMovies([...movies].sort(dateSort).reverse());
    }

    const sortByScore = () => {
        setMovies([...movies].sort(scoreSort).reverse());
    }

    return ( 
        <div className="movie-screen">
            {movies && <MovieOverlay data={movies} sortByDate={sortByDate} sortByScore={sortByScore} setMovieID={setMovieID}/>}
            {movieID && <MoviePoster movieID={movieID}/>}
        </div>
     );
}
 
export default MovieScreen;