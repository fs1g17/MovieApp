import useFetch from "./useFetch";

const MoviePoster = ({ movieID }) => {
    const { data: movie } = useFetch('http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/movies/' + movieID);
    return ( 
        <div className="movie-poster">
            {movie && 
                <div className="movie-poster-content">
                    <div className="movie-info">
                        <div className="movie-details">
                            <h3>{ movie.title }</h3>
                            <div>Released: { movie.released }</div>
                            <div>Score: { movie.score }</div>
                            <div>Duration: { movie.runtime }</div>
                            <div>Rating: { movie.rated }</div>
                        </div>
                        <div className="movie-picture">
                            <img src={ movie.poster } alt="new" />
                        </div>
                    </div>
                    <div className="movie-plot">
                        <h3>Plot</h3>
                        <div>{ movie.plot }</div>
                    </div>
                </div>
            }
        </div>
     );
}
 
export default MoviePoster;

// http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/movies/