// src/IsometricPlatform.js
import React from 'react';
import './IsometricPlatform.css';

const IsometricPlatform = () => {
  return (
    <div className="isometric-container">
      <div className="isometric-platform">
        <div className="isometric-face isometric-top"></div>
        <div className="isometric-face isometric-front"></div>
        <div className="isometric-face isometric-left"></div>
      </div>
    </div>
  );
};

export default IsometricPlatform;