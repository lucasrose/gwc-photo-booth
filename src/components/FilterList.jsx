import React, { useState, useEffect } from 'react';
import FilterItem from './FilterItem';
import { filters } from '../utilities/helpers';
import '../styles/filterBooth.css';

function FilterList(props) {
  const { currentFilter, setCurrentFilter } = props;
  return (
    <div className="filter-list">
      {Object.keys(filters).map((filter, index) => {
        return <FilterItem key={index} name={filter} isSelected={filter === currentFilter} handleClick={() => setCurrentFilter(filter)} />
      })}
    </div>
  );
}

export default FilterList;