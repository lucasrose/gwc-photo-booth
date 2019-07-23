import React, { useRef } from 'react';
import '../styles/loading.css';

function LoadingBar() {
  const inputEl = useRef(null);

  return (
    <div ref={inputEl} className="loading">
     <div className="loading-bar"></div>
     <div className="loading-bar"></div>
     <div className="loading-bar"></div>
     <div className="loading-bar"></div>
    </div>
  );
}

export default LoadingBar;
