import React, {useState} from 'react';
import FilterList from './FilterList';
import Booth from './Booth';

function Main() {
  const [currentFilter, setCurrentFilter] = useState(null);
  return (
    <div>
      <FilterList
        handleClick={setCurrentFilter}
      />
    </div>
  );
}

export default Main;
