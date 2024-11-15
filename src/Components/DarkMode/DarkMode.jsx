import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import './DarkMode.css';

function DarkThemeToggleButton() {
  const [isDark, setIsDark] = useState(false);

  const handleToggle = () => {
    setIsDark(!isDark);
  };

  // Apply or remove the dark-mode class to the body element based on isDark
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
          zIndex: 1000,
        }}
      >
        {isDark ? <LightModeIcon /> : <DarkModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

export default DarkThemeToggleButton;