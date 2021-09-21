import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MovieList from './MovieList';
import { useState } from 'react';

function App() {
  const [ studio, setStudio ] = useState(null);

  return (
    <Router>
      <Navbar studio={studio} setStudio={setStudio}/>
      <MovieList studio={studio}/>
    </Router>
  );
}

export default App;
