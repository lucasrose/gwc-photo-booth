import React, {useState} from 'react';
import FilterList from './FilterList';
import Canvas from './Canvas';
import FilterBoothTitle from './FilterBoothTitle';

function Main() {
  const [filter, setFilter] = useState(null);
  return (
    <>
      <FilterBoothTitle name="GWC Photo Booth"/>
      <Canvas filter={filter} />
      <FilterList
        handleClick={setFilter}
      />
    </>
  );
}

export default Main;
