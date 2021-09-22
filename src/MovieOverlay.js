import useFetch from "./useFetch";
import MovieFilters from "./MovieFilters";
import MovieList from "./MovieList";

const MovieOverlay = ({ studio }) => {
    const { data, setData } = useFetch('http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/productions?studioId=' + studio);

    const dateSort = (movie1, movie2) => {
        return new Date(movie1.released).getTime() - new Date(movie2.released).getTime();
    }

    const scoreSort = (movie1, movie2) => {
        return movie1.score - movie2.score;
    }

    const sortByDate = () => {
        setData([...data].sort(dateSort).reverse());
    }

    const sortByScore = () => {
        setData([...data].sort(scoreSort).reverse());
    }

    return ( 
        <div className="movie-overlay">
            {data && <MovieFilters sortByDate={sortByDate} sortByScore={sortByScore} />}
            {data && <MovieList data={data} />}
        </div>
     );
}
 
export default MovieOverlay;