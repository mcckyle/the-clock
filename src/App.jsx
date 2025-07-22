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
      <header className="app-header">
        <h1>Analog Clock</h1>
      </header>
      <main>
        <AnalogClock />
      </main>
      <footer className="app-footer">
        <p>Built with React and Vite | Hosted on GitHub Pages</p>
      </footer>
    </div>
  );
}

export default App
