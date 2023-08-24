import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloTwo, { Hello } from './Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Hello />
  <HelloTwo></HelloTwo>
  </>
);
