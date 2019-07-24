import React, {useState} from 'react';
import FilterList from './FilterList';
import Canvas from './Canvas';
import FilterBoothTitle from './FilterBoothTitle';

function Main() {
  const [currentFilter, setCurrentFilter] = useState('default');
  return (
    <>
      <FilterBoothTitle name="GWC Photo Booth"/>
      <Canvas currentFilter={currentFilter} />
      <FilterList
        currentFilter={currentFilter}
        setCurrentFilter={setCurrentFilter}
      />
    </>
  );
}

export default Main;
