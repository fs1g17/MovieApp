import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import MovieOverlay from './MovieOverlay';
import MovieScreen from './MovieScreen';

function App() {
  const [ studio, setStudio ] = useState(null);

  return (
    <Router>
      <Navbar setStudio={setStudio}/>
      {studio && <MovieScreen studio={studio}/>}
      {/* {studio && <MovieOverlay studio={studio}/>} */}
    </Router>
  );
}

export default App;
