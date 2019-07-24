import React, { useState, useEffect } from 'react';
import '../styles/filterBooth.css';
import { generateGradient } from '../utilities/helpers';

function FilterItem(props) {
  const { name, color, handleClick, isSelected} = props;
  return (
    <div className="filter-item" onClick={handleClick} style={{"background": isSelected ? 'burlywood': ''}}>
      <p className="filter-item-name">{name}</p>
    </div>
  );
}

export default FilterItem;