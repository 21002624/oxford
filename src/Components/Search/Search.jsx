import React, { useState } from 'react';
import './Search.css';

const ModernSearchInput = () => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="search-container">
      <div className={`search-input-container ${isFocused ? 'focused' : ''}`}>
        <input
          type="text"
          className="search-input"
          placeholder="Search..."
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </div>
    </div>
  );
};

export default ModernSearchInput;
