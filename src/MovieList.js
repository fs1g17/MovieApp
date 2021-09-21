import { useState } from "react";

const MovieList = ({ data, sortFunc }) => {
    function dateSort(movie1, movie2){
        return new Date(movie1.released).getTime() - new Date(movie2.released).getTime();
    }

    function scoreSort(movie1, movie2){
        return movie1.score - movie2.score;
    }

    return ( 
        <div className="movie-list">
            {data && data.sort(sortFunc === 0 ? dateSort : scoreSort).reverse().map(movie => (
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