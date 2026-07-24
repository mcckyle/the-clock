//Filename: App.jsx
//Author: Kyle McColgan
//Date: 24 June 2026
//Description: This file contains the app entry point for the clock site.

import React from 'react';
import AnalogClock from './components/AnalogClock/AnalogClock';

import './App.css';

function App()
{
  return (
    <main className="app">
      <div className="galleryLight" />
      <div className="marbleAtmosphere" />

      <AnalogClock />
    </main>
  );
}

export default App;
