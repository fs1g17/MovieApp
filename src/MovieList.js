const MovieList = ({ data, setMovieID }) => {
    return ( 
        <div className="movie-list">
            {data && data.map(movie => (
                <div className="movie-preview" key={ movie.id } onClick={() => setMovieID(movie.id)}>
                    <h3>{ movie.title }</h3>
                    <p>Released: { movie.released }</p>
                    <p>Score: { movie.score }</p>
                </div>
            ))}
        </div>
     );
}
 
export default MovieList;