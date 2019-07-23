import React, { useState, useEffect } from 'react';
import '../styles/list.css';
import { generateGradient } from '../utilities/helpers';


function FilterItem(props) {
  const backgroundColor = generateGradient();
  const { name, onClick} = props;
  return (
    <div className="filter-item" style={{"background": backgroundColor}} onClick={onClick}>{name}</div>
  );
}

export default FilterItem;