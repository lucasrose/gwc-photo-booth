import React, { useState, useEffect } from 'react';
import logo from '../logo.png';
import LoadingBar from './LoadingBar';
import '../styles/splash.css';

function SplashScreen() {

  return (
    <div className="splash-screen">
      <img src={logo} className="App-logo" alt="logo" />
      <LoadingBar/>
    </div>
  );
}

export default SplashScreen;
