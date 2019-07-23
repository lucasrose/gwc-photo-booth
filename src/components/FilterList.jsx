import React, { useState, useEffect } from 'react';
import FilterItem from './FilterItem';
import { getFilters } from '../utilities/helpers';
import '../styles/list.css';

function FilterList(props) {
  const { handleClick } = props;
  const filters = getFilters();
  return (
    <div className="filter-list">
      { filters.map((filter, index) => {
        return <FilterItem key={index} name={filter} onClick={() => handleClick(index)} />
      })}
    </div>
  );
}

export default FilterList;