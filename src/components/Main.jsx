import React, {useState} from 'react';
import FilterList from './FilterList';
import Booth from './Booth';
import FilterBoothTitle from './FilterBoothTitle';

function Main() {
  const [currentFilter, setCurrentFilter] = useState(null);
  return (
    <>
      <FilterBoothTitle name="GWC Photo Booth"/>
      <Booth/>
      <FilterList
        handleClick={setCurrentFilter}
      />
    </>
  );
}

export default Main;
