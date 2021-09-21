import useFetch from "./useFetch";
import MovieFilters from "./MovieFilters";
import MovieList from "./MovieList";
import { useState } from "react";

const MovieOverlay = ({ studio }) => {
    const { data, isPending, error } = useFetch('http://my-json-server.typicode.com/1SpatialGroupLtd/studiodata/productions?studioId=' + studio);
    const [ customSort, setCustomSort ] = useState(0);

    const setDateSort = () => {
        console.log('set date sort');
        setCustomSort(0);
    }

    const setScoreSort = () => {
        console.log('set score sort');
        setCustomSort(1);
    }

    return ( 
        <div className="movie-overlay">
            {data && <MovieFilters setDateSort={setDateSort} setScoreSort={setScoreSort}/>}
            {data && <MovieList data={data} sortFunc={customSort}/>}
        </div>
     );
}
 
export default MovieOverlay;