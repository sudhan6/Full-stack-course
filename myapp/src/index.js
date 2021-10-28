import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Navbar from './Navbar'


ReactDOM.render(
  <React.StrictMode>
    <App />
    <Navbar />
  </React.StrictMode>,
  document.getElementById('root')
);