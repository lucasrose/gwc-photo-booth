import React, { useState, useEffect } from 'react';
import FilterItem from './FilterItem';
import { getFilters, generateGradient } from '../utilities/helpers';
import '../styles/filterBooth.css';

function FilterList(props) {
  const { handleClick } = props;
  const filters = getFilters();
  return (
    <div className="filter-list">
      { filters.map((filter, index) => {
        const color = generateGradient();
        return <FilterItem key={index} name={filter} color={color} handleClick={handleClick} />
      })}
    </div>
  );
}

export default FilterList;