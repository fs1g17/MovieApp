const MovieList = ({ data, sortFunc }) => {
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