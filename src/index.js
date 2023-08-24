import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

const composant = () => {
  return <h1 className='my-class-2'> Hello World JSX !! </h1>
}

root.render(
  composant()
);

reportWebVitals();
