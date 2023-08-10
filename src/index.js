import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// const reactElement = React.createElement('h1', { className: 'my-class' }, 'Hello World');

// const tree = React.createElement('div', { className: 'my-class-div' }, reactElement);

const h1 = <h1 className='my-class'> Hello world JSX !</h1>

root.render(
  h1
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
