const hexValues = ["0","1","2","3","4","5","6","7","8","9","a","b","c","d","e"];

const populate = (a) => {
  for ( let i = 0; i < 6; i++ ) {
    let x = Math.round( Math.random() * 14 );
    let y = hexValues[x];
    a += y;
  }
  return a;
}

export const generateGradient = () => {
  const newColor1 = populate('#');
  const newColor2 = populate('#');
  const angle = Math.round( Math.random() * 360 );
  
  return "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
}

export const filters = {
  'default': (input, context, width, height) => {
    if (input.paused || input.ended) return;  
    
    context.drawImage(input, 0, 0, width, height);
        var frame = context.getImageData(0, 0, width, height);

    context.putImageData(frame, 0, 0);
    return;
  },
  'greyscale': (input, context, width, height) => {
    if (input.paused || input.ended) return;  
    
    context.drawImage(input, 0, 0, width, height);
    var frame = context.getImageData(0, 0, width, height);
    var l = frame.data.length / 4;  

    for (var i = 0; i < l; i++) {
        var grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

        frame.data[i * 4 + 0] = grey;
        frame.data[i * 4 + 1] = grey;
        frame.data[i * 4 + 2] = grey;
    }
    context.putImageData(frame, 0, 0);

    return;
  },
  'blue': (input, context, width, height) => {
    if (input.paused || input.ended) return;  
    
    context.drawImage(input, 0, 0, width, height);
    var frame = context.getImageData(0, 0, width, height);
    var l = frame.data.length / 4;  

    for (var i = 0; i < l; i++) {
        var grey = (frame.data[i * 4 + 0] + frame.data[i * 4 + 1] + frame.data[i * 4 + 2]) / 3;

        frame.data[i * 4 + 0] = grey;
        frame.data[i * 4 + 1] = grey;
        frame.data[i * 4 + 2] = 200;
    }
    context.putImageData(frame, 0, 0);

    return; 
  }
};