import MovieFilters from "./MovieFilters";
import MovieList from "./MovieList";

const MovieOverlay = ({ data, sortByDate, sortByScore, setMovieID }) => {
    return ( 
        <div className="movie-overlay">
            <MovieFilters sortByDate={sortByDate} sortByScore={sortByScore} />
            <MovieList data={data} setMovieID={setMovieID}/>
        </div>
     );
}
 
export default MovieOverlay;