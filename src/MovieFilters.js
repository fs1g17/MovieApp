import Button from 'react-bootstrap/Button';

const MovieFilters = ({ sortByDate, sortByScore }) => {
    return ( 
        <div className='movie-filter'>
            <Button className='filter-button' onClick={sortByDate}>Newest First</Button>
            <Button className='filter-button' onClick={sortByScore}>Highest Score First</Button>
        </div>
     );
}
 
export default MovieFilters;