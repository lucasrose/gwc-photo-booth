import React, { useState, useEffect } from 'react';
import SplashScreen from './components/SplashScreen';
import Main from './components/Main';
import './App.css';

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  
  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {!hasLoaded ? <SplashScreen/> : <Main/>}
    </div>
  );
}

export default App;