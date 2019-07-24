import React, { useState, useEffect } from 'react';
import '../styles/filterBooth.css';
import { generateGradient } from '../utilities/helpers';

function FilterItem(props) {
  const backgroundColor = generateGradient();
  const { name, handleClick} = props;
  return (
    <div className="filter-item" style={{"background": '#0f0f0f'}} onClick={handleClick}>{name}</div>
  );
}

export default FilterItem;