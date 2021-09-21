import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import MovieOverlay from './MovieOverlay';

function App() {
  const [ studio, setStudio ] = useState(null);

  return (
    <Router>
      <Navbar setStudio={setStudio}/>
      {studio && <MovieOverlay studio={studio}/>}
    </Router>
  );
}

export default App;
