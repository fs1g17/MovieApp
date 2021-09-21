import Button from 'react-bootstrap/Button';

const MovieFilters = ({ setDateSort, setScoreSort }) => {
    return ( 
        <div className='movie-filter'>
            <Button className='filter-button' onClick={setDateSort}>Newest First</Button>
            <Button className='filter-button' onClick={setScoreSort}>Highest Score First</Button>
        </div>
     );
}
 
export default MovieFilters;