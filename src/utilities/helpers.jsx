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

export const getFilters = () => {
  return ['Filter 1', 'Filter 2', 'Filter 3', 'Filter 4', 'Filter 5'];
}