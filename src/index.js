import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


function HelloTwo() {
  return <h2>Hello From the seconds components</h2>
}

function Hello() {
  return <>
  <h1>Hello World first components</h1>
  <HelloTwo></HelloTwo>
</>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Hello />
);
