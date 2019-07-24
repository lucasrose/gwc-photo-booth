import React, { useState, useEffect } from 'react';
import '../styles/filterBooth.css';

function FilterBoothTitle(props) {
  const { name} = props;
  return (
    <div className="filter-booth-title">{name}</div>
  );
}

export default FilterBoothTitle;