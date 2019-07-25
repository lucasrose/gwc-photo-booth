import React, { useRef, useEffect } from 'react';
import '../styles/filterBooth.css';
import { filters } from '../utilities/helpers';
import logo from '../logo.png';

function compute(context, canvas, input, stopped, width, height, el) {
  const currentFilter = input.getAttribute('currentfilter');
  filters[currentFilter](input, context, width, height, el);  
  
  requestAnimationFrame(function () {  
      if(stopped) {
          context.fillStyle = "black";
          context.fillRect(0, 0, canvas.width, canvas.height);
          return;
      }
      compute(context, canvas, input, stopped, width, height, el);
  }); 
}

function Canvas(props) {
  const { currentFilter } = props;  //change canvas based on filter
  const canvasRef = useRef(null);
  const videoRef = useRef(null);
  let stopped;
  let stream;
  let width;
  let height;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const input = videoRef.current;

    let el = document.createElement('img');
    el.src = logo;

    input.addEventListener("play", function() {
        if (input != null) {
          width = input.width;  
          height = input.height;
          compute(context, canvas, input, stopped, width, height, el);
        }        
    }, false);
    window.navigator.mediaDevices.getUserMedia({ audio: false, video: { width: 640, height: 480 } })
      .then(function(s) {
          stream = s;        
          input.srcObject = stream;
          input.play();
      })
      .catch(function(err) {
          console.log("An error occurred: " + err);
    });
    stopped = false;
  }, []);

  return(
    <div className="filter-booth">
      <video ref={videoRef} id="input-video" width={640} height={480} style={{"display":"none"}} currentfilter={currentFilter}></video>
      <canvas ref={canvasRef} width={640} height={480}/>
    </div>
  )
}

export default Canvas