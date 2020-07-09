import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './Routes.js';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'

ReactDOM.render(
  // <React.StrictMode>
    <Routes />,
  // </React.StrictMode>,
  document.getElementById('root')
);