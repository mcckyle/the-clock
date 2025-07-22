//Filename: App.jsx
//Author: Kyle McColgan
//Date: 21 July 2025
//Description: This file contains the app entry point for the clock site.

import React from 'react';
import AnalogClock from './components/AnalogClock/AnalogClock';
import './App.css';

function App()
{
  return (
    <div className="app">
      <AnalogClock />
    </div>
  );
}

export default App
