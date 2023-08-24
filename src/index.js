import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Hello } from './Hello';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Hello name="zakaria" age="25">
    <button type='submit'>Submit</button>
    <button type='submit'>Submit 3</button>
  </Hello>
  </>
);
