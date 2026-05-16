//Filename: App.jsx
//Author: Kyle McColgan
//Date: 15 May 2026
//Description: This file contains the app entry point for the clock site.

import React from 'react';
import AnalogClock from './components/AnalogClock/AnalogClock';

import './App.css';

function App()
{
  return (
    <main className="app">
      <div className="vaultLight" />
      <div className="architecturalGlow" />

      <AnalogClock />
    </main>
  );
}

export default App;
