//Filename: main.jsx
//Author: Kyle McColgan
//Date: 5 August 2026
//Description: This file contains the main entry point for the clock site.

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <App />
  </StrictMode>
);
