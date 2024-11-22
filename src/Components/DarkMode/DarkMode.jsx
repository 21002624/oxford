import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './DarkMode.css';

function CustomizedSwitches({ customStyle }) {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  useEffect(() => {
    if (isDark) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDark]);

  return (
    <Tooltip title={isDark ? "Enable Light Theme" : "Enable Dark Theme"}>
      <IconButton
        onClick={handleToggle}
        style={{
          backgroundColor: isDark ? '#000' : '#7d7d7d',
          color: isDark ? '#000000' : '#ffffff',
          borderRadius: '50%',
          width: '40px',
          height: '40px',
          transition: 'background-color 0.3s, color 0.3s',
          ...customStyle, // Apply custom styles from the prop
        }}
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default CustomizedSwitches;
