import useFetch from "./useFetch";

const MovieList = ({ studio }) => {
    const { data, isPending, error } = useFetch('http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/productions?studioId=' + studio);

    return ( 
        <div className="movie-list">
            {data && data.map(movie => (
                <div className="movie-preview" key={ movie.id }>
                    <h3>{ movie.title }</h3>
                    <p>Released: { movie.released }</p>
                    <p>Score: { movie.score }</p>
                </div>
            ))}
        </div>
     );
}
 
export default MovieList;