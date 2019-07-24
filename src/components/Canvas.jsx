import React, { useRef, useEffect } from 'react';
import '../styles/filterBooth.css';

function getCanvasFromFilter(inputEl, filter){
  return <canvas ref={inputEl} width="inherit" height="inherit"/>;
}

function Canvas(props) {
  const { filter } = props;  //change canvas based on filter
  const inputEl = useRef(null);

  useEffect(() => {
    const canvas = inputEl.current;
    const context = canvas.getContext("2d");
  }, []);

  const canvas = getCanvasFromFilter(inputEl, filter);
  return(
    <div className="filter-booth">
      {canvas}
    </div>
  )
}

export default Canvas