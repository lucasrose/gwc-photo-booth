import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
import { generateGradient } from '../utilities/helpers';
import LoadingBar from './LoadingBar';
import Main from './Main';
import '../styles/splash.css';

const backgroundColor = generateGradient();

function SplashScreen() {
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setHasLoaded(true);
    }, 1000);
  }, []);

  return (
    <>
    {!hasLoaded ? 
      <div className="splash-screen" style={{'background': backgroundColor}}>
        <img src={logo} className="App-logo" alt="logo" />
        <LoadingBar/>
      </div> : <Main/>
    }
    </>
  );
}

export default SplashScreen;
